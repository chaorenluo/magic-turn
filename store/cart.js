import { conversionBoolean, forKey } from '~/utils/utils';
export const state = () => ({
  list: null
});

export const actions = {
  // 查询购物车
  fetchCartList({ commit }, params) {
    return this.$axios.get('go-cart/index').then(res => {
      const data = res.data.data.cart;
      const arr = [];
      // 字符串true false转为布尔值 fuck 10614
      conversionBoolean(data);

      forKey(data, (key) => {
        arr.push({ seller: key, wareCar: data[key].wareCar, dealTime: data[key].wareCar[0].dealTime });
      });

      return arr;
    });
  },
  // 购物车编辑
  fetchCartEdit({ commit }, params) {
    return this.$axios.post('cart/edit', params).then(res => {
      const data = res.data;
      if (data.code === 200) {
        if (params.type !== 'del') {
          params.ware_price = data.data.ware_price;
        }
        commit('updateCartEdit', params);
      }
      return data;
    });
  },
  // 购物车结算
  fetchCartCheck({ commit }, params) {
    return this.$axios.post('cart/check', params).then(res => {
      return res.data;
    });
  },
  // 申请解除点卡购买限制
  fetchCartApply({ commit }, params) {
    return this.$axios.post('cart/apply', params).then(res => {
      return res.data;
    });
  }
};

export const mutations = {
  // 更新购物车列表
  updateCartList(state, data) {
    console.log('data---', data);
    if (!data) {
      state.list = [];
      return;
    }
    const arr = [];
    // 字符串true false转为布尔值 fuck 10614
    conversionBoolean(data);

    forKey(data, (key) => {
      arr.push({ seller: key, wareCar: data[key].wareCar });
    });

    state.list = arr;
  },
  // 数量编辑
  updateCartEdit(state, data) {
    const { cart_id, index, type, ware_price } = data;
    const list = state.list[index].list;
    if (type === 'del') {
      for (let i = 0; i < list.length; i++) {
        if (list[i].cart_id === cart_id) {
          list.splice(i, 1);
        }
      }
      // 该卖家下没有商品加入购物车，删除整条记录
      if (!state.list[index].list.length) {
        state.list.splice(index, 1);
      }
      return;
    }
    // 新增或删减
    list.map(v => {
      if (v.cart_id === cart_id) {
        const num = v.buy_number;
        v.buy_number = type === 'add' ? num + 1 : num - 1;
        if (v.ware_price !== ware_price) {
          v.ware_price = ware_price * 1;
        }
      }
      return v;
    });
  }
};
