export const state = () => ({
  banner: null,
  cover: null,
  popular: {},
  notice: null,
  appToast: false,
  focusOrNot: false, // 判斷是否只顯示商品關注
  focusGame: [], // 商品关注游戏
  focusData: {
    focusActive: 0,
    list: [],
    count_rows: 0,
    list_0: [],
    finished_0: false,
    list_1: [],
    finished_1: false,
    list_2: [],
    finished_2: false,
    docTop: 0,
    gcTop: 0
  }, // 列表数据
  focusLoading: true, // 加载中...
  editFocus: {
    type: 'edit',
    list: [],
    game_id: '',
    server_id: 0,
    server_name: '',
    ware_type: 0,
    ware_type_name: '',
    ware_type_item: [], // 类型
    index: '' // 正在編輯的選項
  },
  trade_data: {
    pc: [],
    mobile: []
  },
  user_voucher: []
});

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { app, req }) {
    // console.log(req.headers) //获取是否大陆来源
    const country_code = req.headers['x-geoip-country-code'] || 'TW';
    commit('common/setGeoIPCode', country_code);
    const env = this.$config.env_token;
    const access_token = app.$cookies.get(`access_token${env}`);
    const user_id = app.$cookies.get(`user_id${env}`);
    const recovery_data = app.$cookies.get(`recovery_data${env}`);
    // console.log('request header:', req.headers.cookie);
    // console.log('---------------------');
    // console.log('access_token:', access_token, 'recovery_data', recovery_data);
    if (access_token) {
      const data = {
        code: 200,
        data: {
          access_token,
          user_id
        }
      };
      await dispatch('user/reloadPage', data);
    }

    // 复权信息获取
    if (recovery_data) {
      const { code, recovery_token, hide_mobile, hide_name } = recovery_data;
      const data = {
        code,
        data: {
          recovery_token,
          user: {
            hide_mobile,
            hide_name
          }
        }
      };
      await dispatch('user/reloadPage', data);
    }
    await dispatch('common/fetchIPLocation');
  },
  fetchIndexData({ commit }) {
    return this.$axios.get('').then(res => {
      const data = res.data;
      if (data.code === 200) {
        commit('updateIndexData', data.data);
      }
      return data;
    });
  },
  // 我的关注
  fetchMyFocus({ commit }, params) {
    return this.$axios.post(`game/my_focus`, params).then(res => {
      const data = res.data;
      if (params.type === 'reload') {
        // 重置数据格式
        commit('resetFocusData');
      }
      commit('updateFocusGame', data.data);
      return data;
    });
  },
  // 根据关注游戏请求列表数据
  fetchFocusData({ commit }, params) {
    return this.$axios.get(`mall/lists`, { params }).then(res => {
      const data = res.data;
      if (params.type === 'reload') {
        commit('resetFocusData');
      }
      data.data.index = params.index;
      commit('updateFocusData', data.data);
      return data;
    });
  },
  // 编辑关注游戏
  fetchEditFocus({ commit }, params) {
    return this.$axios.post('game/edit_focus', params).then(res => {
      return res.data;
    });
  },
  // 删除标注
  fetchDelFocus({ commit }, params) {
    return this.$axios.post('game/del_focus', params).then(res => {
      return res.data;
    });
  },
  // 新增商品關注
  fetchAddFocus({ commit }, params) {
    return this.$axios.post('game/add_focus', params).then(res => {
      return res.data;
    });
  }
};

export const mutations = {
  updateIndexData(state, data) {
    const { banner, game, cover, notice, pc = [], mobile = [], user_voucher } = data;
    state.banner = banner;
    state.popular = game;
    state.cover = cover;
    // state.notice = { content: '1132123123', jump_url: '' };// notice && notice[0];
    state.notice = notice && notice[0];
    state.trade_data = {
      pc,
      mobile
    };
    // console.log(user_voucher);
    state.user_voucher = user_voucher;
  },
  updateAppToast(state, payload) {
    state.appToast = payload;
  },
  updateFocusGame(state, payload) {
    state.focusGame = payload.length === 0 ? null : payload;

    if (state.focusGame) {
      state.editFocus.list = state.focusGame.map(item => {
        const { game_id, server_id, ware_type, game_name, server_name, ware_type_name } = item;
        return { game_id, server_id, ware_type, game_name, server_name, ware_type_name };
      });
    }
  },
  resetFocusGame(state) {
    state.focusGame = [];
  },
  updateFocusData(state, payload) {
    const { list, count_rows, index } = payload;
    if (list) {
      const list_prop = `list_${index}`;
      const rows_prop = `count_rows_${index}`;
      const pos_prop = `position_${index}`;
      state.focusData[list_prop] = state.focusData[list_prop].concat(list);
      state.focusData[rows_prop] = count_rows;
      state.focusData[pos_prop] = state.focusData[pos_prop] > 0 ? state.focusData[pos_prop] : 0;
    }
  },
  resetFocusData(state) {
    const index = state.focusData.focusActive;
    state.focusData[`list_${index}`] = [];
    state.focusData[`count_rows_${index}`] = 0;
    state.focusData[`position_${index}`] = state.focusData.gcTop;
    state.focusData[`finished_${index}`] = false;
  },
  updateDataParams(state, payload) {
    const { index, key, value } = payload;
    if (['focusActive', 'docTop', 'gcTop'].includes(key)) {
      state.focusData[key] = value;
    } else {
      state.focusData[`${key}_${index}`] = value;
    }
  },
  updateListPos(state, payload) {
    const { index, position } = payload;
    state.focusData[`position_${index}`] = position;
  },
  setEditGame(state, payload) {
    const { game_id, ware_type_item } = payload;
    state.editFocus.game_id = game_id;
    state.editFocus.ware_type_item = ware_type_item;
  },
  addNewFocus(state, payload) {
    const { game_id, game_name, editIndex, editType } = payload;
    state.editFocus.type = editType;
    state.editFocus.game_id = game_id;
    state.editFocus.index = editIndex;

    const newFocus = {
      game_id,
      game_name
    };

    if (state.editFocus.list[editIndex - 1]) {
      state.editFocus.list[editIndex - 1] = newFocus;
    } else {
      state.editFocus.list.push(newFocus);
    }
  },
  updateEditList(state, payload) {
    const { type, index, clickType } = payload;
    switch (type) {
      case 'sid':
        const { server_id, server_name } = payload;
        if (clickType === 'add') { // 新增
          state.editFocus.server_id = server_id;
          state.editFocus.server_name = server_name;
        } else { // 編輯
          state.editFocus.list[index].server_id = server_id;
          state.editFocus.list[index].server_name = server_name;
        }
        break;
      case 'tid':
        const { ware_type, ware_type_name } = payload;
        if (clickType === 'add') {
          state.editFocus.ware_type = ware_type;
          state.editFocus.ware_type_name = ware_type_name;
        } else {
          state.editFocus.list[index].ware_type = ware_type;
          state.editFocus.list[index].ware_type_name = ware_type_name;
        }
        break;
    }
  },
  updateFocusParams(state, payload) {
    const { index, key, value } = payload;
    state.focusGame[index][key] = value;
  },
  resetEditParams(state) {
    state.editFocus.game_id = '';
    state.editFocus.server_name = '';
    state.editFocus.ware_type_name = '';
    state.editFocus.type = 'add';
  },
  updateEditParams(state, payload) {
    const { key, value } = payload;
    state.editFocus[key] = value;
  },
  updateFocusOrNot(state, payload) {
    state.focusOrNot = payload;
  }
};
