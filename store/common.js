export const state = () => ({
  geo_ip_code: 'TW',
  iso_code: 'TW',
  user_country: 'TW',
  ip: '',
  country: '',
  city: '',
  state: '',
  state_name: '',
  postal_code: '',
  lat: '',
  lon: '',
  timezone: '',
  continent: '',
  currency: '',
  default: false,
  zone: {},
  active_2020_spring: 0,
  jl_activity_limit: 0,
  marketing: {
    appTab: true
  },
  voucher_rest_time: 0,
  special_user_show: 0,
  clients: 'mobile',
  show_card_pop: 0, // 点卡活动弹框
  show_card_timer: 0, // 倒计时时间
  show_card_money: 50, // 赠送点卡面额
  show_card_expired: '', // 到期时间
  customer_active: 0, // 是否开启在线客服
  card_sale_start: 0, // 是否在点卡94折

  // 问卷
  show_survey: 0,
  show_survey_type: 1,

  // 大陆注册新会员送券
  show_reg_voucher: 0,
  // 支付宝费率
  aliyun_rate: 0.03,
  // 代儲卖家提醒弹窗
  storage_sell_pop: false,

  // 暑假活动弹框
  summer2022_coupon_pop: 0,
  summer2022_draw_pop: 0,

  // 点卡94折开启
  card99_pop: 0,
  // 代储活动页gtp广告加载
  idx_storage_loaded: 0
});
export const getters = {
  is_cn(state) {
    return state.user_country == 'CN' || state.geo_ip_code == 'CN';
  },
  cn_price_tag(state) {
    return state.user_country == 'CN' || state.geo_ip_code == 'CN' ? 'NT$ ' : '$';
  }
};
export const actions = {
  // 获取初始IP配置信息
  fetchIPLocation({ commit }) {
    return this.$axios
      .get(`pub/ip_location`)
      .then(res => {
        const data = res.data;
        // console.log("fetchIPLocation",res.data)
        if (data.code === 200) {
          commit('updateIpLocation', res.data.data);
        }
      });
  },
  // 图片上传接口
  fetchPubUpload({ commit }, params) {
    return this.$axios
      .post('pub/upload', params, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        return res.data;
      });
  },
  // 提交反饋意見
  fetchFeedbackAdd({ commit }, params) {
    return this.$axios
      .post('feedback/add', params)
      .then(res => {
        return res.data;
      });
  },
  // 提交反饋意見 无需登录认证
  fetchFeedbackStore({ commit }, params) {
    return this.$axios
      .post('feedback/store', params)
      .then(res => {
        return res.data;
      });
  },
  fetchStoreClien({ commit }, params) {
    commit('updateClients', params);
  },
  // 提交遊客留言
  fetchPubMessage({ commit }, params) {
    return this.$axios
      .post('pub/message', params)
      .then(res => {
        return res.data;
      });
  }
};

export const mutations = {
  setGeoIPCode(state, data) {
    state.geo_ip_code = data;
  },
  updateIpLocation(state, pub) {
    state.zone = pub;
    state.iso_code = pub.iso_code === 'HK' ? 'HK' : 'TW';
    state.user_country = pub.country_code;
    state.active_2020_spring = pub.activity_limit || 0;
    state.jl_activity_limit = pub.jl_activity_limit || 0;
    state.voucher_rest_time = pub.voucher_rest_time || 0;
    state.special_user_show = pub.special_user_show || 0;
    state.aliyun_rate = pub.aliyunRate * 1;
    // steam活动数据
    state.has_voucher = pub.has_voucher || 0;
    state.cur_period = pub.cur_period || 0;
    state.cur_period_slog = pub.cur_period_slog || '';
    state.steam_deal = pub.steam_deal || 0;
    state.in_active = pub.in_active || 0;
    state.tw_user = pub.tw_user || 0;

    // 点卡打折活动
    state.in_rebate = pub.in_rebate || 0;
    state.rebate_start = pub.rebate_start || 0;
    state.rebate_end = pub.rebate_end || 0;
    state.show_card_pop = pub.show_card_pop || 0;
    state.show_card_timer = pub.show_card_timer || 0;
    state.show_card_money = pub.show_card_money || 50;
    state.show_card_expired = pub.show_card_expired || '';
    state.card_sale_start = pub.card_sale_start || 0;

    // 2021春节活动
    state.pop_voucher = pub.pop_voucher || 0;
    state.pop_score = pub.pop_score || 0;
    state.pop_convert = pub.pop_convert || 0;
    state.activity_on = pub.activity_on || 0;

    // 问卷
    state.show_survey = pub.show_survey || 0;
    state.show_survey_type = pub.show_survey_type || 0;

    // 是否开启在线客服
    state.customer_active = pub.customer_active || 0;

    // 大陆注册新会员送券
    state.show_reg_voucher = pub.show_reg_voucher || 0;

    // 代儲卖家提醒弹窗
    state.storage_sell_pop = pub.storage_sell_pop || 0;

    // 暑假活动弹框
    state.summer2022_coupon_pop = pub.summer2022_coupon_pop || 0;
    state.summer2022_draw_pop = pub.summer2022_draw_pop || 0;

    state.card99_pop = pub.card99_pop || 0;
  },
  setAppTab(state, flag) {
    state.marketing.appTab = flag;
  },
  updateClients(state, data) {
    state.clients = data.client;
  },
  updateStorageAd(state, data) {
    state[data.name] = data.val;
  }
};
