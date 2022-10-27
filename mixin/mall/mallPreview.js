import { mapState, mapMutations } from "vuex";
import * as localstorage from '~/utils/localstorage';

export default {
  data() {
    return {
      sel_sku_key: 0,
      sel_prop_sku_data: {
        sku: '',
        ware_number: 1
      }
    };
  },
  computed: {
    ...mapState(['user', 'mall']),
    is_preview() {
      return !!this.$route.query.preview;
    }
  },
  methods: {
    ...mapMutations({
      updateMallDetail: 'mall/updateMallDetail',
      updateMallSeller: 'mall/updateMallSeller'
    }),
    async initMallPreview() {
      const preview_id = this.$route.query.preview;
      const data = localstorage.get(`preview_${preview_id}`);
      if (!data) {
        this.$toast('當前商品預覽資訊已丟失，請重新嘗試唷');
        return;
      }
      const res = await this.$comapi.preview_seller_data(this.user.uid);
      if (res.data.code != 200) {
        this.$toast('獲取賣家資料失敗');
        return;
      }
      const v = res.data;
      v.data.sell_user = this.user.uid;
      this.updateMallSeller(v);

      data.deal_time = v.data.deal_time;
      data.game_server = `${data.game_info.game.name} / ${data.game_info.server.name}`;
      data.ware_image = data.images;
      data.sell_serve = `${this.$config.delivery[data.deliveryTime]}內交貨`;
      data.page_view = 99999;
      const skus = [];
      for (const v2 of data.skus) {
        if (v2.is_default) {
          this.sel_prop_sku_data.sku = v2;
        }
        if (!v2.remove) {
          skus.push(v2);
        }
      }
      data.skus = skus;
      this.sel_prop_sku_data.ware_number = 1;

      const activities = [];
      for (const v2 of data.activities) {
        if (!v2.remove) {
          activities.push(v2);
        }
      }
      data.activities = activities;

      const mall = { mall_info: data };
      this.updateMallDetail(mall);
    }
  },
  watch: {

  }
};
