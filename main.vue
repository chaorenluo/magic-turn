<template>
  <van-tabbar fixed>
    <button v-if="appeal_type === 'recovery' && appeal_disabled" class="van-button van-button--primary van-button--large van-button--disabled" @click="contactService">
      <span class="van-button__text">停權中，不可回覆</span>
    </button>
    <button v-else-if="forbid" class="van-button van-button--primary van-button--large van-button--disabled" @click="contactService">
      <span class="van-button__text">{{ appeal_type === 'recovery' ? '您暫時無法申訴' : '您暫時無法申訴，點擊聯繫客服' }}</span>
    </button>
    <van-button v-else type="primary" size="large" @click="checkAppeal">
      {{ btn_txt }}
    </van-button>
  </van-tabbar>
</template>

<script>
export default {
  props: {
    appeal_disabled: {
      type: Boolean,
      default: false
    },
    btn_txt: {
      type: String,
      default: '我要申訴'
    }
  },
  data() {
    return {
      forbid: false,
      appeal_type:{}
    }
  },
  methods: {
    checkAppeal() {
      const appeal_type = this.appeal_type
      this.$store.dispatch(`${appeal_type}/fetchAppealCheck`).then(res => {
        if (res.code === 200) {
          this.$emit('cbCheckAppeal')
        } else {
          this.forbid = true
          this.$toast(res.message)
        }
      })
    },
    contactService() {
      if (this.appeal_type === 'recovery') {
        return
      }
      this.$contactService()
    }
  }
}
</script>