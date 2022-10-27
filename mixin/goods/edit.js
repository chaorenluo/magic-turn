export default {
  data() {
    return {
      check_all: false,
      list_check: [],
      action_cn: {
        up: '上架',
        down: '下架',
        update: '更新',
        delete: '刪除'
      }
    };
  },
  methods: {
    showList() {
      console.log(this.list_check);
    },
    batchOperationDialog(action) {
      let name = `${this.action_cn[action]}`;
      if (action == 'delete' && this.$route.query.tab == 'exclusive') {
        name = '取消刊登';
      }
      this.$dialog.confirm({
        closeOnClickOverlay: true,
        title: `批量${name}`,
        message: `<div class="pd-lg">確定要${name}所選商品嗎？</div>`,
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        messageAlign: 'left'
      }).then(() => {
        this.doMallManage(action);
      }).catch(() => {});
    },
    async doMallManage(action) {
      const id = this.list_check.join(',');
      this.$toast.loading({
        message: '處理中...',
        forbidClick: true,
        duration: 0
      });
      const r = await this.$comapi.mall_management({ id, action });
      this.$toast.clear();
      const { data: res } = r;

      if (res.code != 200) {
        this.$toast(res.message);
        return;
      }
      this.$toast('操作成功');
      // 父层方法
      this.$emit('input', false);
      // this.getListData();
      this.updateListData(action);
    },
    updateListData(action) {
      // for (const [i, v] of this.list.entries()) {
      //   if (this.list_check.includes(v.id)) {
      //     if (action == 'update') {
      //       v.can_update = false;
      //     } else {
      //       this.list.splice(i, 1);
      //     }
      //   }
      // }
      this.resetAllData();
      this.getListData();
    }
  },
  watch: {
    check_all() {
      this.$refs.checkboxGroup.toggleAll(this.check_all);
    },
    $route() {
      this.list_check = [];
    }
  }
};
