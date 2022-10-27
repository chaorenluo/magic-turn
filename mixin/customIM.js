import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(['im', 'user', 'common']),
    ...mapGetters({
      sticky_top: 'transferData/sticky_top'
    }),
    custom_im_loaded() {
      return this.im.custom_im_loaded;
    },
    custom_im_page() {
      return this.im.custom_im_page;
    },
    custom_im_open() {
      return this.im.custom_im_open;
    },
    isLogin() {
      return this.user.access_token;
    }
  },
  methods: {
    ...mapMutations({
      customIM: 'im/customIM',
      customIMPage: 'im/customIMPage',
      customIMLoaded: 'im/customIMLoaded',
      setCustomCount: 'im/setCustomCount'
    }),
    insertUdesk() {
      // console.log('insertUdesk');
      if (this.custom_im_loaded) {
        ud('showPanel');
        return;
      }
      if (!document.querySelector('[data-tag=udesk]')) {
        (function(a, h, c, b, f, g) {
          a.UdeskApiObject = f;
          a[f] = a[f] || function() {
            (a[f].d = a[f].d || []).push(arguments);
          };
          g = h.createElement(c);
          g.async = 1;
          g.charset = "utf-8";
          g.src = b;
          c = h.getElementsByTagName(c)[0];
          c.parentNode.insertBefore(g, c);
        })(window, document, "script", "https://assets-cli.s2.udesk.cn/im_client/js/udeskApi.js", "ud");
      }
      this.initUdesk();
    },
    getUdeskCustomer() {
      this.$axios.get('/user/udesk').then(res => {
        if (res.data.code != 200) {
          return;
        }
        const { nonce, sign, timestamp, web_token, c_phone, c_name, customer_token, c_desc, c_cf_client } = res.data.data;
        ud({
          customer: {
            nonce,
            signature: sign,
            timestamp,
            web_token,
            c_phone,
            c_name,
            customer_token,
            c_desc,
            c_cf_client
          }
        });
      });
    },
    initUdesk() {
      // console.log('initUdesk');
      const top = this.custom_im_page ? `${this.sticky_top}rem` : '2rem';
      const targetSelector = this.custom_im_page ? '.contact8591' : '.udesk-target';
      const web_plugin_id = this.common.user_country === 'CN' ? '29961' : '29861';
      ud({
        code: "8g3cd71",
        link: `https://addcn591.s2.udesk.cn/im_client/?web_plugin_id=${web_plugin_id}&group_id=37442&language=zh-HK`,
        noBubble: true,
        selector: '.udesk-im',
        targetSelector,
        panel: {
          css: {
            top
          },
          onToggle: data => {
            if (data.visible) {
              // console.log('窗口打开');
              this.setCustomCount(0);
            } else {
              // console.log('窗口关闭');
              this.customIM(false);
              if (this.custom_im_page) {
                this.$appBridge.closeWebView();
              }
            }
          }
        },
        onReady: () => {
          // this.init = 1;
          this.customIMLoaded(true);
          if (this.custom_im_open || this.page) {
            ud('showPanel');
          }
          if (this.isLogin) {
            this.getUdeskCustomer();
          }
        },
        onUnread: data => {
          this.setCustomCount(data.count);
          console.log('未读消息数' + data.count);
        }
      });
    },
    hideCustomIM() {
      // console.log('hideCustomIM');
      this.customIM(false);
      if (!window.ud) {
        return;
      }
      ud('hidePanel');
    }
  },
  watch: {
    custom_im_open() {
      // console.log('watch', this.custom_im_open);
      if (this.custom_im_open) {
        this.insertUdesk();
      }
    }
  }
};
