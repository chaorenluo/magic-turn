export const state = () => ({
  path: [],
  len: 10
});

export const actions = {
  push({ commit }, path) {
    commit('push', path);
  }
};

export const mutations = {
  push(state, path) {
    let path_list = state.path.concat();
    const len = path_list.length;

    if (path_list.includes(path)) {
      const idx = path_list.indexOf(path);
      if (idx === len - 2) {
        // 後退操作
        path_list = path_list.slice(0, idx + 1);
        state.path = path_list;
        return;
      }
      path_list.splice(path_list.indexOf(path), 1);
    }
    if (path_list.length >= state.len) {
      path_list.shift();
    }
    path_list.push(path);
    state.path = path_list;
  }
};
