export default {
  data() {
    const id = this.$route.params.id
    return {
      id,
      reply_panel: false,
      reply_form: {
        content: '',
        images: [],
        upload_images: []
      },
      submitting: false
    }
  },
  computed: {
    s1() {
      return 111
    }
  },
  methods: {
    // 上传图片
    onRead(file) {
      const formData = new FormData()
      formData.append('image', file.file)
      formData.append('type', 'appeal')
      this.$store.dispatch('common/fetchPubUpload', formData).then(res => {
        if (res.code === 200) {
          this.reply_form.upload_images.push(res.data.uri)
          this.reply_form.images.push(res.data.url)
        } else {
          this.$toast(res.message)
        }
      })
    },
    // 回覆申訴
    replyAppeal() {
      const { content, images } = this.reply_form
      if (!content) {
        this.$toast('請輸入您的訴求')
        return
      }
      const params = {
        content,
        appeal_id: this.id,
        images: images.join('|')
      }
      this.submitting = true
      this.$store.dispatch('recovery/fetchReplyAppeal', params).then(res => {
        this.submitting = false
        this.$toast(res.message)
        if (res.code === 200) {
          this.reply_panel = false
          this.reply_form = {
            content: '',
            images: [],
            upload_images: []
          }
        }
      })
    },
    // 检测图片格式
    testFile(img) {
      if (
        img.indexOf('.jpg') > -1 ||
        img.indexOf('.jpeg') > -1 ||
        img.indexOf('.gif') > -1 ||
        img.indexOf('.png') > -1
      ) {
        return true
      } else {
        return false
      }
    }
  }
}