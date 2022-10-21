import md5 from 'md5';
import ws from '~/utils/socket';

const chatApi = `${process.env.CHAT_URL}/Index/`;
const twSocketUrl = process.env.TW_SOCKET;

let submitting = true;
let beat_timer = 0;
const beat_time = 30000;
const reconnect_delay = 2000;

const lineConf = process.env.lineConf;

export const state = () => ({
  contact_loaded: false,
  custom_im_loaded: false,
  custom_im_page: false,
  custom_im_open: false,
  custom_im_count: 0,
  im_news: 0,
  im_token: null,
  imei: md5(new Date().getTime() / 1000),
  contact_lists: null,
  message_lists: null,
  consult_goods: null, // 咨询的商品
  line: { ...lineConf, notice: true }
});

export const actions = {
  // 即时通讯-登录{ uid }
  fetchImSign({ commit, dispatch }, params) {
    console.log('im sign');
    const routeName = this.app.context.route.name;
    submitting = true;
    return this.$axios.get('im/sign').then(res => {
      const { status, data } = res;
      submitting = false;
      if (status === 200 && data.code === 200) {
        const { token, unread_count } = data.data;
        commit('updateImToken', token);
        commit('setImNews', unread_count);
        // dispatch('fetchImSub', { cname, token })
        dispatch('connectWs', token);
        // 即时通讯列表页不请求联系人，在组件内请求
        if (routeName === 'im-id') {
          dispatch('fetchImContacts', { token });
        }
      }
      return res;
    });
  },
  connectWs({ dispatch, commit }, token) {
    window.twsocket = ws(`${twSocketUrl}?token=${token}`, {
      message: e => {
        // console.log(e)
        commit('updateImSub', e.data);
      },
      open: e => dispatch('open', e),
      close: e => dispatch('close', e)
    });
  },
  sendBeats({ dispatch, state }) {
    if (!submitting && window.twsocket) {
      clearTimeout(beat_timer);

      console.log('tw socket ping');
      twsocket.send('ping', () => {
        dispatch('reconnectWs');
      });

      beat_timer = setTimeout(() => {
        dispatch('sendBeats');
      }, beat_time);
    }
  },
  reconnectWs({ dispatch, rootState }) {
    console.log('tw socket reconnect', 'submitting：', submitting, 'socket对象：', twsocket);
    if (rootState.user.uid && !submitting && !twsocket) {
      console.log('进入 tw 重連');
      setTimeout(() => {
        dispatch('fetchImSign');
      }, reconnect_delay);
    }
  },
  open({ commit, dispatch, state }, event) {
    console.log('---> tw socket open');

    setTimeout(() => {
      dispatch('sendBeats');
    }, beat_time);
  },
  close({ commit, dispatch }, event) {
    console.log('---> tw socket close');
    window.twsocket = '';
    dispatch('reconnectWs');
  },
  // 即时通讯-登出 { token }
  fetchImSignout({ commit, state }) {
    const params = { token: state.im_token };
    return this.$axios.get(`${chatApi}Im/signout`, { params }).then(res => {
      return res.data;
    });
  },
  // 即时通讯-联系人列表 {token}
  fetchImContacts({ commit }, params) {
    return this.$axios.get(`${chatApi}Im/getRecentContacts`, { params }).then(res => {
      const { status, data } = res;
      if (status) {
        commit('updateContactLists', data);
      }
      return res;
    });
  },
  // 即时通讯-获取联系人信息{ token, fuid }
  fetchImContactInfo({ commit }, params) {
    return this.$axios.get(`${chatApi}Im/getContactInfo`, { params }).then(res => {
      const { data } = res;
      if (data.status) {
        const goods = data.data.goods;
        commit('setGoodsInfo', goods);
      }
      return data;
    });
  },
  // 即时通讯-获取最近消息{ token, fuid, type, start_id }
  fetchImMessage({ commit }, params) {
    return this.$axios.get(`${chatApi}Im/getMessages`, { params }).then(res => {
      const { data } = res;
      if (res.status === 200) {
        commit('updateMessageLists', data);
      }
      return res.data;
    });
  },
  // 即时通讯-发送消息 { token, fuid, type, body,  }
  fetchSendMessage({ commit }, params) {
    return this.$axios.post(`${chatApi}Im/send`, params).then(res => {
      const { status, data } = res;
      if (status === 200 && data.status && params.type === 'msg:txt') {
        commit('addMessageLists', data.data);
        commit('rebuildContactLists', { ...data.data, from: data.data.fuid });
      }
      return res;
    });
  },
  // 即时通讯-消息已读通知
  fetchImReaded({ commit }, params) {
    return this.$axios.post(`${chatApi}Im/setReadPosition`, params).then(res => {
      if (res.data.status) {
        commit('updateImReaded', params);
      }
      return res;
    });
  },
  // 即时通讯-清除商品信息{fuid, token}
  fetchImDelGoodsInfo({ commit }, params) {
    return this.$axios.get(`${chatApi}Im/delGoodsInfo`, { params }).then(res => {
      if (res.data.status) {
        commit('updateConsultGoods', params);
      }
      return res;
    });
  },
  // 即時通訊-刪除聯繫人{fuid, token}
  fetchImDelContact({ commit }, params) {
    return this.$axios.get(`${chatApi}Im/delRecentContact`, { params }).then(res => {
      if (res.data.status) {
        commit('delContactLists', params);
      }
      return res;
    });
  },
  // 即时通讯-联络方式{ uid  }
  fetchUserDeal({ commit }, params) {
    return this.$axios.get('user/user_deal', { params }).then(res => {
      return res.data;
    });
  },
  // 即时通讯-停權檢測
  fetchImStatus({ commit }) {
    return this.$axios.post('im/status').then(res => {
      return res.data;
    });
  },
  // 即時通訊-自助開啟
  fetchOpenImDeny({ commit }) {
    return this.$axios.post('im/openImDeny').then(res => {
      return res.data;
    });
  }
  // 即時通訊-line通知綁定
  // fetchLineOauth({ commit }) {
  //   return this.$axios.post('line/oauth').then(res => {
  //     const { data } = res
  //     if (data.status) {
  //       commit('updateLineData', data)
  //     }
  //     return data
  //   })
  // }
};

