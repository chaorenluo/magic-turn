export const state = () => ({
  hasNews: 0,
  message: [],
  msmData: [],
  user_msg_unread: 0,
  appeal_msg_unread: 0,
  message_detail: [],
  category: [],
  wareList: [],
  customer_tel: '(02) 5579-8591',
  customer_tel_able: 1,
  customer_tel_time: {
    holiday: "14:00-21:00",
    weekdays: "10:00-21:00"
  }
});

export const actions = {
  // 客服中心-获取未读数量
  fetchAppealCount({ commit }, params) {
    return this.$axios.get('user/customer').then(res => {
      commit('updateAppealCount', res.data ? res.data.data : {});
    });
  },
  // 客服中心-簡訊列表-读简讯
  fetchAppealMsmRead({ commit }, params) {
    return this.$axios.get('user/message_read', { params }).then(res => {
      return res;
    });
  },
  // 客服中心-簡訊列表
  fetchAppealMsmList({ commit }, params) {
    return this.$axios.get('user/message', { params }).then(res => {
      return res.data;
    });
  },
  // 客服中心-申訴列表
  fetchAppealList({ commit }, params) {
    return this.$axios.get('appeal/list', { params }).then(res => {
      const data = res.data;
      commit('updateAppealList', data);
      return data;
    });
  },
  // 客服中心-申訴內容
  fetchApealDetail({ commit }, params) {
    return this.$axios.get('appeal/detail', { params }).then(res => {
      const data = res.data;
      commit('updateAppealDetail', data);
      return data;
    });
  },
  // 客服中心-檢查申訴權限
  fetchAppealCheck({ commit }) {
    return this.$axios.get('appeal/check').then(res => {
      return res.data;
    });
  },
  // 客服中心-申诉类别
  fetchAppealType({ commit }) {
    return this.$axios.get('appeal/type').then(res => {
      commit('updateAppealType', res.data.data);
    });
  },
  // 客服中心-我的商品
  fetchAppealWare({ commit }, params) {
    return this.$axios.get('appeal/wareList', { params }).then(res => {
      const data = res.data;
      commit('updateWareList', data);
      return data;
    });
  },
  // 客服中心-提交申訴
  fetchAppealAdd({ commit }, params) {
    return this.$axios.post('appeal/add', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 客服中心-回覆申訴
  fetchAppealReply({ commit }, params) {
    return this.$axios.post('appeal/reply', params).then(res => {
      const data = res.data;
      if (data.code === 200) {
        commit('replyMsgDetail', params);
      }
      return data;
    });
  },
  // 客服中心-问与答新消息
  fetchHasNews({ commit }, params) {
    return this.$axios.get('user/faq_msg').then(res => {
      const data = res.data;
      if (data.code === 200) {
        commit('updateHasNews', data);
      }
      return data;
    });
  },
  fetchAppealMsg({ commit }, params) {
    return this.$axios.get('user/appeal_msg').then(res => {
      return res.data;
    });
  },
  fetchAppealAppraise({ commit }, params) {
    return this.$axios.get('appeal/appraise', { params }).then(res => {
      return res.data;
    });
  }
};
export const getters = {
  appealTotal(state) {
    return state.user_msg_unread + state.appeal_msg_unread;
    // return 20;
  }
};

export const mutations = {
  updateAppealCount(state, data) {
    state.user_msg_unread = data.user_msg_unread && data.user_msg_unread > 0 ? data.user_msg_unread : 0;
    state.appeal_msg_unread = data.appeal_msg_unread && data.appeal_msg_unread > 0 ? data.appeal_msg_unread : 0;
    state.customer_tel_able = data.customer_tel_able || 0;
    state.customer_tel = data.customer_tel || '';
    state.customer_tel_time = data.customer_tel_time || {
      holiday: "14:00-21:00",
      weekdays: "10:00-21:00"
    };
  },
  updateAppealList(state, data) {
    const { list } = data.data;
    const { message } = state;
    state.message = list ? message.concat(list) : message;
  },
  resetAppealList(state) {
    state.message = [];
  },
  updateAppealDetail(state, data) {
    const detail = data.data.appealText;
    const { message_detail } = state;
    state.message_detail = data ? message_detail.concat(detail) : message_detail;
  },
  resetAppealDetail(state) {
    state.message_detail = [];
  },
  replyMsgDetail(state, data) {
    const { content } = data;
    const detail = {
      content,
      from: 1,
      image: null,
      postTime: '剛剛'
    };
    state.message_detail.push(detail);
  },
  updateAppealType(state, data) {
    state.category = data.category;
  },
  updateWareList(state, data) {
    const list = data.data.data;
    state.wareList = list ? state.wareList.concat(list) : state.wareList;
  },
  resetWareList(state) {
    state.wareList = [];
  },
  updateHasNews(state, data) {
    state.hasNews = data.data.newReplyCount;
  }
};
