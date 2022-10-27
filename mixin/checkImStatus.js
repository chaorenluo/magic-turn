import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      van_dialog: {
        show: false,
        deny_reason: '',
        allow_time: ''
      }
    };
  },
  computed: {
    ...mapState(['user', 'im'])
  },
  methods: {
    ...mapMutations({
      setGoodsInfo: 'im/setGoodsInfo'
    }),
    checkImStatus() {
      if (!this.user.access_token) {
        this.$router.push({
          path: '/user/login',
          query: {
            back: this.$route.fullPath
          }
        });
        return;
      }
      this.$store.dispatch('im/fetchImStatus').then(res => {
        const {
          code,
          message
        } = res;
        const {
          deny_status,
          deny_reason,
          allow_time
        } = res.data;

        if (code === 200) {
          switch (deny_status) {
            // 正常
            case 1:
              const { name } = this.$route;
              if (name === 'im-id') { // 即時通訊詳情頁
                this.doSendMsg(); // 發送消息
              } else { // 商品詳情頁、專屬詳情頁
                this.contactSeller(); // 調整即時通訊
              }
              break;
              // 客服開啟
            case 2:
              this.$toast('您已被停用即時通訊，請聯繫客服中心');
              break;
              // 自助開啟
            case 3:
              let reason = deny_reason;
              reason = reason.replace(/(暫時)?關閉您的即時通訊功能[0-9|半|一].*?[天|月|年]|暫時關閉您的即時通訊功能/, function(str) {
                return '<span style="color: red;">' + str + '</span>';
              });
              reason = reason.replace(/關閉即時通訊[0-9|半|一].*?[天|月|年]|對帳號進行處理/, function(str) {
                return '<span style="color: red;">' + str + '</span>';
              });
              this.van_dialog.deny_reason = reason;
              this.van_dialog.allow_time = allow_time;
              this.van_dialog.show = true;
              break;
          }
        } else {
          this.$toast(message);
        }
      });
    },
    contactSeller() {
      const {
        id,
        ware_title,
        game_info
      } = this.product;
      const fuid = this.productMore.sell_user;
      const body = {
        id,
        title: ware_title,
        seller: fuid,
        type: game_info.type.id
      };
      if (this.$is_new_ios_app) {
        body.status = this.productMore.seller_status;
        this.$appBridge.openImChat(JSON.stringify(body));
        return;
      }
      if (this.product.skus.length) {
        body.new_store = 1;
      }
      // console.log(this.product);

      this.$store
        .dispatch('im/fetchSendMessage', {
          fuid,
          body,
          token: this.im.im_token,
          type: 'info:goods'
        })
        .then(res => {
          const {
            data
          } = res;

          if (data.status) {
            this.setGoodsInfo(body);
            this.$router.push(`/im/${fuid}`);
          } else {
            this.$toast(data.info);
          }
        });
    },
    updateDialogStatus(bool) {
      this.van_dialog.show = bool;
    }
  }
};