export const mutations = {
  customIMLoaded(state, v) {
    state.custom_im_loaded = v;
  },
  customIMPage(state, v) {
    state.custom_im_page = v;
  },
  customIM(state, v) {
    state.custom_im_open = v;
  },
  setCustomCount(state, data) {
    state.custom_im_count = data;
  },
  updateImToken(state, token) {
    state.im_token = token;
  },
  updateContactLists(state, data) {
    state.contact_lists = data.data;
    state.contact_loaded = true;
    // this.commit('im/addImNews')
  },
  delContactLists(state, data) {
    for (let i = 0; i < state.contact_lists.length; i++) {
      if (data.fuid === state.contact_lists[i].fuid) {
        this.commit('im/updateImNews', state.contact_lists[i].unread_count);
        state.contact_lists.splice(i, 1);
        break;
      }
    }
  },
  updateMessageLists(state, data) {
    const listData = data.data;
    const list = state.message_lists;
    if (list) {
      state.message_lists = listData.concat(list);
    } else {
      state.message_lists = [...listData];
    }
  },
  resetMessageLists(state, data) {
    state.message_lists = null;
  },
  updateSendMessage(state, data) {
    const listData = data.data;
    const list = state.message_lists;
    if (list) {
      state.message_lists.push(listData);
    } else {
      state.message_lists = [listData];
    }
  },
  updateImSub(state, data) {
    // const content = JSON.parse(data.content)
    // const content = JSON.parse(data)
    const content = typeof data == 'string' ? JSON.parse(data) : data;
    const list = state.message_lists;

    const fuid = content.from;
    // 当前正在聊天的对象id
    const chatId = this.app.context.route.params.id;
    switch (content.type) {
      // 消息同步
      // {id:"",from:"30668",type:"cmd:syncsend",body:"{id:"",fuid:"",from:"",type:"msg:txt",body:"7",client:"mobile",imei:"",time:"",unread:"1",auto:"",session:""}",client:"",imei:"",time:"",unread:"",auto:""}
      case 'cmd:syncsend':
        if (this.state.im.imei !== content.imei) {
          let syncData = JSON.parse(content.body);
          if (fuid === chatId) {
            this.commit('im/addMessageLists', syncData);
          }
          if (syncData.type === 'msg:exclusive') {
            syncData = { ...syncData, body: JSON.parse(syncData.body).title };
          }
          this.commit('im/rebuildSyncContactLists', syncData);
          this.commit('im/addImNews');
        }
        break;
      case 'sys:notify':
        break;

      // 接收消息
      // {id:"",fuid:"1094675",from:"30668",type:"msg:txt",body:"1",client:"mobile",imei:"ff91f865229bdf9879e7cd4283a86f3e",time:"2019-09-10 11:08:48",unread:"1",auto:"",session:"chat|30668,1094675"}
      case 'msg:txt':
        if (fuid === chatId) {
          this.commit('im/addMessageLists', content);
        }
        this.commit('im/rebuildContactLists', content);
        this.commit('im/addImNews');
        break;

      // 开设专属
      // {"id":"","fuid":"1094675","from":"25320","type":"msg:exclusive","body":"{\"id\":22174819977,\"title\":\"3333333332222222111111\",\"price\":100,\"path\":\"\\u5929\\u5802\\\/01 \\u592a\\u967d\\u795e\\u963f\\u6ce2\\u7f85\\\/\\u5e33\\u865f\"}","client":"web","imei":"","time":"2019-09-25 10:41:07","unread":"1","auto":"","session":"chat|25320,1094675"}
      case 'msg:exclusive':
        if (fuid === chatId) {
          this.commit('im/addMessageLists', content);
        }
        const exData = { ...content, body: JSON.parse(content.body).title };
        this.commit('im/rebuildContactLists', exData);
        this.commit('im/addImNews');
        break;

      // 消息已读状态
      case 'cmd:setreaded':
        if (state.message_lists) {
          state.message_lists.map(v => {
            if (v.from === content.fuid) {
              v.unread = '0';
            }
            return v;
          });
        }
        break;

      // 設置已讀
      // {"from":"","type":"cmd:allreaded","body":"","client":"web","imei":"","time":"","unread":"1"}
      case 'cmd:allreaded':
        // this.commit('im/markAllReaded', content)
        const allReadedData = JSON.parse(content.body);
        this.commit('im/updateImReaded', { fuid });
        this.commit('im/setImNews', allReadedData.total * 1);
        break;

      // 在线状态
      case 'cmd:setstatus':
        if (!state.contact_lists) {
          return;
        }
        state.contact_lists.map(v => {
          if (v.fuid === fuid) {
            v.status = content.body;
          }
          return v;
        });
        break;

      // 安全提示
      case 'info:warn':
        if (list) {
          state.message_lists.push(content);
        }
        break;

      // 商品咨询
      case 'info:goods':
        if (fuid === chatId) {
          state.consult_goods = JSON.parse(content.body);
        }
        break;
    }
  },
  rebuildSyncContactLists(state, data) {
    // 操作联系人至列表第一
    const fuid = data.fuid;
    const { id, body, time, type } = data;
    const newItem = {
      fuid: fuid,
      goods: '',
      is_vip: 0,
      last_id: id,
      last_msg: body,
      lasttime: time,
      name: fuid,
      official: 0,
      offline: { count: 1, body: body },
      read: { position: id, body: body },
      body: body,
      position: '0',
      read_pos: 0,
      status: 1,
      unread_count: 0
    };
    // 列表为空
    if (!state.contact_lists) {
      state.contact_lists = [newItem];
    } else {
      // 不在联系人列表
      if (!state.contact_lists.some((v) => v.fuid === fuid)) {
        state.contact_lists.unshift(newItem);
      } else {
        for (let i = 0; i < state.contact_lists.length; i++) {
          const contact = state.contact_lists[i];
          if (contact.fuid === fuid) {
            contact.last_id = id;
            contact.last_msg = body;
            contact.lasttime = time;
            // contact.status = 1
            if (type === 'msg:txt' || type === 'msg:exclusive') {
              contact.unread_count = 0;
            }
            const item = state.contact_lists.splice(i, 1);
            state.contact_lists.unshift(item[0]);
          }
        }
      }
    }
  },
  rebuildContactLists(state, data) {
    // 当前正在聊天的对象id
    const chatId = this.app.context.route.params.id;
    // 操作联系人至列表第一
    const fuid = data.from;
    const { id, body, time, type } = data;
    const newContact = {
      fuid: fuid,
      goods: '',
      is_vip: 0,
      last_id: id,
      last_msg: body,
      lasttime: time,
      name: fuid,
      official: 0,
      offline: { count: 1, body: body },
      read: { position: id, body: body },
      body: body,
      position: '0',
      read_pos: 0,
      status: 1,
      unread_count: chatId === fuid ? 0 : 1
    };
    // 当前联系人为空或者联系人不在列表中，则创建新的联系人
    if (!state.contact_lists) {
      state.contact_lists = [newContact];
    } else {
      if (!state.contact_lists.some(v => v.fuid === fuid)) {
        state.contact_lists.unshift(newContact);
      } else {
        for (let i = 0; i < state.contact_lists.length; i++) {
          const contact = state.contact_lists[i];
          if (contact.fuid === fuid) {
            contact.last_id = id;
            contact.last_msg = body;
            contact.lasttime = time;
            // contact.status = 1
            if (type === 'msg:txt' || type === 'msg:exclusive') {
              contact.unread_count = chatId === fuid ? 0 : (contact.unread_count * 1 + 1);
            }
            const item = state.contact_lists.splice(i, 1);
            state.contact_lists.unshift(item[0]);
          }
        }
      }
    }
  },
  updateImReaded(state, data) {
    if (state.contact_lists) {
      const { fuid } = data;
      state.contact_lists.map(v => {
        if (v.fuid === fuid) {
          v.unread_count = 0;
        }
        return v;
      });
    }
  },
  updateConsultGoods(state, data) {
    state.consult_goods = null;
  },
  addImNews(state) {
    if (state.contact_lists) {
      let unread = 0;
      state.contact_lists.map(v => {
        if (v.unread_count > 0) {
          unread = unread + (v.unread_count * 1);
        }
        return v;
      });
      state.im_news = unread;
    }
  },
  setImNews(state, payload) {
    state.im_news = payload;
  },
  updateImNews(state, count) {
    state.im_news = state.im_news - (count * 1);
  },
  setGoodsInfo(state, data) {
    state.consult_goods = data;
  },
  addMessageLists(state, data) {
    const list = state.message_lists;
    if (list) {
      state.message_lists.push(data);
    } else {
      state.message_lists = [data];
    }
  },
  updateLineNotice(state, data) {
    state.line.notice = false;
  }
};
