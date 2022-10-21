export const state = () => ({
  game_type: [],
  pictures: []
});

export const actions = {
  // 獲取熱門遊戲
  fetchGameType({ commit }, params) {
    return this.$axios.get('game/get_types', { params }).then(res => {
      if (res.data.code == 200 && res.data.data) {
        commit('setGameType', res.data.data);
      }
    });
  },

  getPublishData({ commit }, data) {
    return this.$axios.post('publish/pre_info', data);
  },

  submitPublish({ commit }, data) {
    return this.$axios.post('publish/submit', data);
  },

  getGoodsInfo({ commit }, data) {
    return this.$axios.post('publish/edit_goods', data);
  },

  subEditGoods({ commit }, data) {
    return this.$axios.post('publish/sub_goods', data);
  },

  checkPublish({ commit }, params) {
    return this.$axios.get('publish/check', { params });
  },
  checkValidation({ commit }, params) {
    return this.$axios.get('publish/tel_pop', { params });
  },

  // 刊登-獲取圖檔集
  fetchPubImages({ commit }, params) {
    return this.$axios.get('publish/get_images').then(res => {
      const data = res.data;
      if (data.code === 200) {
        commit('updatePubImages', data.data);
      }
      return data;
    });
  },
  // 刊登-檢測刊登狀態
  fetchPubPostPop({ commit }) {
    return this.$axios.get('publish/post_pop').then(res => {
      return res.data;
    });
  },
  // 刊登-刊登複權
  fetchPubRecovery({ commit }) {
    return this.$axios.get('publish/recover_post').then(res => {
      return res.data;
    });
  }
};

export const mutations = {
  setGameType(state, data) {
    data.map(v => {
      v.text = v.name;
      return v;
    });
    state.game_type = data;
  },
  updatePubImages(state, data) {
    if (data.list) {
      state.pictures = data.list;
    }
  }
};
