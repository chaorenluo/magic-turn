

export default {

  methods: {
    isLgn() {
      if (!this.is_lgn) {
        this.$dialog.alert({
          message: '您還未登入，請登入后操作',
          showCancelButton: true,
          confirmButtonText: '立即登入',
          cancelButtonText: '稍後登入'
        }).then(() => {
          if (this.$check_in_app) {
            this.$appBridge.toLogin();
            return;
          }
          this.$router.push({ path: '/user/login', query: { back: this.$route.fullPath } });
        }).catch(() => {});
        return false;
      }
      return true;
    }
  }
};
