export const state = () => ({
  cardData: {}
})

export const actions = {
  // 请求点卡数据
  fetchCardsIndex({ commit }, params) {
    return this.$axios.get('card/index', { params }).then(res => {
      const data = res.data
      commit('updateCardList', data.data)
      return data
    })
  },
  fetchCardStock({ commit }, params) {
    return this.$axios.get('card/checkInventory', { params }).then(res => {
      const data = res.data
      return data
    })
  }
}

export const mutations = {
  updateCardList(state, data) {
    state.cardData = data
  }
}
