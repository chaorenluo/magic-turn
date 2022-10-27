export default {
  methods: {
    // 角色防詐騙
    async checkRoleFraud(params) {
      const data = await this.$store
        .dispatch('pay/fetchCheckRole', params)
        .then(res => {
          if (res.code === 200) {
            return true;
          } else {
            this.$toast(res.message);
            return false;
          }
        });
      return data;
    }
  }
};
