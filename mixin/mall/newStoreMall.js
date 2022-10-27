import { mapState } from "vuex";
// 新版代儲
export default {
  data() {
    return {
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
    },
    is_new_store() {
      if (!this.product) {
        return false;
      }
      return !!this.product.skus.length;
    }
  },
  methods: {
    showStockSku(type) {
      this.$refs.storeSku.showStore(type);
    },
    initSelSku() {
      this.sel_prop_sku_data.ware_number = 1;
      for (const v2 of this.product.skus) {
        if (this.sku_id) { // sku_id 父层
          if (v2.id == this.sku_id) {
            this.sel_prop_sku_data.sku = v2;
            break;
          }
        } else {
          if (v2.is_default) {
            this.sel_prop_sku_data.sku = v2;
            break;
          }
        }
      }
    }
  },
  mounted() {
    if (this.is_new_store && !this.is_preview) {
      this.initSelSku();
    }
  },
  watch: {

  }
};
