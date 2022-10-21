export const state = () => ({
  userinfo: null,
  userData: {},
  manage: { // 商品管理
    list: []
  },
  dealMessage: { // 交易留言
    list: []
  },
  coupon: { // 折價券
    list: []
  },
  trans_time: '',
  last_set: '',

  hk_member: ''
});

export const actions = {
  // 會員中心-请求会员信息
  fetchUserMy({ commit }) {
    return this.$axios.get('user/my').then(res => {
      const data = res.data.data;
      commit('updateUserMy', data);
      return res.data;
    });
  },
  // 會員中心-请求会员详细信息
  fetchUserIndex({ commit }) {
    return this.$axios.get('user/index').then(res => {
      const data = res.data;
      commit('updateUserIndex', data.data);
      return data;
    });
  },
  // 會員追蹤列表
  fetchCollectionList({ commit }, params) {
    return this.$axios.get('collection/index', { params }).then(res => {
      return res.data;
    });
  },
  // 取消追踪
  fetchCollectionCancel({ commit }, params) {
    return this.$axios.post('collection/cancel', params).then(res => {
      return res.data;
    });
  },

  // 會員中心-折價券
  fetchCouponList({ commit }, params) {
    return this.$axios.get('coupon/list', { params }).then(res => {
      const data = res.data;
      commit('updateCouponList', data.data);
      return data;
    });
  },
  // 请求出售中商品和下架商品
  fetchManageList({ commit }, params) {
    return this.$axios.get('mallManagement/onAndOff', { params }).then(res => {
      const data = res.data;
      if (data.code === 200) {
        commit('updateManageList', data.data);
      }
      return data;
    });
  },
  // 商品管理-开设的专属
  fetchManageExclusive({ commit }, params) {
    return this.$axios.get('mallManagement/exclusive', { params }).then(res => {
      const data = res.data;
      if (data.code === 200) {
        commit('updateManageList', data.data);
      }
      return data;
    });
  },
  // 商品管理-商品操作：更新，下架，上架，删除
  fetchManageOperate({ commit }, params) {
    return this.$axios.post('mallManagement/operate', params).then(res => {
      const data = res.data;
      if (data.code === 200) {
        commit('updateMangeOperate', params);
      }
      return data;
    });
  },
  // 會員資料-修改聯絡說明
  fetchUpdateContact({ commit }, params) {
    return this.$axios.post('user/updateContactDetail', params).then(res => {
      return res.data;
    });
  },
  // 會員資料-修改行動電話
  fetchChangeTel({ commit }, params) {
    return this.$axios.post('user/changeTel', params).then(res => {
      return res.data;
    });
  },
  // 會員資料-修改郵箱
  fetchChangeEmail({ commit }, params) {
    return this.$axios.post('user/changeEmail', params).then(res => {
      return res.data;
    });
  },
  // 会员资料-修改密码
  fetchChangePwd({ commit }, params) {
    return this.$axios.post('user/changePwd', params).then(res => {
      return res.data;
    });
  },
  // 會員資料-實名認證
  fetchAuthentication({ commit }, params) {
    return this.$axios.post('user/authentication', params).then(res => {
      return res.data;
    });
  },
  // 交易留言-交易留言列表
  fetchDealMessageIndex({ commit }, params) {
    return this.$axios.get('dealMessage/index', { params }).then(res => {
      const data = res.data;
      commit('updateDealMessageList', data.data);
      return data;
    });
  },
  // 商品管理-取消刊登
  fetchCancelPublish({ commit }, params) {
    return this.$axios.post('mallManagement/cancelPublish', params).then(res => {
      const data = res.data;
      if (data.code === 200) {
        commit('updateMangeOperate', params);
      }
      return data;
    });
  },
  // 商品管理-設置方便交易時間
  fetchUserTransTime({ commit }, params) {
    return this.$axios.post('user/trans_time', params).then(res => {
      const data = res.data;
      if (data.code === 200) {
        commit('updateTransTime', params);
      }
      return data;
    });
  },
  // 获取香港卖家数据
  fetchHKMemberInfo({ commit }) {
    return this.$hkapi.member_info().then(({ data: res }) => {
      if (res.code == 200) {
        commit('updateHKMemberInfo', res.data);
      }
    });
  },
  // 服務條款彈框
  fetchPopClause({ commit }) {
    return this.$axios.post('pop/clause').then(res => {
      return res.data;
    });
  },
  // 服務條款確認彈框
  fetchPopReadClause({ commit }) {
    return this.$axios.post('pop/readClause').then(res => {
      return res.data;
    });
  },
  // 待付款信息栏数据
  fetchWaitPay({ commit }) {
    return this.$axios.post('user/wait_pay').then(res => {
      return res.data;
    });
  },
  // 即時通訊-line登錄授權
  fetchLineAuth({ commit }, params) {
    return this.$axios.post('social/line_auth', params).then(res => {
      return res.data;
    });
  },
  // 即時通訊-line通知綁定
  fetchLineBind({ commit }, params) {
    return this.$axios.post('social/line_bind', params).then(res => {
      if (res.status && res.data.code === 200) {
        commit('updateBindState');
      }
      return res.data;
    });
  }
};

export const mutations = {
  updateUserMy(state, data) {
    state.userinfo = data;
  },
  updateUserIndex(state, data) {
    state.userData = data;
  },
  updateManageList(state, data) {
    if (data) {
      const { list } = state.manage;
      const { user_set, last_set } = data;
      state.manage.list = data.data ? list.concat(data.data) : list;
      // 初始化交易時間
      if (user_set === '全天不交易' || user_set === '全天交易') {
        state.trans_time = user_set;
      } else {
        const arr = user_set.split('-');
        state.trans_time = `${arr[0]}:00-${arr[1]}:00`;
      }
      state.last_set = last_set;
    }
  },
  resetManageList(state) {
    state.manage.list = [];
  },
  updateMangeOperate(state, data) {
    const { id, action } = data;

    state.manage.list.map((v, i) => {
      if (v.id === id) {
        if (action === 'update') {
          v.can_update = 0;
        } else {
          state.manage.list.splice(i, 1);
        }
      }
    });
  },
  updateDealMessageList(state, data) {
    if (data) {
      const { list } = state.dealMessage;
      state.dealMessage.list = data.data ? list.concat(data.data) : list;
    }
  },
  resetDealMessageList(state) {
    state.dealMessage.list = [];
  },
  updateCouponList(state, data) {
    const { list } = data;
    const coupon_list = state.coupon.list;
    state.coupon.list = list ? coupon_list.concat(list) : coupon_list;
  },
  resetCouponList(state) {
    state.coupon.list = [];
  },
  updateTransTime(state, data) {
    const { type, start, end } = data;
    if (type === '1') {
      state.trans_time = start === '00' && end === '24' ? '全天交易' : `${start}:00-${end}:00`;
    } else {
      state.trans_time = '全天不交易';
    }
  },
  updateHKMemberInfo(state, data) {
    const { seller } = data;
    state.hk_member = { ...seller };
  },
  updateBindState(state) {
    state.userData.bind_line = 1;
  }
};
