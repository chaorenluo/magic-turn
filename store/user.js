import * as cookie from '~/utils/cookie';

export const state = () => ({
  access_token: '',
  recovery_token: '',
  refresh_token: '',
  uid: '',
  roles: '',
  other_info: {},
  unlock_mobile: '',
  recovery_info: {}
});

export const actions = {
  // 獲取圖形驗證碼
  loginCaptcha({ commit }, params) {
    return this.$axios.get('captcha/login').then(res => {
      return res.data;
    });
  },
  // 登入是否需要验证码
  isShowCaptcha({ commit }, params) {
    return this.$axios.get('login/check_accounts', { params }).then(res => {
      return res.data;
    });
  },
  // 登入
  login({ commit, dispatch }, params) {
    return this.$axios.post('login/authenticate', params).then(res => {
      const data = res.data;
      commit('cbLogin', data);
      return data;
    });
  },
  // 登出
  signOut({ commit }, params) {
    return this.$axios.get('user/logout').then(res => {
      return res.data;
    });
  },
  // 检查帐户和密码是否可用
  checkAccount({ commit }, params) {
    return this.$axios.post('register/check_account', params).then(res => {
      return res.data;
    });
  },
  // 检查手机是否可用
  checkMobileAvailable({ commit }, params) {
    return this.$axios.get('register/check_mobile', { params }).then(res => {
      return res.data;
    });
  },
  // 发送短信
  sendSms({ commit }, params) {
    return this.$axios.get('sms/send', { params }).then(res => {
      return res.data;
    });
  },
  // 找回帐密-找回密码简讯
  sendForgetPwdSms({ commit }, params) {
    return this.$axios.get('user/sendForgetPwdSms', { params }).then(res => {
      return res.data;
    });
  },
  // 校验验证码
  checkCaptcha({ commit }, params) {
    return this.$axios.get('register/check_captcha', { params }).then(res => {
      return res.data;
    });
  },
  // 提交注册资料
  register({ commit }, params) {
    return this.$axios.post('register/reg_user', params).then(res => {
      const data = res.data;
      commit('cbLogin', data);
      return data;
    });
  },
  // 社交注册
  socialRegister({ commit }, params) {
    return this.$axios.post('social/reg_user', params).then(res => {
      const data = res.data;
      commit('cbLogin', data);
      return data;
    });
  },
  // 社交登录
  socialLogin({ commit }, params) {
    return this.$axios.post('social/login', params).then(res => {
      const data = res.data;
      commit('cbLogin', data);
      return data;
    });
  },
  // 社交绑定
  socialBind({ commit }, params) {
    return this.$axios.post('login/bind', params).then(res => {
      const data = res.data;
      commit('cbLogin', data);
      return data;
    });
  },
  refreshToken({ commit }, token) {
    commit('refreshToken', token);
  },
  reloadPage({ commit }, data) {
    commit('cbLogin', data);
  },
  removeToken({ commit }) {
    commit('removeToken');
  },
  // 忘记密码
  fetchUserForgetPwd({ commit }, params) {
    return this.$axios.post('user/forgetPwd', params).then(res => {
      return res.data;
    });
  },
  // 忘記密碼-第二步短信驗證
  checkForgetPwdSms({ commit }, params) {
    return this.$axios.post('user/checkForgetPwdSms', params).then(res => {
      return res.data;
    });
  },
  // 忘記密碼-第三步保存新密码
  fetchSavePassword({ commit }, params) {
    return this.$axios.post('user/savePassword', params).then(res => {
      return res.data;
    });
  },
  // 固話認證及修改
  fetchVerifyTel({ commit }, params) {
    return this.$axios.post('user/verify_tel', params).then(res => {
      return res.data;
    });
  }
};

export const mutations = {
  setToken(state, token) {
    state.access_token = token;
    cookie.set(`access_token${this.$config.env_token}`, token, { expires: 1 });
    this.$axios.setToken(token);
  },
  cbLogin(state, data) {
    const { code } = data;
    switch (code) {
      // login success
      case 200:
        const { access_token, user_id } = data.data;
        state.access_token = access_token;
        state.uid = user_id || '';
        this.$axios.setToken(access_token);
        if (process.browser) {
          cookie.set(`access_token${this.$config.env_token}`, access_token, { expires: 1 });
          cookie.set(`user_id${this.$config.env_token}`, user_id, { expires: 1 });
          cookie.del(`recovery_data${this.$config.env_token}`);
          // 获取客服中心消息数量
          this.dispatch('appeal/fetchAppealCount');
        }
        break;
      // IP unlock
      case 4002:
        state.unlock_mobile = data.data.mobile;
        break;
      case 4011:
      case 4012:
      case 4013:
      case 4014:
        const { recovery_token, user } = data.data;
        state.recovery_token = recovery_token;
        this.$axios.setHeader('Recovery-Authorization', recovery_token);
        if (process.browser) {
          const recovery_data = {
            code,
            recovery_token,
            hide_name: user.hide_name,
            hide_mobile: user.hide_mobile
          };
          cookie.set(`recovery_data${this.$config.env_token}`, JSON.stringify(recovery_data), { expires: 1 });
        }
        if (code === 4014 || code === 4013) {
          state.recovery_info = user;
        }
        break;
    }
  },
  refreshToken(state, token) {
    state.access_token = token;
    if (process.browser) {
      cookie.set(`access_token${this.$config.env_token}`, token, { expires: 1 });
    }
    this.$axios.setToken(token);
  },
  removeToken(state) {
    state.access_token = '';
    state.uid = '';
    if (process.browser) {
      cookie.del(`access_token${this.$config.env_token}`);
      cookie.del(`user_id${this.$config.env_token}`);
    }
    this.$axios.setToken(false);
  },
  removeRecoveryToken(state) {
    state.recovery_token = '';
    if (process.browser) {
      cookie.del(`recovery_data${this.$config.env_token}`);
    }
    this.$axios.setToken(false);
  },
  updateUserId(state, id) {
    state.uid = id;
  }
};
