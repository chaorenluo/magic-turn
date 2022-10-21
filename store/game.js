export const state = () => ({
  hot_game: null,
  rec_game: [],
  rec_steam: [],
  rec_webGame: [],
  rec_mobileGame: []
})

export const actions = {
  // 遊戲搜索-獲取熱門遊戲
  fetchHotGame({ commit }) {
    return this.$axios.get('game/rank').then(res => {
      commit('updateHotSearch', res.data.data)
      return res.data
    })
  },
  // 获取不同类别游戏的热门推荐
  fetchRecommend({ commit }, params) {
    return this.$axios.get('game/recommend', { params }).then(res => {
      const data = res.data.data
      data.type = params.game_type
      commit('updateRecGame', data)
    })
  }
}

export const mutations = {
  updateHotSearch(state, data) {
    state.hot_game = data.rank || []
  },
  // updateHotGame(state, data) {
  //   const { rank } = data
  //   state.hot_search = rank
  // },
  updateRecGame(state, data) {
    const { type, recommend } = data
    state['rec_' + type] = recommend || []
  }
}
