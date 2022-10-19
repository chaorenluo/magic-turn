export const state = () => ({
  user_role: 'buyer', // 会员中心用户角色
  list_data: {}, // 列表返回數據
  connectFBToken: '', // fb登入token
  page_setting: {}, // 页面设置信息，例如回显问题

  fix_head_height: 0.88 // 固定头高度

});

export const getters = {
  sticky_top(state) {
    if (process.browser) {
      // return state.fix_head_height * zoomSize; // px
      return state.fix_head_height; // rem
    }
    return 0;
  }
};

export const mutations = {
  storeListData(state, data) {
    const type = data.type;
    state.list_data[type] = data;
  },
  deletListData(state, data) {
    if (data) {
      delete state.list_data[data];
    } else {
      state.list_data = {};
    }
  },
  setConnectFBToken(state, data) {
    state.connectFBToken = data;
  },
  /**
   * 记录页面配置信息
   * @param  {String} page [页面]
   * @return {Object} null
   */
  updatePageSetting(state, data) {
    const { page } = data;
    state.page_setting[page] = data;
  },
  // 清楚页面配置信息
  deletePageSetting(state, prop) {
    if (prop) {
      delete state.page_setting[prop];
    } else {
      state.page_setting = {};
    }
  },
  /**
   * 更新会员角色
   * @param  {Number} active [角色]
   */
  updateUserRole(state, active) {
    state.user_role = active === 1 ? 'seller' : 'buyer';
  },
  setFixHeadHeight(state, data) {
    state.fix_head_height = data;
  }
};
