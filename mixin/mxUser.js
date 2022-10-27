export default {
  methods: {
    // 統計ios內嵌頁面事件
    collectIOSWebview(payload) {
      if (!this.isApp) {
        return
      }
      const eventMap = {
        'user_view': '注册成功页流量',
        'user_copy': '复制',
        'user_jump': '留在APP继续浏览'
      }

      this.$gtmClickEvent(['IOS内嵌注册页', eventMap[`user_${payload}`]])
    }
  }
}