export const state = () => ({})

export const actions = {
  // 劍靈用戶查詢
  fetchActUserInfo({ commit }, params) {
    return this.$axios.get('activity/game_user_info', { params }).then(res => {
      return res.data
    })
  },
  // 获取折价券
  fetchActGameVoucher({ commit }) {
    return this.$axios.get('activity/get_game_voucher').then(res => {
      return res.data
    })
  }
}

export const mutations = {}