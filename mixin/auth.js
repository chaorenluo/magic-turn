import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['user'])
  },
  methods: {
    isLgn() {
      if (!this.user.access_token) {
        this.$dialog
          .alert({
            className: 'txt-center',
            message: '您還未登入，請登入后操作',
            showCancelButton: true,
            confirmButtonText: '立即登入',
            cancelButtonText: '稍後登入'
          })
          .then(() => {
            this.$router.push({
              path: '/user/login',
              query: { back: this.$route.fullPath }
            });
          })
          .catch(() => { });
        return false;
      }
      return true;
    }
  }
};
