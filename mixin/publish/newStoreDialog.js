export default {
  data() {
    return {

    };
  },
  methods: {
    confirmGoback(cb) {
      this.$dialog.confirm({
        closeOnClickOverlay: true,
        title: '溫馨提示',
        message: '<div class="pd-lg">返回上一步將清空本頁面已編輯內容，確定要返回嗎？</div>',
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        messageAlign: 'left'
      }).then(() => {
        cb();
      }).catch(() => {});
    },
    newStoreDialog() {
      this.$dialog.confirm({
        closeOnClickOverlay: true,
        title: '新版商品的好處',
        message: `<div class="pd-lg" style="white-space:normal;"><ul class="dec-ul">
          <li>可獲得比舊版商品更高的排名；</li>
          <li>買家可在商品頁直接選擇品項下標，交易更便捷；</li>
          <li>如需了解更多，請查看詳細說明。</li>
        </ul></div>`,
        confirmButtonText: '我知道了',
        cancelButtonText: '取消',
        messageAlign: 'left'
      }).then(() => {
      }).catch(() => {});
    },
    buyInstructionsDialog() {
      this.$dialog.alert({
        closeOnClickOverlay: true,
        title: '購買須知說明',
        message: `<div class="pd-lg">買家下標此商品前，您希望他提前了解到的訊息。</div>`,
        confirmButtonText: '我知道了',
        messageAlign: 'left'
      }).then(() => {});
    },
    deliveryTimeDialog() {
      this.$dialog.alert({
        closeOnClickOverlay: true,
        title: '承諾代儲時長說明',
        message: `<div class="pd-lg">“承諾代儲時長”指從您提取資料到您確認移交的用時時長。</div>`,
        confirmButtonText: '我知道了',
        messageAlign: 'left'
      }).then(() => {});
    },
    exclusivePriceDialog() {
      this.$dialog.alert({
        closeOnClickOverlay: true,
        title: '專屬價格說明',
        message: `<div class="pd-lg">專屬商品不參與行銷配置內的相關優惠。</div>`,
        confirmButtonText: '我知道了',
        messageAlign: 'left'
      }).then(() => {});
    },
    buyUserDialog() {
      this.$dialog.alert({
        closeOnClickOverlay: true,
        title: '專屬買家說明',
        message: `<div class="pd-lg">專屬開設成功後，將在即時通訊內告知買家。</div>`,
        confirmButtonText: '我知道了',
        messageAlign: 'left'
      }).then(() => {});
    }
  }
};
