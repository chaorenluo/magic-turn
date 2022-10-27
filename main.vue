<template>
  <div v-show="device.isAndroid && flow_show && appTab && !is_cn" class="app-tab">
    <a href="javascript:;" @click="openApp">
      <img src="~/assets/images/index/tab.png" alt="下載App，訊息不漏接">
    </a>
    <span class="close" @click="setAppTab(false)" />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import inApp from '~/mixin/inApp';

export default {
  mixins: [inApp],
  data() {
    const routeName = this.$route.name;
    return {
      flow_show: ['index', 'game-type', 'mall-list-gid', 'mall-detail-mid'].includes(routeName)
    };
  },
  computed: {
    ...mapGetters({
      is_cn: 'common/is_cn'
    })
  },
  methods: {
    ...mapMutations({
      setAppTab: 'common/setAppTab'
    })
  }
};
</script>

<style lang="stylus">
.show-app-tab {
  padding-top 168px!important
  .hk-idx-head {
    top 88px
  }
}
.game-app-tab {
  padding-top 288px!important
  .channel-hd {
    top 88px!important
  }
  .game-tab {
    top 176px!important
  }
}
.app-tab {
  position fixed
  top 0
  z-index 101
  height: .88rem;fixedtop0z-index101height
  .close{
    position absolute
    left 20px
    top 20px
    z-index 1
    display block
    width 50px
    height 50px
  }
}
</style>
