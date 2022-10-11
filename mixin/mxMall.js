import { mapMutations } from 'vuex';

export default {
  methods: {
    // ...mapMutations({
    //   addNewFocus: 'addNewFocus'
    // }),
    getGameLink(v) {
      const buy_status = this.buy_status;
      return buy_status ? `/mall/detail/exclusive?id=${v.id}&complete=1` : `/mall/detail/${v.id}`;
    },
    // 高亮标题的关键字
    hightlightKeyword(title, keyword) {
      const rep = new RegExp('[' + keyword + ']', 'gmi');
      title = title.replace(rep, key => {
        return '<u>' + key + '</u>';
      });
      return title;
    },
    clickFromFocus(gid) {
      const { editIndex, editType } = this.$route.query;
      const game_name = this.exchangeName(gid);
      // 保存新的遊戲資料
      this.addNewFocus({ game_name, editIndex, game_id: gid, editType: editType });
      this.$router.push('/');
    },
    exchangeName(id) {
      const game = arrGameList['_' + id];
      if (id == 40876) {
        return false;
      }
      if (game) {
        return game[0];
      } else {
        return false;
      }
    }
  }
};
