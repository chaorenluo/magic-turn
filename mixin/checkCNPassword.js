export default {
  data() {
    return {
      pwd: '',
      pwd_show: 'password',
      pwd_tip: { show: 0 },

      pwd_lv: 0,
      num_tip: { show: 1, icon: 'warn', text: '6~20個字符' },
      eng_tip: { show: 1, icon: 'warn', text: '支持字母、數字、符號（空格除外）' },
      mix_tip: { show: 1, icon: 'warn', text: '字母/數字和標點符號至少包含2種' },
    };
  },
  computed: {
    pwd_error() {
      if (this.num_tip.icon == 'ok' && this.eng_tip.icon == 'ok' && this.mix_tip.icon == 'ok') {
        return false;
      }
      return true;
    }
  },
  methods: {
    pwdShow(name) {
      if (this[name] == 'text') {
        this[name] = 'password';
      } else {
        this[name] = 'text';
      }
    },
    checkPwd(pwd) {
      const reg = new RegExp("[^`~!@#$%^&*()_+-/={}\\[\\]\\\\|;:'\",.<>/?a-zA-Z0-9]");
      const numReg = /\d/;
      const engReg = /[a-zA-Z]/;
      const fhReg = new RegExp("[`~!@#$%^&*()_+-/={}\\[\\]\\\\|;:'\",.<>/?]");
      let lv = 1;
      let err = 0;
      this.pwd_lv = 0;

      if (!pwd || !pwd.length) { // 沒填
        this.pwd_tip = { show: 0 };
        this.eng_tip.icon = 'error';
        this.num_tip.icon = 'error';
        this.mix_tip.icon = 'error';
        return false;
      }
      // 含有空格
      if (pwd.indexOf(' ') > -1) {
        err = 1;
        this.eng_tip.icon = 'error';
      }
      // 非法字符
      if (reg.test(pwd)) {
        err = 1;
        this.eng_tip.icon = 'error';
      } else {
        this.eng_tip.icon = 'ok';
      }
      // 長度小於6
      if (pwd.length < 6) {
        err = 1;
        this.num_tip.icon = 'error';
      } else {
        this.num_tip.icon = 'ok';
      }

      let cls = 0;
      if (numReg.test(pwd)) {
        cls++;
      }
      if (engReg.test(pwd)) {
        cls++;
      }
      if (fhReg.test(pwd)) {
        cls++;
      }
      this.mix_tip.icon = cls >= 2 ? 'ok' : 'error';
      if (err) return false;

      if (cls == 2) {
        if (pwd.length >= 13) {
          lv = 3;
        } else if (pwd.length >= 8) {
          lv = 2;
        }
      } else if (cls == 3) {
        if (pwd.length >= 8) {
          lv = 3;
        }
      }
      this.pwd_lv = lv;
      return true;
    }
  }
};
