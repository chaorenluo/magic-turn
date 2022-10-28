<template>
  <div class="udesk-im ">
    <van-nav-bar v-if="!isApp || $is_new_ios_app" title="在線客服" left-arrow @click-left="quiteUdesk" />
    <div v-if="custom_im_open" class="udesk-switch" style="background: transparent;" @click="quiteUdesk" />
    <div class="contact8591 hide" />
    <div class="udesk-target" />
  </div>
</template>
<script>
import customIM from '~/mixin/customIM';
import inApp from '~/mixin/inApp';

export default {
  mixins: [customIM, inApp],
  methods: {
    quiteUdesk() {
      this.hideCustomIM();
      this.$goBack('');
    }
  },
  mounted() {
    this.customIMPage(true);
    this.customIM(true);
  },
  beforeDestroy() {
    this.customIMPage(false);
  }
};

</script>
