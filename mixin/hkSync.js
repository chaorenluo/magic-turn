import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([ 'my' ]),
    userinfo() {
      return this.my.userinfo
    },
    is_signed() {
      if(this.userinfo && this.userinfo.signed){
        return this.userinfo.signed;
      }
      return 0;
    }
  },
  methods: {
    showHkSyncPop(ga_data) {

      if(ga_data){
        let data = ['互通相关', '授权入口', ga_data];
        this.$gtmClickEvent(data);
      }
      
      this.$store.commit('hkCommon/showSyncPop', true);
    }
  }
}
