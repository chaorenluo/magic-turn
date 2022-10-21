export const state = () => ({
  show_sync: false,
  show_deny_reg: 0,
  show_deny_type: 0,
})

export const actions = {
  hkRegBtn({rootState, commit}) {
    return new Promise((resolve, reject) => {
      if(rootState.common.iso_code == 'HK'){
        commit('showDenyReg', {show: 1, type: 1});
        resolve();
      }else{
        reject();
      }
    });
  }
}

export const mutations = {
  showDenyReg(state, {show, type}) {
    state.show_deny_reg = show;
    state.show_deny_type = type;
  },
  showSyncPop(state, data) {
    state.show_sync = data;
  }
}