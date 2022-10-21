export const state = () => ({
  lists: [],
  lists_total: 0,
  count_rows: 0,
  total_rows: 0,
  lists_type: {
    0: {
      name: '遊戲幣',
      prop: null
    },
    1: {
      name: '道具',
      prop: null
    },
    2: {
      name: '帳號',
      prop: null
    },
    3: {
      name: '點數卡',
      prop: null
    },
    4: {
      name: '代練',
      prop: null
    },
    5: {
      name: '送禮',
      prop: null
    },
    6: {
      name: '其他',
      prop: null
    },
    7: {
      name: '商城道具',
      prop: null
    },
    8: {
      name: '代儲',
      prop: null
    },
    9: {
      name: '手游商城',
      prop: null
    }
  }, // 遊戲列表類別
  seo: null,
  mall_info: '',
  seller_info: '',
  ware_image: null,
  hot_search: [],
  faq_data: [],
  faq_total: 0,
  is_seller: 0,
  scroll_point: {
    detail: 0,
    faq: 0
  },
  exclusive: {
    list: []
  },
  has_survey: true,
  survey_alarm: true
});

export const actions = {
  // 获取列表
  fetchMallList({ commit }, params) {
    return this.$axios
      .get(`mall/lists`, { params })
      .then(res => {
        const data = res.data;
        if (data.code === 200) {
          const list_data = data.data;
          list_data.type = params.type;
          commit('updataMallList', list_data);
        }
        return data;
      });
  },
  fetchMallDetail({ commit }, params) {
    return this.$axios
      .get(`mall/detail`, { params })
      .then(res => {
        const data = res.data;
        if (data.code === 200) {
          commit('updateMallDetail', data.data);
        }
        // 服務端渲染
        return data;
      });
  },
  // 商品详情-商家信息
  fetchMallSeller({ commit }, params) {
    return this.$axios.get('mall/seller', { params }).then(res => {
      const data = res.data;
      commit('updateMallSeller', data);
      return data;
    });
  },
  initPreviewMall({ commit }, data) {
    commit('updateMallDetail', data.data);
  },
  // 商品详情-卖场问与答
  fetchMallFaq({ commit }, params) {
    return this.$axios.get('mall/faq', { params }).then(res => {
      const data = res.data;
      commit('updateMallFaq', data.data);
      return data;
    });
  },
  // 商品详情-记录浏览记录
  fetchMallBrowse({ commit }, params) {
    return this.$axios.get('mall/browse', { params });
  },
  // 获取专属详情
  fetchExclusiveDetail({ commit }, params) {
    return this.$axios
      .get(`mall/wareDetail`, { params })
      .then(res => {
        const data = res.data;
        if (data.code === 200) {
          commit('updateExDetail', data.data);
        }
        return data;
      });
  },
  // 获取问与答列表
  fetchFaqList({ commit }, params) {
    return this.$axios.get('faq/list', { params }).then(res => {
      const data = res.data;
      commit('updateFaqlist', data.data);
      return data;
    });
  },
  faqAsk({ commit }, params) {
    return this.$axios.post('faq/ask', params).then(res => {
      const data = res.data;
      if (data.code === 200) {
        commit('updateFaqAsk', params);
      }
      return data;
    });
  },
  faqAnswer({ commit }, params) {
    return this.$axios.post('faq/answer', params).then(res => {
      const data = res.data.data;
      commit('updateFaqAnswer', data);
    });
  },
  // 加購物車
  cartAdd({ commit }, params) {
    return this.$axios.post('cart/add', params).then(res => {
      return res.data;
    });
  },
  // 立即购买
  fetchDoBuy({ commit }, params) {
    return this.$axios.post('mall/buy', params).then(res => {
      return res.data;
    });
  },
  // 獲取專屬列表
  fetchExclusiveList({ commit }, params) {
    return this.$axios.get('mall/exclusiveLists', { params }).then(res => {
      const data = res.data;
      commit('updateExclusiveList', data.data);
      return data;
    });
  },
  // 专属加购物车
  fetchCartWare({ commit }, params) {
    return this.$axios.post('cart/add_ware', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 点卡购买
  fetchCardBuy({ commit }, params) {
    return this.$axios.post('card/buy', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 拒絕購買專屬
  fetchDenyBuy({ commit }, params) {
    return this.$axios.post('mall/denyBuy', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 专属购买
  fetchExclusiveBuy({ commit }, params) {
    return this.$axios.get('mall/exclusiveBuy', { params }).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 商品詳情-追蹤
  fetchCollect({ commit }, params) {
    const url = params.type === 'cancel' ? 'cancelCollect' : 'collect';
    return this.$axios.post(`mall/${url}`, params).then(res => {
      const data = res.data;
      if (data.code === 200) {
        commit('updateCollect', params);
      }
      return data;
    });
  },
  // 商品詳情-新用戶引導
  fetchShowGuide({ commit }) {
    return this.$axios.post('newUser/showGuide').then(res => {
      return res.data;
    });
  },
  // 商品詳情-問卷調查
  fetchQueShow({ commit }) {
    return this.$axios.post('questionnaire/show').then(res => {
      return res.data;
    });
  },
  // 商品詳情-提交問卷調查
  fetchQueSubmit({ commit }, params) {
    return this.$axios.post('questionnaire/submit', params).then(res => {
      return res.data;
    });
  }
};

export const mutations = {
  updataMallList(state, data) {
    const { list, total, menus, seo, count_rows, total_rows, keywords } = data;
    if (data.type == 'reload' || data.type == 'server') {
      state.lists = list || [];
    } else if (list) {
      state.lists = state.lists.concat(list);
    }
    // 重组游戏类型格式
    if (menus) {
      const temp = {};
      for (let i = 0; i < menus.length; i++) {
        const item = menus[i];
        temp[item.id] = {};
        temp[item.id].name = item.name;
        temp[item.id].prop = item.prop;
      }
      state.lists_type = temp;
    }
    state.lists_total = total;
    state.seo = seo;
    state.count_rows = count_rows;
    const hot_search = state.hot_search;
    state.hot_search = keywords || hot_search;
    state.total_rows = total_rows;
  },
  // 重置配置
  resetMallList(state) {
    state.lists = [];
    state.count_rows = 0;
  },
  updateMallDetail(state, data) {
    state.mall_info = { ...data.mall_info, up_time: Date.now() };
    if (data.mall_info.ware_image) {
      const imgs = [...data.mall_info.ware_image];
      if (process.browser) {
        imgs.forEach(v => {
          const preload = new Image();
          preload.src = v;
        });
        data.mall_info.ware_image.forEach(v => {
          const preload = new Image();
          preload.src = v;
        });
      }
      state.ware_image = imgs;
    } else {
      state.ware_image = null;
    }
  },
  updateExDetail(state, data) {
    state.mall_info = data.mall_info;
    state.seller_info = data.seller_info;
  },
  updateMallSeller(state, data) {
    state.seller_info = data.data;
  },
  updateMallFaq(state, data) {
    // console.log(data);
  },
  updateFaqlist(state, data) {
    if (!data) {
      return;
    }
    const { faq, is_seller, total } = data;
    state.faq_data = state.faq_data.concat(faq);
    state.is_seller = is_seller;
    state.faq_total = total;
  },
  updateFaqAsk(state, data) {},
  resetFaqList(state) {
    state.faq_data = [];
    state.faq_total = 0;
  },
  updateFaqAnswer(state, data) {},
  updateScrollPoint(state, data) {
    const { type, point } = data;
    state.scroll_point[type] = point;
  },
  resetExclusiveList(state) {
    state.exclusive.list = [];
  },
  updateExclusiveList(state, data) {
    if (data && data.list) {
      state.exclusive.list = state.exclusive.list.concat(data.list);
    }
  },
  updateCollect(state, data) {
    state.mall_info.trace_stroe = !state.mall_info.trace_stroe;
  },

  updateSurveyState(state) {
    state.has_survey = false;
  },
  updateSurveyAlarm(state) {
    state.survey_alarm = false;
  }
};
