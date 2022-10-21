import ws from '~/utils/socket';
import remove from 'lodash.remove';
import { date_format } from '~/utils/utils';

function initApi(token) {
  const imDomain = process.env.HK_CHAT_URL;
  const query = '?token=' + token + '&cb=?';

  return {
    send: function(data, cb) {
      // $.getJSON(`${imDomain}?c=hkim&a=send${query}`, data, cb);
      $.post(`${imDomain}/message/send`, { ...data, token }, res => cb(res));
    },
    getHistoryMessages: function(data, cb) {
      $.getJSON(imDomain + '/message/history' + query, data, cb);
      // $.getJSON(`${imDomain}?c=hkim&a=getHistoryMessages${query}`, data, cb);
    },
    getRecentMessages: function(contact_id, cb) {
      $.getJSON(imDomain + '/message/recent' + query, { contact_id: contact_id }, cb);
      // $.getJSON(`${imDomain}?c=hkim&a=getRecentMessages${query}`, { contact_id }, cb);
    },
    getContacts: function(cb) {
      $.getJSON(imDomain + '/contact/list' + query, cb);
      // $.getJSON(`${imDomain}?c=hkim&a=getContacts${query}`, cb);
    },
    deleteContact: function(contact_id, cb) {
      $.post(`${imDomain}/contact/delete`, { contact_id, token }, res => cb(res));
      // $.getJSON(`${imDomain}?c=hkim&a=deleteContact${query}`, { contact_id }, cb);
    },
    setContactReadedPosition: function(data, cb) {
      $.post(`${imDomain}/contact/set-readed-position`, { ...data, token }, res => cb(res));
      // $.getJSON(`${imDomain}?c=hkim&a=setContactReadedPosition${query}`, data, cb);
    }
  };
}

export const state = () => ({
  socket_connect: false,
  contact_load: true, // 联系人列表是否正在加载

  contact_list: [], // 聯繫人列表
  conversation_list: {}, // 對話列表
  goods_list: {}, // 商品緩存 與 聯繫人列表掛鉤
  total_unread: 0,

  sel_friend: '',

  beat_time: 30000,
  reconnect_delay: 2000
});

const hkSocketUrl = process.env.HK_SOCKET;
let submitting = true;
let beat_timer = 0;
let hk_im_api = '';

