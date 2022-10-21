import { date2UnixTime } from '~/utils/utils';

export const state = () => ({
  pay_info: {},
  user_info: {},
  ware_info: null,
  voucher_info: [],
  coupon_info: [],
  cardAttached: null,
  bindHkDeal: 1
});

export const actions = {
  // 支付信息
  fetchOrderPayment({ commit }, params) {
    return this.$axios.post('order/payment', params).then(res => {
      const data = res.data.data;
      if (res.data.code === 200) {
        commit('updateOrderPayment', data);
      }
      return res.data;
    });
  },
  // 创建订单
  fetchOrderStore({ commit }, params) {
    return this.$axios.post('order/store', params).then(res => {
      return res.data;
    });
  },
  // 校验验证码
  fetchOrderCode({ commit }, params) {
    return this.$axios.post('order/validate_sms_code', params).then(res => {
      return res.data;
    });
  },
  // 获取角色列表
  fetchRoleIndex({ commit }, params) {
    return this.$axios.get('role/index', { params }).then(res => {
      return res.data;
    });
  },
  // 添加角色
  fetchRoleAdd({ commit }, params) {
    return this.$axios.post('role/add', params).then(res => {
      return res.data;
    });
  },
  // 訂單檢測
  fetchOrderCheck({ commit }, params) {
    return this.$axios.post('order/check_store', params).then(res => {
      return res.data;
    });
  },
  // 校验支付密码
  fetchOrderPwd({ commit }, params) {
    return this.$axios.post('order/validate_pay_pwd', params).then(res => {
      return res.data;
    });
  },
  // 检测会员状态
  fetchCheckRole({ commit }, params) {
    return this.$axios.post('role/check_role', params).then(res => {
      return res.data;
    });
  }
};

export const mutations = {
  // 更新平台补贴
  // 更新支付信息
  updateOrderPayment(state, data) {
    state.pay_info = data.pay_info;
    state.ware_info = data.ware_info;
    state.user_info = data.user_info;
    state.bindHkDeal = data.bindHkDeal;
    state.cardAttached = data.card_attached;
    if (data.voucher_info) {
      const vouchers = [];
      for (let i = 0; i < data.voucher_info.length; i++) {
        const item = data.voucher_info[i];
        const tmp = {
          id: item.id,
          available: item.valiable,
          condition: item.type,
          value: item.moeny * 100,
          valueDesc: item.moeny,
          name: `滿${item.amount_limit}元減${item.moeny}元`,
          startAt: date2UnixTime(item.can_use_time),
          endAt: date2UnixTime(item.can_use_before),
          unitDesc: '元',
          limit: item.amount_limit,
          description:
            `${item.type}`
        };
        vouchers.push(tmp);
      }
      state.voucher_info = vouchers;
    } else {
      state.voucher_info = [];
    }

    if (data.coupon_info) {
      const coupons = [];
      for (let i = 0; i < data.coupon_info.length; i++) {
        const item = data.coupon_info[i];
        const tmp = {
          id: item.id,
          condition: item.type,
          value: item.discount,
          valueDesc: item.moeny,
          name: `最高減${item.limit}元`,
          startAt: date2UnixTime(item.can_use_time),
          endAt: date2UnixTime(item.can_use_before),
          unitDesc: '折',
          description:
            `${item.type}`
        };
        coupons.push(tmp);
      }
      state.coupon_info = coupons;
    } else {
      state.coupon_info = [];
    }
  }
};
