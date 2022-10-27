export default {
  data() {
    return {
      mobile: '',
      mobile_error: '',

      seconds: 60,
      sending: 0,
      code: '',
      code_error: '',
      send_sms_type: 'login',

      submitting: false
    };
  },
  computed: {
    send_txt() {
      if (this.seconds < 60) {
        return `已發送${this.seconds}s`;
      }
      return '獲取驗證碼';
    },
    disabled_send_code() {
      if (this.submitting || !this.mobile || this.mobile.length != 11 || this.sending) {
        return true;
      }
      return false;
    }
  },
  methods: {
    async checkMobile() {
      if (!this.mobile) {
        this.mobile_error = '';
        return;
      }
      if (this.mobile.length != 11) {
        this.mobile_error = '請填寫正確的手機號';
        return;
      }
      const params = {
        mobile: this.mobile,
        type: this.send_sms_type
      };
      this.submitting = true;
      const res = await this.$cnapi.check_mobile(params);
      this.submitting = false;
      if (res.data.code == 200) {
        this.mobile_error = '';
        return;
      }
      this.mobile_error = res.data.message;
    },
    async checkCaptcha(ticket) {
      const params = {
        type: this.send_sms_type,
        mobile: this.mobile,
        ticket
      };
      const res = await this.$cnapi.captcha(params);
      if (res.status != 200) {
        this.$toast(res.statusText);
        return '';
      }
      const { code, data = {}, message } = res.data;
      if (code != 200) {
        this.$toast(message);
        return '';
      }
      return data;
    },
    clickSendCode() {
      if (this.sending) {
        return;
      }
      this.sending = 1;
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message: '正在發送'
      });
      this.$refs.recaptcha.execute(async(ticket) => {
        const res = await this.checkCaptcha(ticket);
        const BizCode = res ? res.BizCode : 800;
        this.$toast.clear();
        if (BizCode == 100 || BizCode == 200) {
          this.doSendCode();
        } else if (BizCode == 400) {
          this.sending = 0;
        }
        return BizCode;
      });
    },
    async doSendCode() {
      const params = {
        type: this.send_sms_type,
        mobile: this.mobile
      };
      console.log(545345);
      const res = await this.$cnapi.send_sms(params);
      if (res.status != 200) {
        this.sending = 0;
        this.$toast(res.statusText);
        return;
      }
      const { code, message } = res.data;
      if (code != 200) {
        this.sending = 0;
        this.$toast(message);
        return;
      }
      this.$toast('驗證碼已發送');
      this.doCountdown();
    },
    // 二次驗證成功
    async recaptchaSuccess(ticket) {
      const res = await this.doSendCode(ticket);
      const { code, message } = res;
      if (code != 200) {
        this.$dialog.alert({
          title: '温馨提示',
          message
        }).then(() => {});
        return;
      }
      this.$toast('驗證碼已發送');
      this.doCountdown();
    },
    doCountdown() {
      this.seconds--;
      if (this.seconds > 0) {
        setTimeout(() => {
          this.doCountdown();
        }, 1000);
      } else {
        this.seconds = 60;
        this.sending = 0;
      }
    }
  }
}
;
