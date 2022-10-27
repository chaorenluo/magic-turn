import { date2UnixTime } from '~/utils/utils';
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      delivery_sheet: false,
      submitting: false,

      period_sheet: false,
      is_set_marketing: false,
      show_period_start: false,
      show_period_end: false,

      auto_title: '',
      current_start_date: new Date(),
      current_end_date: new Date(),
      period_type: 0,
      period_start: '',
      period_end: '',

      mall_id: this.$route.query.id,
      game_info: '',
      ueditor: '',
      ware_desc: '',

      form: {
        game_id: this.$route.query.g || '',
        server_id: this.$route.query.s || '',
        ware_type: this.$route.query.t || '',
        ware_title: '',
        ware_number: '',
        instructions: '',
        skus: [],
        images: [],
        activities: []
      }

    };
  },
  computed: {
    ...mapState(['publish']),
    pictures() {
      return this.publish.pictures;
    },
    render_sku_list() {
      if (!this.form.skus.length) {
        return [];
      }
      const tmp = [];
      for (const v of this.form.skus) {
        if (tmp.length >= 5) {
          break;
        }
        if (!v.remove) {
          tmp.push(v);
        }
      }
      return tmp;
    }
  },
  methods: {
    ...mapActions({
      getPublishData: 'publish/getPublishData'
    }),
    confirmDelivery(i) {
      this.delivery_time = i;
      this.delivery_sheet = false;
    },
    editorReady(ue) {
      this.ueditor = ue;
    },
    checkSubmit(type) {
      if (!this.ueditor) {
        return false;
      }
      const params = {
        game_id: this.form.game_id || this.game_info.game.id,
        server_id: this.form.server_id || this.game_info.server.id,
        ware_type: this.form.ware_type || this.game_info.type.id,
        ware_title: this.form.ware_title,
        ware_number: this.form.ware_number ? this.form.ware_number * 1 : 0,
        ware_desc: this.ueditor.getContent(),
        instructions: this.form.instructions,
        deliveryTime: this.delivery_time,
        skus: this.form.skus,
        images: this.show_image
      };
      if (this.is_exclusive) {
        params.activities = [];
      } else {
        params.activities = this.$refs.manageMarket.collectMarketing(this.is_set_marketing, this.period_type, this.period_start, this.period_end);
      }
      // 刊登时离开当前页面
      if (type == 'goback') {
        for (const i in params) {
          if (i == 'game_id' || i == 'server_id' || i == 'ware_type') {
            continue;
          }
          if ((i == 'skus' || i == 'images' || i == 'activities') && !params[i].length) {
            continue;
          }
          if (params[i]) {
            return true;
          }
        }
        return false;
      }
      if (this.is_direct) { // 直接开专属
        return params;
      }

      if (!params.skus.length) {
        this.$toast('請輸入代儲品項');
        return;
      }
      if (!params.ware_title) {
        this.$toast('請輸入商品標題');
        return;
      }
      if (!params.ware_number) {
        this.$toast('請輸入商品庫存');
        return;
      }
      if (!params.ware_desc) {
        this.$toast('請輸入商品詳情');
        return;
      }
      if (!params.instructions) {
        this.$toast('請輸入購買須知');
        return;
      }
      if (!params.deliveryTime) {
        this.$toast('請選擇承諾代儲時長');
        return;
      }
      return params;
    },
    formatSku(mallInfo) {
      const { skus = [] } = mallInfo;
      let idx = 0;

      return skus.map(v => {
        const { prop_name = '', price = '', id = 0, remove = 0, is_default = 0 } = v;
        const tmp = { prop_name, price, id, remove, is_default, key: idx };

        idx++;
        return tmp;
      });
    },
    formatActivities(mallInfo) {
      const { activities = [] } = mallInfo;
      let p_type = 0;
      let start_time = '';
      let end_time = '';
      const tmp_arr = activities.map(v => {
        const { id = 0, type = "reduction", threshold_amount = '', reduction_amount = '', remove = 0, status = 0, period_end, period_start, period_type } = v;
        p_type = period_type;
        start_time = period_start;
        end_time = period_end;
        if (status) {
          this.is_set_marketing = true;
        }
        return { id, type, threshold_amount, reduction_amount, remove, status };
      });
      this.period_type = p_type;
      this.period_start = start_time;
      this.period_end = end_time;
      this.current_start_date = new Date(date2UnixTime(start_time) * 1000);
      this.current_end_date = new Date(date2UnixTime(end_time) * 1000);
      return tmp_arr;
    },
    getPublish() {
      this.$store.dispatch('publish/fetchPubImages');

      const { game_id, server_id, ware_type } = this.form;
      this.$toast.loading({
        duration: 0,
        mask: true,
        forbidClick: true,
        message: '請稍後'
      });
      this.$hkapi.tw_game_info({ game_id, server_id, ware_type }).then(r => {
        const { data: res } = r;
        if (!res.status) {
          this.$toast(res.message);
          return;
        }
        this.game_info = res.data;
      });
      this.getPublishData({ game_id, server_id, ware_type }).then(res => {
        this.$toast.clear();
        if (res.data.code != 200) {
          this.$toast('獲取表單失敗，請聯絡客服');
          return;
        }

        const { data } = res.data;
        const { deliveryTime } = data;
        // 承諾交貨時間
        this.delivery_time_list = deliveryTime.deliveryTimeList;
      });
    },
    async getEditData() {
      this.$toast.loading({
        duration: 0,
        mask: true,
        forbidClick: true,
        message: '請稍後'
      });
      const r = await this.$comapi.get_edit_data(this.mall_id);
      const { data: res } = r;
      this.$toast.clear();

      if (res.code != 200) {
        this.$error({
          message: res.message,
          statusCode: 200,
          url: '/v3/my/goods'
        });
        return;
      }
      const { deliveryTime, mallInfo, warePath } = res.data;
      this.delivery_time_list = deliveryTime.deliveryTimeList;
      const game = { name: warePath.game_name, id: mallInfo.game_id };
      const server = { name: warePath.server_name, id: mallInfo.server_id };
      const type = { name: warePath.type_name, id: mallInfo.ware_type };

      this.game_info = { game, server, type };
      this.ware_desc = mallInfo.mall_desc;
      this.show_image = mallInfo.mall_images.split(',');
      this.delivery_time = mallInfo.deliveryTime;

      this.form.ware_title = mallInfo.ware_title;
      this.form.ware_number = mallInfo.ware_number;
      this.form.instructions = mallInfo.extension?.instructions;

      if (this.is_exclusive) {
        this.form.skus = mallInfo.skus;
        this.form.activities = mallInfo.activities;
      } else {
        this.form.skus = this.formatSku(mallInfo);
        const activites_list = this.formatActivities(mallInfo);
        if (activites_list.length) {
          this.$refs.manageMarket.setDefaultMarketingList(activites_list);
          this.form.activities = activites_list;
        }
      }
    }
  },
  watch: {
    ueditor() {
      if (this.ware_desc && this.ueditor) {
        this.ueditor.setContent(this.ware_desc);
      }
    },
    ware_desc() {
      if (this.ware_desc && this.ueditor) {
        this.ueditor.setContent(this.ware_desc);
      }
    }
  }
};
