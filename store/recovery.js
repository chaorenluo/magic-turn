export const state = () => ({
  appealList: null,
  appealDetail: null
});

export const actions = {
  // 復權--自自助開啟賬號
  fetchRecoveryOpen({ commit }, params) {
    return this.$axios.post('recovery/open', params).then(res => {
      return res.data;
    });
  },
  // 復權---申訴列表
  fetchAppealList({ commit }) {
    return this.$axios.post('recovery/appealList').then(res => {
      const { status, data } = res;
      if (status === 200) {
        commit('updateAppealList', data.data);
      }
      return data;
    });
  },
  // 復權---申訴詳情
  fetchAppealDetail({ commit }, params) {
    return this.$axios.post('recovery/appealDetail', params).then(res => {
      const { status, data } = res;
      if (status === 200) {
        commit('updateAppealDetail', data.data);
      }
      return data;
    });
  },
  // 復權---申訴回覆校驗
  fetchAppealCheck({ commit }) {
    return this.$axios.post('recovery/appealCheck').then(res => {
      return res.data;
    });
  },
  // 復權---申訴回覆
  fetchReplyAppeal({ commit }, params) {
    return this.$axios.post('recovery/replyAppeal', params).then(res => {
      const data = res.data;
      if (data.code === 200) {
        commit('replyMsgDetail', params);
      }
      return data;
    });
  },
  // 復權---提交申訴
  fetchAppealAdd({ commit }, params) {
    return this.$axios.post('recovery/appeal', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 復權---修改行动电话
  fetchChangeTel({ commit }, params) {
    return this.$axios.post('recovery/editMobile', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 復權---修改姓名
  fetchEditName({ commit }, params) {
    return this.$axios.post('recovery/editName', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 复权---发送简讯验证码
  sendRecoverySms({ commit }, params) {
    return this.$axios.post('sms/recoverySend', params).then(res => {
      const data = res.data;
      return data;
    });
  }
};

export const mutations = {
  updateAppealList(state, data) {
    state.appealList = data.list;
  },
  updateAppealDetail(state, data) {
    const detail = data.appealText;
    state.appealDetail = detail;
  },
  resetAppealDetail(state) {
    state.appealDetail = null;
  },
  replyMsgDetail(state, data) {
    const { content } = data;
    const detail = {
      content,
      from: 1,
      image: null,
      postTime: '剛剛'
    };
    state.appealDetail.unshift(detail);
  }
};
