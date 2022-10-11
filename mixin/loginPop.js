import {
  isAndroid,
  isIOS,
  isChrome,
  isStandalone
} from '~/utils/device';
import { mapState, mapGetters } from 'vuex';

export default {
  data() {
    const { isApp, client } = this.$route.query;
    return {
      // ios跳轉帶的，判斷是否為內嵌ios，只能判断ios，不能区分android
      isApp: isApp,
      client: client,
      isMobile: client !== 'android' && client !== 'ios',
      device: {
        isAndroid,
        isIOS,
        isChrome,
        isStandalone
      }
    };
  },
  computed: {
    appTab() {
      return this.common.marketing.appTab;
    }
  },
  methods: {
    // app跳轉需重新帶isApp,用於隱藏導航
    addAppQuery(url) {
      if (this.isApp) {
        return url.indexOf('?') > -1 ? `${url}&isApp=1` : `${url}?isApp=1`;
      } else {
        return url;
      }
    },
    addClientQuery(url) {
      const { client, isMobile } = this;
      if (!isMobile) {
        return url.indexOf('?') > -1 ? `${url}&client=${client}` : `${url}?client=${client}`;
      } else {
        return url;
      }
    },
    // 打開安卓app
    openApp() {
      window.location = 'https://qzkj2.app.goo.gl/deepLink';
    },
    hideAppTab() {
      this.appTab = false;
    }
  }
}
;
