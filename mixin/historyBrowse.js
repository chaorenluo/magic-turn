// 历史浏览
import { mapState } from 'vuex';
import * as localstorage from '~/utils/localstorage';

export default {
  data() {
    return {
      historyBrowse: null
    };
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    // 根据用户登入状态，加载历史列表
    loadHistory() {
      let history = null;
      const uid = this.user.uid;
      // 根据id获取浏览记录
      if (uid) {
        history = localstorage.get('user_history_browse') || {};
        history = history[uid] || [];
      } else {
        history = localstorage.get('history_browse') || [];
      }
      this.historyBrowse = history.filter(v => v.id && v.sid && v.tid >= 0);
    },
    // 进入商品详情页，保存游戏信息到历史及记录
    updateHistoryBrowse(gameInfo) {
      if (!gameInfo) {
        return;
      }
      const { game, server, type } = gameInfo;
      // 防止商品被删除没有数据，不记录了
      if (!server || !type) {
        return;
      }
      const historyBrowse = this.historyBrowse;
      const uid = this.user.uid;
      const record = {
        id: game.id,
        name: game.name,
        sid: server.id,
        sname: server.name,
        tid: type.id,
        tname: type.name
      };

      // 清除重复
      for (let i = 0; i < historyBrowse.length; i++) {
        const item = historyBrowse[i];
        if (item.id === game.id && item.sid === server.id && item.tid === type.id) {
          historyBrowse.splice(i, 1);
        }
      }
      historyBrowse.unshift(record);
      // 超过6条记录，删除最旧一条
      if (historyBrowse.length > 6) {
        historyBrowse.pop();
      }
      if (uid) {
        const browse = localstorage.get('user_history_browse') || {};
        browse[uid] = historyBrowse;
        localstorage.set('user_history_browse', JSON.stringify(browse));
      } else {
        localstorage.set('history_browse', JSON.stringify(historyBrowse));
      }
    }
  }
};
