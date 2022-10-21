export const state = () => ({
  list: []
});

export const actions = {
  // 我的提問-已回答
  fetchAnswered({ commit }, params) {
    return this.$axios.get('faq/my_ask_answered', { params }).then(res => {
      const data = res.data;
      commit('updateFaqList', data.data);
      return data;
    });
  },
  // 我的提問-未回答
  fetchNoAnswered({ commit }, params) {
    return this.$axios.get('faq/my_ask', { params }).then(res => {
      const data = res.data;
      commit('updateFaqList', data.data);
      return data;
    });
  },
  // 我的提問-再次提問
  fetchFaqAsk({ commit }, params) {
    return this.$axios.post('faq/ask', params).then(res => {
      return res.data;
    });
  },
  // 買家提問-已回答
  fetchSellAnswered({ commit }, params) {
    return this.$axios.get('faq/sell_answered', { params }).then(res => {
      const data = res.data;
      commit('updateFaqList', data.data);
      return data;
    });
  },
  // 買家提問-未回答
  fetchSellNoAnswered({ commit }, params) {
    return this.$axios.get('faq/sell_no_answer', { params }).then(res => {
      const data = res.data;
      commit('updateFaqList', data.data);
      return data;
    });
  },
  // 買家提問-回覆
  fetchFaqAnswer({ commit }, params) {
    // console.log(123123, params);
    // params.is_hide = params.is_hide ? 1 : 0;
    return this.$axios.post('faq/answer', params).then(res => {
      const data = res.data;
      if (data.code === 200) {
        // 商品詳情問與答回覆
        if (params.type === 'detail') {
          commit('updateDetailAnswer', params);
        } else {
          commit('updateAnswer', params);
        }
      }
      return data;
    });
  }
};
export const mutations = {
  updateFaqList(state, data) {
    if (data.list) {
      state.list = state.list.concat(data.list);
    }
  },
  resetFaqList(state) {
    state.list = [];
  },
  updateAnswer(state, data) {
    const { content, message_id, type } = data;
    state.list.map((v, i) => {
      if (v.id === message_id) {
        // 補充回覆
        if (type === 'add') {
          v.addAnswer = content;
          v.add_readed_desc = '未讀';
          v.answerPostTime = '剛剛';
        } else {
          state.list.splice(i, 1);
        }
      }
    });
  },
  updateDetailAnswer(state, data) {
    const { message_id, content, is_hide } = data;
    const faq_list = this.state.mall.faq_data;
    const new_faq_list = faq_list.map(v => {
      if (message_id === v.message_id) {
        // 补充
        if (v.answer) {
          v.answer.addAnswer = content;
        } else { // 第一次回覆
          v.answer = {
            answer: content
          };
        }
        v.answerPostTime = '剛剛';
        v.readed = '未讀';
      }
      return v;
    });
    this.state.mall.faq_data = new_faq_list;
  }
};
