export const state = () => ({
  list: [], // 列表
  list_type: 'more', // 判断列表是刷新(refresh)还是加载更多(more)
  total: 0,
  replacement: '',
  detail: {}, // 订单详情
  deal: {} // 交易详情
});

const updateLeaveImage = (data) => {
  if (data.leave_info && !data.leave_info.list) {
    data.leave_info.list = [];
  }
  const callbacl = (item) => {
    if (item.images && item.images.length > 0) {
      const imgList = [];
      item.images.map(item => {
        imgList.push({
          src: item,
          status: 'done'
        });
      });
      item.images = imgList;
    }
  };
  if (data.leave_info || data.list) {
    (data.leave_info || data).list.map(item => {
      callbacl(item);
    });
  } else {
    callbacl(data);
  }

  return data;
};

export const actions = {
  // 请求待支付列表
  fetchOrderList({ commit }, params) {
    return this.$axios.get('order/list', { params }).then(res => {
      const data = res.data;
      commit('updateOrderList', data.data);
      return data;
    });
  },
  // 请求订单详情
  fetchOrderDetail({ commit }, params) {
    return this.$axios.get('order/detail', { params }).then(res => {
      const data = res.data;
      if (data.code === 200) {
        commit('updateOrderDetail', data.data);
      }
      return data;
    });
  },
  // 上传凭证
  fetchOrderUpload({ commit }, params) {
    return this.$axios
      .post('order/upload', params, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        const data = res.data;
        if (data.code === 200) {
          commit('updateOrderReceipt', data.data);
        }
        return data;
      });
  },
  // 提交缴款凭证
  fetchOrderSubmit({ commit }, params) {
    return this.$axios.post('order/submit', params).then(res => {
      return res.data;
    });
  },
  // 刪除訂單
  fetchOrderDelete({ commit }, params) {
    return this.$axios.post('order/delete', params).then(res => {
      return res.data;
    });
  },
  // 取消订单
  fetchOrderCancel({ commit }, params) {
    return this.$axios.post('order/cancel', params).then(res => {
      return res.data;
    });
  },
  // 请求交易列表
  fetchDealIndex({ commit }, params) {
    return this.$axios.get('deal/index', { params }).then(res => {
      const data = res.data;
      if (data.code === 200) {
        if (data.data && data.data.list) {
          data.data.list.map(v => {
            v.ware_id = v.id;
            v.expire = v.deal_time;
            v.pay_money = v.ware_price;
            v.order_createtime = v.buy_time;
            return v;
          });
        }
        commit('updateOrderList', data.data);
      }
      return data;
    });
  },
  // 交易留言
  fetchDealContact({ commit }, params) {
    return this.$axios.post('deal/leave_word', params).then(res => {
      const data = res.data;
      commit('updateLeaveData', data.data);
      return data;
    });
  },
  // 请求交易详情
  fetchDealDetail({ commit }, params) {
    return this.$axios.get('deal/detail', { params }).then(res => {
      const data = res.data;
      if (data.code === 200) {
        commit('updateDealDetail', data.data);
      }
      return data;
    });
  },
  // 轮询留言
  fetchDealLoop({ commit }, params) {
    return this.$axios.get('deal/leave_word_content', { params }).then(res => {
      const data = res.data;
      if (data.code === 200) {
        commit('updateDealDetail', data.data);
      }
      return data;
    });
  },
  // 申請取消交易
  fetchDealCancel({ commit }, params) {
    return this.$axios.post('deal/apply_cancle_deal', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 超時取消交易
  fetchDealOvertime({ commit }, params) {
    return this.$axios.post('deal/overtime_cancle', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 響應自助取消
  fetchDealResponse({ commit }, params) {
    return this.$axios.post('deal/response_cancle_deal', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 撤銷自助取消
  fetchDealUndo({ commit }, params) {
    return this.$axios.post('deal/undo_cancle_deal', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 123
  fetchDealCheck({ commit }, params) {
    return this.$axios.post('deal/check_complete_pay', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 完成付款
  fetchDealComplete({ commit }, params) {
    return this.$axios.post('deal/complete_pay', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 提交發票資料
  fetchDealInvoice({ commit }, params) {
    return this.$axios.post('deal/save_card_info', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 領收評價
  fetchDealReceive({ commit }, params) {
    return this.$axios.post('deal/receive', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 取消中评价
  fetchCancelAppraise({ commit }, params) {
    return this.$axios.post('deal/cancel_appraise', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 訂單列表-已完成評價
  fetchCompleteAppraise({ commit }, params) {
    return this.$axios.post('deal/complete_appraise', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 获取捐赠单位
  fetchDonateName({ commit }, params) {
    return this.$axios.get('deal/invoice_name', { params }).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 提取账号
  fetchDealAccount({ commit }, params) {
    return this.$axios.post('deal/get_account', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 賣家移交帳號
  fetchDealTransfer({ commit }, params) {
    return this.$axios.post('deal/transfer_ware', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 帐号修改
  fetchEditAccount({ commit }, params) {
    return this.$axios.post('deal/edit_account', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 我的訂單-自助退款
  fetchApplyRefund({ commit }, params) {
    return this.$axios.post('deal/apply_refund', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 我的訂單-自助退款
  fetchResponseRefund({ commit }, params) {
    return this.$axios.post('deal/response_refund', params).then(res => {
      const data = res.data;
      return data;
    });
  },
  // 我的訂單已完成列表-移機數據
  fetchOldList({ commit }, params) {
    return this.$axios.post('deal/oldList', params).then(res => {
      const data = res.data;
      if (data.code === 200) {
        if (data.data && data.data.list) {
          data.data.list.map(v => {
            v.ware_id = v.id;
            v.expire = v.deal_time;
            v.pay_money = v.ware_price;
            v.order_createtime = v.buy_time;
            return v;
          });
        }
        commit('updateOldList', data.data);
      }
      return data;
    });
  }
};

export const mutations = {
  updateOrderList(state, data) {
    const { list_type } = state;
    if (data && data.list) {
      const { list, total } = data;
      state.list = list_type === 'refresh' ? list : state.list.concat(list);
      state.total = total;
      state.list_type = 'more';
    } else {
      state.list = [];
      state.total = 0;
    }
    state.replacement = data && data.replacement;
  },
  updateOldList(state, data) {
    const { list } = data;
    if (list) {
      state.list = state.list.concat(list);
    }
  },
  resetOrderList(state) {
    state.list = [];
    state.total = 0;
  },
  updateListType(state, type) {
    state.list_type = type;
  },
  updateOrderDetail(state, data) {
    state.detail = data;
  },
  updateOrderReceipt(state, data) {
    state.detail.receipt = data.url;
  },
  updateDealDetail(state, data) {
    if (state.deal.leave_info && data.list) {
      state.deal.leave_info = updateLeaveImage(data);
    } else {
      state.deal = { ...state.deal, ...updateLeaveImage(data) };
    }
  },
  updateLeaveData(state, data) {
    if (state.deal.leave_info && state.deal.leave_info.list) {
      data = updateLeaveImage(data);
      state.deal.leave_info.list.unshift(data);
    } else {
      state.deal.leave_info = {};
      state.deal.leave_info.list = [data];
    }
  },
  updateRefundBtn(state, ware_id) {
    state.list = state.list.map(v => {
      if (v.id === ware_id) {
        v.refund_money = null;
      }
      return v;
    });
  }
};
