// 刊登部分公用代码
import { number_format } from "_UTIL_/helper";
import { FormDataJson } from "form-data-json-convert";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      bread: [],
      loading: true,
      title: '',
      price: '',
      price_error_tip: 0,
      stock: '',
      unit_num: '',
      unit: '', // 遊戲幣自定義
      sel_store_id: '',
      sel_store_item: '', // 代儲自定義
      cover: '',
      images: '',
      handover_at: '',
      exclusive: '',

      handover_option: '',
      show_handover_action: false,

      editor: '',
      editcnt: '',
      submiting: false,
      hide_upload: 0,
      file_list: [],

      attrs: '', // 定义的自定义字段
      attributes: '' // 自定义字段的值
    };
  },
  computed: {

    user_info() {
      return this.user.user_info;
    },
    publish_notice() {
      return this.transferData.notification.publish_notice;
    },
    unit_name() {
      if (!this.unit) {
        return '';
      }
      return this.unit.split(',')[1];
    },
    money2gc() {
      return Math.floor((this.unit_num / this.price) * 10000) / 10000;
    },
    gc2money() {
      return Math.floor((this.price / this.unit_num) * 10000) / 10000;
    },
    auto_gc_tle() {
      let tle = '自動填寫標題';
      if (this.price && this.unit_num) {
        tle = `${number_format(this.unit_num)}${this.unit_name}=${number_format(this.price)}元`;
      }
      return tle;
    },
    store_name() {
      if (!this.sel_store_item) {
        return '';
      }
      return this.sel_store_item.split(',')[1];
    },
    auto_store_tle() {
      let tle = '自動填寫標題';
      if (this.price && this.sel_store_id && this.sel_store_item) {
        tle = `${this.store_name}=${number_format(this.price)}元`;
      }
      return tle;
    },
    // 代儲列表
    store_list() {
      let arr = [];
      if (this.sel_store_id && this.attrs) {
        for (const v of this.attrs) {
          if (this.sel_store_id == v.id) {
            arr = v.options;
            break;
          }
        }
      }
      return arr;
    },
    // 遊戲幣單位列表
    gc_unit_list() {
      const list = {};
      if (this.attrs) {
        for (const v of this.attrs) {
          if (v.type == 'radio') {
            list.id = v.id;
            list.options = v.options;
          } else {
            list.other_id = v.id;
          }
        }
      }
      return list;
    },
    fee_rate() {
      return 0;
    },
    income() {
      let fee = Math.ceil(this.fee_rate * this.price);
      if (fee > 2000) {
        fee = 2000;
      }
      return this.price - fee;
    },
    handover_actions() {
      if (!this.handover_option) {
        return [];
      }
      const arr = [];
      for (const i in this.handover_option) {
        arr.push({ name: this.handover_option[i], val: i });
      }
      return arr;
    }
  },
  methods: {
      
    editorReady(ue) {
      this.editor = ue;
    },
    collectImg() {
      const data = [];
      for (const v of this.file_list) {
        if (v.url) {
          if (v.text.includes('封面圖')) {
            this.cover = v.url;
          } else {
            data.push(v.url);
          }
        }
      }
      this.images = data.join(',');
    },
    // 處理台灣導入的空數據
    initTWCustomField() {
      if (!this.attributes) {
        const tmp = {};
        for (const v of this.attrs) {
          for (const v2 of v.options) {
            tmp[v.id] = v2.id; // 默认设置第一个option
            break;
          }
          break;
        }
        this.attributes = tmp;
      }
    },
    // 設置圖片
    initImages(cover_img = '', images_arr = []) {
      const images = [];
      if (images_arr.length && images_arr[0]) {
        for (const v of images_arr) {
          images.push({ text: '商品圖', url: v });
        }
      } else {
        images.push({ text: '商品圖', url: '' });
      }
      this.file_list = [{ text: '封面圖', url: cover_img }, ...images];
    },
    initProperty(sel_handover = '') {
      // 設置交貨時間
      for (const v in this.handover_option) {
        if (this.handover_option[v] == sel_handover) {
          this.handover_at = v;
        }
      }
      // 設置遊戲幣
      if (this.tid == 1) {
        for (const v of this.attrs) {
          if (v.type == 'radio') { // 游戏币单位
            for (const v2 of v.options) {
              if (this.attributes[v.id] == v2.id) {
                this.unit = `${this.attributes[v.id]},${v2.option}`;
                break;
              }
            }
          } else { // 游戏币数量
            this.unit_num = this.attributes[v.id];
          }
        }
      }
      // 設置代儲
      if (this.tid == 7) {
        for (const i in this.attributes) {
          this.sel_store_id = i;
          for (const v of this.attrs[0].options) { // 第一个自定义字段
            if (this.attributes[i] == v.id) {
              this.sel_store_item = `${this.attributes[i]},${v.option}`;
              break;
            }
          }
        }
      }
    },
    initBread(game = '', server_1 = '', server_2 = '', type_1 = '', type_2 = '') {
      const arr = [];
      if (game) {
        arr.push({ name: game.name });
      }
      if (server_1) {
        arr.push({ name: server_1.name });
      }
      if (server_2) {
        arr.push({ name: server_2.name });
      }
      if (type_1) {
        arr.push({ name: type_1.name });
      }
      if (type_2) {
        arr.push({ name: type_2.name });
      }
      this.bread = arr;
    },
    getEditData(type) {
      this.$api.get_publish_detail({ goods_id: this.goods_id }).then(res => {
        this.loading = false;
        if (res.status) {
          const { goods, handover_at: handover_option } = res.data;
          const { game_id, server_id, goods_type_id, title, price, stocks, description = '', attrs = [], attributes = '', game, server_1, server_2, goods_type_1, goods_type_2, handover_at: sel_handover } = goods;

          this.gid = game_id;
          this.sid = server_id;
          this.tid = goods_type_id;
          this.title = title;
          this.price = price;
          if (type != 'open_exclusive') {
            this.stock = stocks;
          } else {
            this.stock = 1;
          }
          this.editcnt = description.description;
          this.attrs = attrs;
          this.attributes = attributes;
          this.handover_option = handover_option;
          this.hide_upload = game.hide_image_upload;

          this.initBread(game, server_1, server_2, goods_type_1, goods_type_2);
          this.initTWCustomField();
          this.initImages(description.cover, description.images);
          this.initProperty(sel_handover);
        } else {
          this.$toast(res.message);
        }
      });
    },
    submitCheck(submit_type) {
      let attributes = {};

      // 標題
      if (!this.title) {
        this.$toast('請填寫商品標題');
        return '';
      }
      // 價格
      if (this.price > 50000 || this.price < 10) {
        this.$toast('商品價格為10~50,000元，請重新填寫');
        return '';
      }
      // 庫存
      if (this.exclusive && this.stock != 1) {
        this.$toast('專屬商品庫存僅限為1件，請重新填寫');
        return '';
      }
      if (this.stock < 1 || this.stock > 999) {
        this.$toast('庫存數量為1~999件，重新填寫');
        return '';
      }
      // 详情
      if (!this.editor.getContent()) {
        this.$toast('請填寫商品詳情');
        return '';
      }
      // 交貨時間
      if (!this.handover_at) {
        this.$toast('請選擇承諾交貨時間');
        return '';
      }

      // 遊戲幣
      if (this.tid == 1) {
        if (!this.unit || !this.unit_num) {
          this.$toast('請填寫遊戲幣數量');
          return '';
        }
        attributes[this.gc_unit_list.id] = this.unit.split(',')[0];
        attributes[this.gc_unit_list.other_id] = this.unit_num;
      } else if (this.tid == 7) { // 代儲
        if (!this.sel_store_item) {
          this.$toast('請選擇商品品項');
          return '';
        }
        attributes[this.sel_store_id] = this.sel_store_item.split(',')[0];
      }

      if (this.$refs.customForm && submit_type != 'open_exclusive') { // 成品號時
        attributes = FormDataJson.formToJson(this.$refs.customForm);
        for (const v of this.attrs) {
          if (v.required) {
            if (!attributes[v.id]) {
              this.$toast(`${v.name}為必填項`);
              return '';
            }
          }
        }
      }

      if (Object.keys(attributes).length) {
        attributes = JSON.stringify(attributes);
      } else {
        attributes = '';
        if (submit_type == 'open_exclusive' && this.tid == 4) {
          attributes = JSON.stringify(this.attributes);
        }
      }
      return { type: 'pass', attributes };
    },
    onSelectHandover(v) {
      this.handover_at = v.val;
    },
    showHandoverTip() {
      this.$dialog.alert({
        title: '溫馨提示',
        messageAlign: 'left',
        message: `<p>承諾交貨時間說明：</p>
        <p>1. 選擇較短的時間有利於您盡快出售商品；</p>
        <p>2. 若實際交貨時間超出承諾時間，可在移交商品時操作“申請延時移交”，具體延長時長由買賣雙方協商。</p>`,
        confirmButtonText: '我知道了',
        closeOnClickOverlay: true
      });
    }
  },
  watch: {
    unit_num() {
      this.unit_num = (this.unit_num + '').replace(/[^\d.]/g, '');
    },
    price() {
      this.price = (this.price + '').replace(/\D/g, '') * 1;
      if (this.price > 50000 || this.price < 10) {
        this.price_error_tip = 1;
      } else {
        this.price_error_tip = 0;
      }
    },
    stock() {
      this.stock = (this.stock + '').replace(/\D/g, '');
    },
    editcnt() {
      if (this.editor && this.editcnt) {
        this.editor.setContent(this.editcnt);
      }
    },
    editor() {
      if (this.editor && this.editcnt) {
        this.editor.setContent(this.editcnt);
      }
    }
  }
};