export const actions = {
  sign({ dispatch, commit, rootState }) {
    if (!rootState.my.userinfo.signed) {
      return;
    }
    console.log('hk socket sign', 'submitting：', submitting);
    submitting = true;
    this.$axios.get('hkim/sign').then(res => {
      submitting = false;
      if (res.status == 200 && res.data.data) {
        const token = res.data.data.data.token;
        const total_unread = res.data.data.data.unread_count || 0;
        commit('setUnreadCount', total_unread);
        dispatch('connectWs', token);
        hk_im_api = initApi(token);
      }
    });
  },
  connectWs({ dispatch }, token) {
    window.mobsocket = ws(`${hkSocketUrl}?token=${token}`, {
      message: e => dispatch('message', e),
      open: e => dispatch('open', e),
      close: e => dispatch('close', e)
    });
  },
  sendBeats({ dispatch, state }) {
    if (!submitting && state.socket_connect && window.mobsocket) {
      clearTimeout(beat_timer);
      console.log('hk socket ping');
      mobsocket.send('ping', () => {
        dispatch('reconnectWs');
      });
      beat_timer = setTimeout(() => {
        dispatch('sendBeats');
      }, state.beat_time);
    }
  },
  reconnectWs({ dispatch, state, rootState }) {
    console.log('hk socket reconnect', 'submitting：', submitting, 'socket对象：', mobsocket);
    if (rootState.user.uid && !submitting && !mobsocket) {
      console.log('hk socket 進入重連步驟');
      setTimeout(() => {
        dispatch('sign');
      }, state.reconnect_delay);
    }
  },
  open({ commit, dispatch, state }, event) {
    console.log('hk socket ---> open');
    commit('socketConnect', true);
    // dispatch('getContactList');
    setTimeout(() => {
      dispatch('sendBeats');
    }, state.beat_time);
  },
  close({ commit, dispatch }, event) {
    console.log('hk socket ---> close');
    window.mobsocket = '';
    commit('socketConnect', false);
    dispatch('reconnectWs');
  },
  message({ commit, dispatch, state, rootState }, event) {
    try {
      const message = JSON.parse(event.data);
      if ('content' in message) { // 有content字段
        // let data = JSON.parse(message.content);
        const data = typeof message.content == 'string' ? JSON.parse(message.content) : message.content;
        let tmp_to, newData;

        switch (data.type) {
          case 'msg:txt':
          case 'msg:exlink':
            console.log('收到消息', data);
            tmp_to = data.from;
            newData = { ...data, to: tmp_to, sender_id: tmp_to, time: data.time };
            commit('addMsg', newData);
            commit('setUnreadCount', state.total_unread + 1);
            dispatch('existInConcactList', newData); // 修改聯繫人
            break;

          case 'cmd:syncsend':
            console.log('同步消息', data);
            if (this.$config.uuid == data.body.uuid) {
              return;
            }
            console.log('syncsend');
            newData = { ...data.body, sender_id: rootState.user.uid, time: data.time };
            commit('addMsg', newData);
            commit('editContactList', { msg: newData, type: 'edit_sort_not_set_read' });
            break;

          case 'cmd:setreaded':
            console.log('標記已讀', data);
            commit('setMsgRead', data.from);
            break;

          case 'info:goods':
            console.log('商品信息', data);
            commit('addGoodsList', data);
            break;

          case 'tip:attention':
            console.log('tip attention', data);
            setTimeout(() => { // 担心同步延迟，暂时这样
              commit('addRiskTip', data);
            }, 1000);
            break;

          // case 'cmd:allreaded': //頭部提醒
          //   console.log('同步已讀', data);

          //   if(state.contact_load){
          //     let last_unread = data.body.total * 1 || 0;
          //     commit('setUnreadCount', last_unread);
          //   }else{
          //     commit('editContactList', {type: 'del_unread', id: data.from});
          //   }
          //   break;
        }
      } else { // 沒有content字段
        switch (message.type) {
          case 'cmd:status':
            console.log('在線狀態標記', message);
            const data = {
              online: message.body * 1,
              to: message.from,
              type: 'online_change'
            };
            commit('editContactList', data);
            break;
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
  // 獲取聯繫人列表
  getContactList({ commit }, fn) {
    hk_im_api.getContacts(res => {
      if (res.status) {
        let total_unread = 0;
        for (const v of res.data) {
          total_unread += isNaN(v.unreaded_count) ? 0 : v.unreaded_count * 1;
        }
        commit('getContactList', res.data);
        commit('setUnreadCount', total_unread);

        fn && fn();
      }
    });
  },
  // 针对 msg 发送者是否存在联系人列表
  existInConcactList({ commit, state }, data) {
    let tmp_id = -1;
    let goods = {};

    for (const [i, v] of state.contact_list.entries()) {
      if (v.contact_id == data.to) { // 存在联系人列表
        tmp_id = i;
        goods = { ...v.goods };
        break;
      }
    }

    if (data.to in state.goods_list) { // 找到商品列表緩存中對應的商品
      goods = state.goods_list[data.to];
    }

    if (tmp_id != -1) { // 存在聯繫人列表
      const ndata = { ...data, goods };
      commit('editContactList', { msg: ndata, type: 'edit_sort' });
    } else { // 不存在
      const ndata = {
        contact: { is_online: 1 },
        contact_id: data.to,
        contacted_at: data.time,
        recent_message: { body: data.body },
        unreaded_count: 1,
        goods
      };
      commit('addContactUser', ndata); // 排第一位
    }
  },
  // 刪除聯繫人
  delContact({ commit, state }, v) {
    return new Promise((resolve, reject) => {
      const { contact_id, unreaded_count } = v;
      hk_im_api.deleteContact(contact_id, res => {
        if (res.status) { // 刪除成功
          const total_unread = state.total_unread - unreaded_count * 1;
          if (total_unread >= 0) {
            commit('setUnreadCount', total_unread);
          }
          commit('editContactList', { id: contact_id, type: 'del_contact_user' });
          commit('removeConversation', contact_id);
          resolve();
        } else {
          reject(res);
        }
      });
    });
  },
  addContactUser({ commit, state, dispatch }, data) {
    if (state.contact_load) return;

    let contact_user = '';
    let set_goods_data = '';// 同步的商品信息

    for (const v of state.contact_list) {
      if (v.contact_id == data.contact_id) {
        contact_user = v;
        break;
      }
    }

    if (data.goods) {
      set_goods_data = {
        contact_id: data.contact_id,
        ...data.goods
      };
    }

    if (!contact_user) { // 不存在列表
      if (set_goods_data) {
        dispatch('setGoodsInfo', set_goods_data);
      }
      commit('addContactUser', data);
      contact_user = data;
    } else {
      if (data.goods) { // 帶有商品呼起聯繫人
        if (contact_user.goods.id != data.goods.id) { // 聯繫人列表缓存 商品不同时 更新商品
          dispatch('setGoodsInfo', set_goods_data);
        }
        contact_user = { ...contact_user, goods: { ...data.goods } };
        commit('editContactList', { type: 'edit_goods', data: contact_user });
      }
    }

    commit('storeSelFriend', contact_user);
  },
  // 獲取最近聊天消息
  getRecentMessages({ commit }, contact_id) {
    return new Promise((resolve, reject) => {
      hk_im_api.getRecentMessages(contact_id, res => {
        if (res.status) {
          resolve();
          const list = {
            msg: res.data || [],
            id: contact_id
          };
          commit('addConversation', list);
        } else {
          reject(res);
        }
      });
    });
  },
  // 發送消息
  async sendMsg({ commit, state, rootState }, v) {
    return new Promise((resolve, reject) => {
      const { body, to, type } = v;

      if (!window.mobsocket || !window.mobsocket.is_connect) {
        resolve('您已斷開鏈接，請重新整理頁面');
      }

      if (!body) {
        resolve('不能發送空信息喔');
      }

      const now_time = new Date();
      const timestamp = now_time.getTime();
      const uuid = this.$config.uuid;
      const fake_msg = {
        uuid,
        timestamp,
        body,
        client: 'web',
        from: rootState.user.uid,
        readed: 0,
        type: 'msg:txt',
        sending: 1,
        time: date_format('yyyy-MM-dd hh:mm:ss', now_time),
        to
      };
      // 添加臨時消息數據
      commit('addMsg', { ...fake_msg });
      if (v.beforeSend) {
        v.beforeSend();
      }
      hk_im_api.send({ body, to, type, uuid }, res => {
        let res_msg = '';
        let msg = '';
        if (!res.status) {
          msg = { ...fake_msg, sending: 2 };
          res_msg = res.message;
        } else {
          msg = { ...res.data, to, timestamp, from: rootState.user.uid, sending: 0 };
        }
        commit('addMsg', msg);
        resolve(res_msg);
      });
    });
  },
  /**
   * 設置已讀
   * @param {object} data
   * @param {number} data.contact_id //聯繫人 id
   * @param {number} data.position //消息 id
   */
  async setRead({ commit }, data) {
    return new Promise((resolve, reject) => {
      hk_im_api.setContactReadedPosition(data, res => {
        if (res.status) {
          commit('editContactList', { type: 'del_unread', id: data.contact_id });
          resolve();
        } else {
          reject(res);
        }
      });
    });
  },
  getHistory({ commit }, data) {
    return new Promise((resolve, reject) => {
      hk_im_api.getHistoryMessages(data, res => {
        if (res.status) {
          resolve(res);
        } else {
          reject(res.message);
        }
      });
    });
  }
};

export const mutations = {
  // socket狀態
  socketConnect(state, data) {
    state.socket_connect = data;
  },
  // 未讀數量
  setUnreadCount(state, data) {
    state.total_unread = data;
  },
  // 添加聯繫人
  addContactUser(state, data) {
    state.contact_list.unshift(data);
  },
  // 聯繫人列表
  getContactList(state, data) {
    state.contact_load = false;
    state.contact_list = data;
  },
  // 調整聯繫人列表
  editContactList(state, data) {
    const new_list = state.contact_list.concat();
    let tmp;

    switch (data.type) {
      case 'del_contact_user':
        // console.log('刪除聯繫人')
        remove(new_list, v => {
          return v.contact_id == data.id;
        });
        state.contact_list = new_list;
        break;
      case 'edit_sort': // 新消息
      case 'edit_sort_not_set_read': // 自己發送消息
        // console.log('由消息調整順序')
        const { msg } = data;
        tmp = remove(new_list, v => {
          return v.contact_id == msg.to;
        });
        tmp = tmp[0];
        if (tmp) {
          tmp.recent_message.body = msg.body;
          tmp.contacted_at = msg.time;

          if (data.type == 'edit_sort') { // 新消息
            tmp.unreaded_count = tmp.unreaded_count * 1 + 1;
            tmp.goods = msg.goods;
          }
          new_list.unshift(tmp);
          state.contact_list = new_list;
        }
        break;
      case 'edit_goods':
        console.log('由商品調整順序', data);
        tmp = remove(new_list, v => {
          return v.contact_id == data.data.contact_id;
        });
        tmp = tmp[0];
        if (tmp) {
          if (data.data.goods.id) { // 呼起聯繫人，有商品時才會替換原來的商品數據
            tmp.goods = data.data.goods;
          }
          new_list.unshift(tmp);
          state.contact_list = new_list;
        }
        break;

      case 'del_unread':
        // console.log('清除未讀標記')
        for (const v of new_list) {
          if (v.contact_id == data.id) {
            state.total_unread = state.total_unread - v.unreaded_count;
            v.unreaded_count = 0;
            break;
          }
        }
        state.contact_list = new_list;
        break;

      case 'online_change':
        // console.log('設置在線狀態')
        for (const v of new_list) {
          if (v.contact_id == data.to) {
            v.contact.is_online = data.online;
            tmp = 1;
            break;
          }
        }
        if (tmp) {
          console.log('set online');
          state.contact_list = new_list;
        } else {
          console.log('not set status');
        }
        break;
    }
  },
  // 插入商品數據
  addGoodsList(state, data) {
    state.goods_list = { ...state.goods_list, [data.from]: data.body };
  },
  // 插入消息
  addMsg(state, msg) {
    const fuid = msg.to;
    const list = state.conversation_list[fuid] ? JSON.parse(JSON.stringify(state.conversation_list[fuid])) : '';
    let fg = 0;
    if (!list) {
      return;
    }
    // 当前联系人有历史记录
    if (msg.timestamp) {
      for (const i in list) {
        if (list[i].timestamp == msg.timestamp) {
          fg = 1;
          list[i] = { ...msg };
        }
      }
    } else if (msg.id) {
      for (const i in list) {
        if (list[i].id == msg.id) {
          fg = 1;
          list[i] = { ...msg };
        }
      }
    }
    if (!fg) {
      list.push(msg);
    }
    state.conversation_list = { ...state.conversation_list, [fuid]: list };
  },
  // 添加风险提示
  addRiskTip(state, data) {
    const tmp_conversation = state.conversation_list[data.from];
    if (!tmp_conversation) {
      return;
    }
    let idx = -1;
    let tmp_item = '';
    tmp_conversation.some((v, i) => {
      if (v.id == data.body.message_id) {
        idx = i;
        tmp_item = v;
        if (tmp_item.attention) {
          tmp_item.attention.push({ content: data.body.content });
        } else {
          tmp_item.attention = [{ content: data.body.content }];
        }
        return true;
      }
      return false;
    });
    if (idx == -1) {
      return;
    }
    tmp_conversation.splice(idx, 1, tmp_item);
  },
  // 設置已讀
  setMsgRead(state, from_id) {
    const tmp = state.conversation_list[from_id];
    if (tmp) {
      for (const v of tmp) {
        v.readed = 1;
      }
      state.conversation_list = { ...state.conversation_list, [from_id]: tmp };
    }
  },
  // 添加會話
  addConversation(state, data) {
    state.conversation_list = { ...state.conversation_list, [data.id]: data.msg };
  },
  // 刪除會話
  removeConversation(state, data) {
    delete state.conversation_list[data];
  },
  // 清理所有數據
  emptyImData(state) {
    state.socket_connect = false;
    state.contact_load = true; // 联系人列表是否正在加载

    state.contact_list = []; // 聯繫人列表
    state.conversation_list = {}; // 對話列表
    state.goods_list = {}; // 商品緩存 與 聯繫人列表掛鉤
    state.total_unread = 0;

    state.sel_friend = '';
    if (window.mobsocket) {
      mobsocket.close();
      window.mobsocket = '';
    }
  },
  // 選中聯繫人
  storeSelFriend(state, data) {
    state.sel_friend = data;
  },
  // 清除聯繫人
  delSelFriend(state, data) {
    state.sel_friend = '';
  }
};
