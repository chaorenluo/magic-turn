export const state = () => ({
  checkCard: [],
  issueSite: []
})

export const actions = {
  // 实名认证--多账户查询 params: {id_card}
  fetchCheckCardRepeat({ commit }, params) {
    return this.$axios.post('auth/check_card_repeat', params).then(res => {
      const data = res.data
      if (data.code === 200) {
        commit('updateCheckCard', data.data)
      }
      return data
    })
  },
  // 实名认证 - 实名认证发证地
  fetchIssueSite({ commit }) {
    return this.$axios.post('auth/issue_site').then(res => {
      commit('updateIssueSite', res.data.data)
    })
  },
  // 实名认证 - 是否可以注销旧账号
  fetchCanCancelOld({ commit }, params) {
    return this.$axios.post('auth/can_cancel_old', params).then(res => {
      return res.data
    })
  },
  // 实名认证 - 提交认证
  fetchAuthSubmit({ commit }, params) {
    return this.$axios.post('auth/submit', params).then(res => {
      return res.data
    })
  },
  // 实名认证-上传身份证接口
  fetchUploadIdcard({ commit }, params) {
    return this.$axios.post('pub/upload/idcard', params).then(res => {
      return res.data
    })
  },
  // 实名认证-上传健保卡接口
  fetchUploadHealthCard({ commit }, params) {
    return this.$axios.post('pub/upload/adultHealthCard', params).then(res => {
      return res.data
    })
  },
  // 实名认证-提交认证资料
  fetchAuthAdult({ commit }, params) {
    return this.$axios.post('auth/adult/success', params).then(res => {
      return res.data
    })
  }
}

export const mutations = {
  updateCheckCard(state, data) {
    const { list } = data
    state.checkCard = list
  },
  updateIssueSite(state, data) {
    if (data) {
      for(let key in data) {
        state.issueSite.push({
          text: data[key],
          value: key
        })
      }
    }
  }
}