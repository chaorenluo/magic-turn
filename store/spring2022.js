export const state = () => ({
  activity_on: 0,
  on_blind_box: false,
  on_free_deal: false,
  on_task_voucher: 0,
  on_turn_card: 0,
  pop_blind_box: 0,
  pop_free_deal: 0,
  pop_task_voucher: 0,
  pop_turn_card: 0,
  period_turn_card: 1,
  prizes: []
});

export const actions = {
  getPop({ commit }, params) {
    return this.$acapi.active2022.pop().then(res => {
      const data = res.data;
      console.log("getPop", data.data.data);
      if (data.code === 200) {
        commit('setPop', data.data.data);
      }
      return data.data.data;
    });
  }
};

export const mutations = {
  setPop(state, pub) {
    state.activity_on = pub.activity_on || 0;
    state.on_blind_box = pub.on_blind_box || false;
    state.on_free_deal = pub.on_free_deal || false;
    state.on_task_voucher = pub.on_task_voucher || 0;
    state.on_turn_card = pub.on_turn_card || 0;
    state.period_turn_card = pub.period_turn_card || 1;
    state.pop_blind_box = pub.pop_blind_box || 0;
    state.pop_free_deal = pub.pop_free_deal || 0;
    state.pop_task_voucher = pub.pop_task_voucher || 0;
    state.pop_turn_card = pub.pop_turn_card || 0;
    state.prizes = pub.prizes || [];
  }
};
