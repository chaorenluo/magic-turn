import { mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['im'])
  },
  methods: {
    doLineAuthorize() {
      const { auth_key } = this.im.line
      const state = `auth${Math.random()}`
      window.location.href = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${auth_key}&redirect_uri=https://m.${this.$config.domain}/v3/im&state=${state}&scope=profile&bot_prompt=aggressive`
    },
    // 綁定line通知推送
    doLineNotifyBind() {
      const { key } = this.im.line
      const state = `notify${Math.random()}`
      window.location.href = `https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=${key}&redirect_uri=https://m.${this.$config.domain}/v3/im&state=${state}&scope=notify`
    }
  }
}