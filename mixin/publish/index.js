export default {
  data() {
    return {
      upload_api: `${this.$config.apiURL}pub/upload`,
      upload_image: 0, // 是否需上传图片
      img_max_len: 15,

      is_set_account: 0, // 是否後台自定義賬號模板

      delivery_time: '',
      show_delivery_time: 0, // 是否展示承諾交貨時間
      delivery_time_list: '',

      company: '', // 端遊遊戲幣幣值
      ratios: '', // 遊戲幣回傳後端幣值
      count: '', // 遊戲幣數量

      game_prop_unit: '', // 代儲品項
      new_prop_item_list: '', // 品項列表
      is_set_store: '', // 代儲後端回傳數據，提交給後端
      prop_name: '',
      sel_prop_item: '',

      ware_title: '',
      ware_price: '',
      ware_number: '',
      ware_desc: '',
      images: '',
      specify: 0,
      buy_user: '',
      upload_sheet: false,
      pic_popup: false,
      pic_selected: [],
      show_image: [],

      editor: ''
    };
  },
  computed: {
    gc_auto_tle() {
      let tle = '自動填寫標題預覽';
      if (this.ware_price && this.count && this.ratios !== '') {
        tle = `${this.count}${this.company[this.ratios]}=${this.ware_price}元${this.ware_title}`;
      }
      return tle;
    },
    store_auto_title() {
      let tle = '自動填寫標題預覽';
      if (this.ware_price && this.ware_title && this.prop_name && this.sel_prop_item) {
        tle = `${this.sel_prop_item.title}=${this.ware_price}元${this.ware_title}`;
      }
      return tle;
    }
  },
  methods: {
    editorReady(ue) {
      this.editor = ue;
    },
    checkNumber(tag, e) {
      const val = e.target.value.replace(/\D/g, '');
      this[tag] = val;
    },
    checkCodePop(res) {
      let confirmButtonText = '查看刊登規則';

      if (res.data.code > 2020) {
        this.$toast(res.data.message);
        return;
      }

      if (res.data.code == 2011) { // 實名認證
        confirmButtonText = '去認證';
      }

      this.$dialog.confirm({
        message: res.data.message,
        cancelButtonText: '我已了解',
        confirmButtonText
      }).then(() => {
        if (res.data.code == 2011) {
          this.$router.push('/my/realnameAuth');
        } else {
          location.href = 'https://help.8591.com.tw/v2/list/detail/38?source=1';
        }
      }).catch(() => {});
    },
    // 上傳回調
    onRead(file) {
      const formData = new FormData();
      formData.append('image', file.file);
      formData.append('type', 'ware');
      this.$store.dispatch('common/fetchPubUpload', formData).then(res => {
        this.$toast(res.message);
        if (res.code === 200) {
          this.show_image.push(res.data.url);
          this.upload_sheet = false;
        }
      });
    },
    // 创建链接
    buildImgUrl(url) {
      let pic = url.replace('tw', 'tw/');
      pic = pic.replace('-small', '');
      return pic;
    },
    // 选中图片
    pick(index) {
      const len = this.show_image.length + this.pic_selected.length;
      const edit_len = this.images ? this.images.length : 0;
      if (len + edit_len < 15) {
        this.$refs.checkboxes[index].toggle();
      } else {
        this.$toast('安安，最多只能插入15張圖檔唷~');
      }
    },
    // 插入选择图片
    pickChoose() {
      this.pictures.forEach((v, i) => {
        // 判断是否在勾选的范围内
        if (this.pic_selected.includes(i)) {
          this.show_image.push(v.image_path.replace('tw', 'tw/'));
        }
      });
      this.pic_popup = false;
      this.upload_sheet = false;
      this.pic_selected = [];
    },
    // 删除插入图片
    deletePic(index) {
      this.show_image.splice(index, 1);
    }
  }
};
