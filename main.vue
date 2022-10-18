
<template>
  <div v-if="initLoading" class="concern-loading normal-block">
    <!-- <van-loading class="center-block txt-center" :size="'30px'" /> -->
    <van-skeleton v-for="num in 3" :key="`skeleton_${num}`" title :row="3" />
  </div>
  <!-- 商品关注 -->
  <div v-else class="goods-concerns">
    <van-sticky>
      <!-- 關注遊戲 -->
      <div class="concern-game" :class="{'overflow-auto': focusGame.length === 3}">
        <div class="container">
          <div v-for="(item, i) in focusGame" :key="`concerns_${i}`" class="col" :class="{'col-on': focusActive == i}" @click="changeConcern(item, i)">
            <h3 class="fs32 ellipsis-box ellipsis-one-clamp">
              {{ item.ware_type_name }}
            </h3>
            <div class="flex-box section">
              <p class="ellipsis-box ellipsis-one-clamp">
                {{ item.game_name }}
              </p>
              <p>/ {{ item.server_name }}</p>
            </div>
          </div>

          <div class="relative col" style="overflow: visible; top: -8px" @click="showConcernPop">
            <h3>
              <van-icon name="add-o" size="20" />
            </h3>
            <div class="section fs22">
              <p>添加/編輯</p>
            </div>
            <div v-if="tooltip.concern" class="bw-tooltip bw-tooltip__top" style="width: 250px; top: -40px;" @click.prevent.stop="tooltip.concern = false">
              添加您想尋找的商品，可在首頁直接展示唷~
            </div>
          </div>
        </div>
      </div>
      <!-- 篩選 -->
      <div class="concern-filter flex-box justify-between van-hairline--bottom">
        <van-search
          v-model="search.value"
          :class="{'collaspe': search.collaspe}"
          shape="round"
          :show-action="search.action"
          placeholder="請輸入關鍵字"
          @search="onSearch"
          @focus="onFocusSearch"
          @cancel="onCancelSearch"
        />
        <van-dropdown-menu v-show="search.collaspe" active-color="#f60">
          <van-dropdown-item v-if="prop_item_arr.length > 1" v-model="dropdown.prop_item" :options="prop_item_arr" @change="selectDropdown('prop_item')" />
          <van-dropdown-item v-model="dropdown.sort" :options="sort_item" @change="selectDropdown('sort')" />
        </van-dropdown-menu>
      </div>
    </van-sticky>

    <div class="com-pd">
      <!-- 列表 -->
      <div v-if="lists.length" class="main-list">
        <van-list
          v-model="mall_list.loading"
          class="concern-list"
          :class="{'no-enough-data': lists.length < 10}"
          loading-text="努力加載數據中..."
          :offset="400"
          :finished="finished"
          :immediate-check="false"
          @load="getListData"
        >
          <van-cell v-for="(v, i) in lists" :key="`mall_list_${i}`" class="ml-item">
            <nuxt-link :to="getGameLink(v)">
              <h3>
                <i v-if="v.top_status" class="icon icon-rec" />
                <i v-if="v.card_id" class="hkicon-image" />
                <span class="mall-title" v-html="hightlight(v.ware_title)" />
              </h3>
              <p v-if="v.include_key" class="has-keyword">
                商品內容含有<span class="red">“{{ search.value }}”</span>
              </p>
              <div class="item-info">
                <div>
                  <span>
                    <template v-if="active_ware_type === ''">
                      {{ v.ware_type }}
                    </template>
                    <template v-if="v.sell_count > 0">
                      <template v-if="active_ware_type === ''">
                        -
                      </template>
                      已售{{ v.sell_count }}件
                    </template>
                  </span>
                </div>
                <div class="price mfs">
                  <span class="mx1fs">{{ number_format(v.ware_price) }}</span>元
                </div>
              </div>
            </nuxt-link>
          </van-cell>
          <div v-if="finished" class="van-list__finished-text">
            <p class="grey-light">没有更多商品唷~</p>
          </div>
        </van-list>
      </div>
      <div v-else class="van-list__finished-text">
        <div v-if="mall_list.loading" class="normal-block">
          <van-loading class="center-block txt-center" :size="'30px'" />
        </div>
        <div v-else class="nodata">
          <img class="center-block" src="~/assets/images/public/nogame.png">
          <p class="mt20">很抱歉，無法找到相關商品</p>
          <!-- <p class="blue-normal" @click="showFeedback">沒找到商品？點我反饋</p> -->
        </div>
      </div>
    </div>

    <!-- 添加商品關注 -->
    <van-popup v-model="concern_pop" position="right" class="setting-block">
      <van-nav-bar title="商品關注" left-arrow @click-left="concern_pop = false" />
      <van-collapse v-model="activeName" class="focus-collapse" accordion @change="collapseChange">
        <van-collapse-item
          v-for="(item, i) in focusGame"
          :key="`edit_focus_${i}`"
          :title="`${item.game_name}-${item.server_name}-${item.ware_type_name}`"
          :name="`${i + 1}`"
        >
          <van-cell-group class="sel-bk">
            <van-cell
              title="遊戲"
              :value="editList[i].game_name || '請選擇'"
              :class="{'active': editList[i].game_name}"
              is-link
              @click="clickGame('edit')"
            />
            <van-cell
              title="伺服器"
              :value="editList[i].server_name || '全伺服器'"
              :class="{'active': editList[i].server_name}"
              is-link
              @click="showTreeSelect('server')"
            />
            <van-cell
              title="商品類型"
              :value="editList[i].ware_type_name || '全商品類型'"
              :class="{'active': editList[i].ware_type_name}"
              is-link
              @click="showTreeSelect('type')"
            />
          </van-cell-group>
          <div class="flex-box align-center justify-end mt30 com-pd">
            <span class="fs26" @click="deleteFocus">删除此關注</span>
            <van-button type="primary" size="small" @click="saveEditFocus">保存</van-button>
          </div>
        </van-collapse-item>
      </van-collapse>

      <!-- 添加标注 -->
      <div v-show="add_focus" class="van-collapse van-hairline--top-bottom focus-collapse">
        <div class="van-collapse-item">
          <div class="van-cell van-cell--clickable van-collapse-item__title van-collapse-item__title--expanded">
            <div class="van-cell__title">
              <span>添加商品關注</span>
            </div>
            <i class="van-icon van-icon-arrow van-cell__right-icon" />
          </div>

          <div class="van-collapse-item__wrapper">
            <div class="van-collapse-item__content">
              <van-cell-group class="sel-bk">
                <van-cell
                  title="遊戲"
                  :value="new_focus_game || '請選擇'"
                  :class="{'active': new_focus_game}"
                  is-link
                  @click="clickGame('add')"
                />
                <van-cell
                  title="伺服器"
                  :value="editFocus.server_name ||'全伺服器'"
                  :class="{'active': editFocus.server_name}"
                  is-link
                  @click="showTreeSelect('server')"
                />
                <van-cell
                  title="商品類型"
                  :value="editFocus.ware_type_name || '全商品類型'"
                  :class="{'active': editFocus.ware_type_name}"
                  is-link
                  @click="showTreeSelect('type')"
                />
              </van-cell-group>
              <div class="flex-box align-center justify-end mt30 com-pd">
                <span class="fs26" @click="add_focus = false">删除此關注</span>
                <van-button type="primary" size="small" @click="saveNewFocus">保存</van-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-show="!activeName && !add_focus && focusGame.length < 3" class="add-concern">
        <van-button size="large" color="#027db4" @click="showAddFocus">
          添加商品關注
        </van-button>
        <div class="note">
          添加您想關注的商品後，在首頁您可以直接瀏覽到所有該類商品；<br>
          目前支援最多關注3類商品；<br>
          <nuxt-link class="blue" to="/article/feedback">點我反饋問題或建議</nuxt-link>
        </div>
      </div>
    </van-popup>

    <!-- 選擇伺服器和商品類型 -->
    <van-popup v-model="show_select" position="bottom">
      <div class="van-picker">
        <div class="van-hairline--top-bottom van-picker__toolbar">
          <div class="van-picker__cancel" />
          <div class="van-ellipsis van-picker__title">選擇伺服器、商品類別</div>
          <div class="van-picker__confirm" @click="show_select = false">
            <i class="van-icon van-icon-close van-action-sheet__close" />
          </div>
        </div>
        <div class="van-picker__columns">
          <van-tree-select
            class="multi-sel"
            :items="server_item"
            :main-active-index="tree.sid"
            :active-id="tree.tid"
            @navclick="idx => treeClick('sid', idx)"
            @itemclick="data => treeClick('tid', data)"
          />
        </div>
      </div>
    </van-popup>
    <list-feedback :feedback="feedback" @hide="hideFeedback" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { number_format, getScrollTop, setScrollTop } from '~/utils/utils';
import debounce from 'lodash.debounce';
import listFeedback from '~/components/mall/listFeedback';

import mxMall from '~/mixin/mxMall';
import historyBrowse from '~/mixin/historyBrowse';
import tooltip from '~/mixin/tooltip';

export default {
  mixins: [mxMall, historyBrowse, tooltip],
  components: { listFeedback },
  data() {
    return {
      search: {
        value: '',
        action: false,
        collaspe: true
      },
      dropdown: {
        prop_item: '',
        sort: ''
      },
      mall_list: {
        loading: false
      },
      concern_pop: false,
      show_select: false,
      activeName: '',
      initLoading: true,
      game_list: null,
      tree: { sid: -1, tid: -1 },
      add_focus: false,

      feedback: {
        show: false
      },
      tooltip: {
        concern: false
      }
    };
  },
  computed: {
    // ...mapState(['mall', 'focusGame', 'focusData', 'editFocus', 'publish']),
    focusActive() {
      return this.focusData.focusActive;
    },
    active_ware_type() {
      return this.focusGame[this.focusActive].ware_type;
    },
    gcTop() {
      return this.focusData.gcTop;
    },
    docTop() {
      return this.focusData.docTop;
    },
    lists() {
      return this.focusData[`list_${this.focusActive}`] || [];
    },
    editList() {
      return this.editFocus.list;
    },
    // 是否沒有商品了
    finished() {
      return this.focusData[`finished_${this.focusActive}`];
    },
    // 品項
    prop_item_arr() {
      if (!this.focusGame[this.focusActive].prop_item) {
        return [];
      }
      let arr = [{
        text: '全品項',
        value: '0'
      }];
      arr = arr.concat(this.focusGame[this.focusActive].prop_item.map(v => {
        return { text: v.prop_item, value: v.id + '' };
      }));
      return arr;
    },
    // 排序
    sort_item() {
      let sort_item = [
        { text: '預設排序', value: '' },
        { text: '最新刊登', value: 'time_sort|1' },
        { text: '銷量優先', value: 'sell_sort|1' },
        { text: '價格低→高', value: 'price_sort|1' },
        { text: '價格高→低', value: 'price_sort|2' }
      ];
      // 遊戲幣有幣值排序
      if (this.active_ware_type === 0) {
        sort_item = sort_item.concat([
          { text: '幣值低→高', value: 'ratios_sort|1' },
          { text: '幣值高→低', value: 'ratios_sort|2' }
        ]);
      }

      return sort_item;
    },
    // 商品類別集合
    game_type() {
      const { type } = this.editFocus;
      let arr = [{
        id: '',
        text: '全商品類別'
      }];
      if (type === 'edit') {
        arr = arr.concat(this.editFocus.ware_type_item.map(v => {
          v.text = v.name;
          return v;
        }));
      } else {
        arr = arr.concat(this.publish.game_type);
      }
      return arr;
    },
    // 伺服器集合
    server_item() {
      const { game_id } = this.editFocus;
      const game = this.game_list['_' + game_id];
      if (game) {
        const arr = [{
          sid: 0,
          text: '全伺服器',
          children: [...this.game_type]
        }];
        for (const k in game[3]) {
          const sid = k.replace('_', '') * 1;
          arr.push({
            sid,
            text: game[3][k],
            children: [...this.game_type]
          });
        }
        return arr;
      }
      return [];
    },
    new_focus_game() {
      const { game_id } = this.editFocus;
      return game_id ? arrGameList['_' + game_id][0] : '';
    }
  },

  methods: {
    number_format,
    setScrollTop,
    // ...mapMutations({
    //   updateEditList: 'updateEditList',
    //   setEditGame: 'setEditGame',
    //   updateFocusParams: 'updateFocusParams',
    //   updateListPos: 'updateListPos',
    //   updateDataParams: 'updateDataParams',
    //   updateEditParams: 'updateEditParams',
    //   resetEditParams: 'resetEditParams',
    //   updateFocusOrNot: 'updateFocusOrNot'
    // }),
    setGameList() {
      if (typeof arrGameList != 'undefined') {
        this.game_list = arrGameList;
      }
    },
    // 绑定scroll
    bindScroll(type) {
      if (process.client && this.$route.name === 'index') {
        this.handleIndexScroll();
        if (type === 'remove') {
          window.removeEventListener('scroll', debounce(this.handleIndexScroll, 75));
        } else {
          window.addEventListener('scroll', debounce(this.handleIndexScroll, 75));
        }
      }
    },
    // 监听首页滚动
    handleIndexScroll() {
      const goodsConcern = document.querySelector('.goods-concerns');
      if (goodsConcern) {
        const gcTop = goodsConcern.offsetTop;
        const docTop = getScrollTop();
        this.updateDataParams({ key: 'gcTop', value: gcTop });
        this.updateDataParams({ key: 'docTop', value: docTop });
        this.updateDataParams({ index: this.focusActive, key: 'position', value: docTop });
        if (gcTop != 0 && gcTop <= docTop) {
          this.updateFocusOrNot(true);
        }
      }
    },
    // 解析请求参数
    generateFocusParams() {
      if (this.editList.length > 0) {
        this.initLoading = false;
        setTimeout(() => {
          const index = this.focusActive;
          const pos = this.focusData[`position_${index}`];
          this.updateFilterItem();
          this.setScrollTop(pos);
        }, 100);
        return;
      }
      const params = {};
      if (this.historyBrowse.length > 0) {
        const firstData = this.historyBrowse[0];
        params.game_id = firstData.id;
        params.server_id = firstData.sid;
        params.ware_type = firstData.tid;
      } else {
        // 没有最近浏览记录
        params.game_id = '';
        params.server_id = -1;
        params.ware_type = '';
        params.type = 'reload';
      }
      this.getMyFocusGame(params);
    },
    // 获取关注的游戏
    getMyFocusGame(params) {
      this.$store.dispatch('fetchMyFocus', params).then(res => {
        const { code } = res;
        this.initLoading = false;
        this.setGameList();
        if (code === 200) {
          this.updateFilterItem();
          this.$nextTick(() => {
            this.bindScroll();
          });
          this.getListData();
          this.showTooltip();
        }
      });
    },
    showTooltip() {
      // 提示关注
      if (!this.getTipStorage('concern') && this.focusGame.length < 3) {
        this.tooltip.concern = 1;
        this.setTipStorage('concern');
      }
    },
    // 获取关注游戏的数据
    getListData(type) {
      const focusActive = this.focusActive;
      const { game_id, server_id, ware_type, last_keywords, last_prop_item, last_sort } = this.focusGame[focusActive];
      const count_rows = this.focusData[`count_rows_${focusActive}`];
      const params = {
        game_id,
        server_id,
        count_rows,
        keyword: last_keywords,
        item_id: last_prop_item,
        index: focusActive
      };
      // 商品類別
      if (ware_type !== '') {
        params.ware_type = ware_type;
      }
      // 商品排序
      if (last_sort) {
        const sort_item = last_sort.split('|');
        params[sort_item[0]] = sort_item[1];
      }
      if (type === 'reload') {
        params.type = type;
        params.count_rows = 0;
      }
      this.$store.dispatch('fetchFocusData', params).then(res => {
        this.mall_list.loading = false;
        const { code } = res;
        if (code === 200) {
          // 数据已加载完啦
          this.feedback = { ...params, from: 2, show: false };
          if (this.lists.length === res.data.total_rows) {
            this.updateDataParams({ index: focusActive, key: 'finished', value: true });
            this.$gtmClickEvent(['商品列表页', '商品过少反馈', '反馈入口露出']);
          }
          if (!res.data.total_rows) {
            this.$gtmClickEvent(['商品列表页', '商品过少反馈', '反馈入口露出']);
          }
          if (type === 'reload') {
            this.scrollToConcern();
          }
        }
      });
    },
    // 显示编辑侧边栏
    showConcernPop() {
      this.tooltip.concern = false;
      this.concern_pop = true;
      this.$gtmClickEvent(['首页', '商品关注', '添加和编辑']);
    },
    // 滑动定位到商品关注
    scrollToConcern() {
      this.setScrollTop(this.gcTop);
    },
    //
    scrollToLeft() {
      const index = this.focusActive;
      const offsetLeft = document.querySelectorAll('.col')[index].offsetLeft;
      const cg = document.querySelectorAll('.concern-game')[0];
      cg.scrollLeft = offsetLeft;
    },
    // 更新關鍵字搜尋，品項，排序
    updateFilterItem() {
      const { last_keywords, last_prop_item, last_sort } = this.focusGame[this.focusActive];
      this.search.value = last_keywords;
      this.dropdown.prop_item = last_prop_item;
      this.dropdown.sort = last_sort;
    },
    // 切换关注游戏
    changeConcern(item, i) {
      const prev = this.focusActive;
      // 保存相对应的滚动条位置
      this.updateListPos({ index: prev, position: this.docTop });
      this.updateDataParams({ key: 'focusActive', value: i });
      this.updateFilterItem();
      this.scrollToLeft();
      if (this.lists.length > 0) {
        // 回显上一次浏览位置
        const pos = this.focusData[`position_${0}`];
        this.$nextTick(() => {
          if (pos > this.gcTop) {
            this.setScrollTop(pos);
          } else {
            this.scrollToConcern();
          }
        });
      } else {
        this.getListData('reload');
      }
    },
    toggleSearch(action, collapse) {
      // 隐藏搜寻的取消按钮
      this.search.action = action;
      // 是否折叠搜索框
      this.search.collaspe = collapse;
    },
    hightlight(title) {
      return this.hightlightKeyword(title, this.search.value);
    },
    // 搜索
    onSearch(val) {
      const index = this.focusActive;
      const { id } = this.focusGame[index];
      this.$store.dispatch('fetchEditFocus', { id, last_keywords: val }).then(res => {
        const { code, message } = res;
        if (code === 200) {
          this.onCancelSearch();
          this.updateFocusParams({ index, key: 'last_keywords', value: val });
          this.getListData('reload');
        } else {
          this.$toast(message);
        }
      });
    },
    // 搜索框获取焦点
    onFocusSearch() {
      this.toggleSearch(true, false);
    },
    // 取消搜寻
    onCancelSearch() {
      this.toggleSearch(false, true);
    },
    // 展开编辑关注
    collapseChange(activeNames) {
      if (!activeNames) {
        return;
      }
      const { game_id, server_id, ware_type, ware_type_item } = this.focusGame[activeNames - 1];
      this.setEditGame({ game_id, ware_type_item });

      // 匹配伺服器
      this.tree.sid = this.server_item.findIndex(item => item.sid == server_id);
      // 匹配類別
      this.tree.tid = ware_type;
    },
    // 選中品項或者排序
    selectDropdown(type) {
      const index = this.focusActive;
      const val = this.dropdown[type];
      const prop = `last_${type}`;
      const { id } = this.focusGame[index];
      const params = { id };
      params[prop] = val;
      this.$store.dispatch('fetchEditFocus', params).then(res => {
        const { code } = res;
        if (code === 200) {
          this.updateFocusParams({ index, key: prop, value: val });
          this.getListData('reload');
        }
      });
    },
    // 显示tree select
    showTreeSelect(type) {
      const { game_id } = this.editFocus;
      if (!game_id) {
        this.$toast('請先選擇要關注的遊戲唷');
        return;
      }
      this.show_select = true;
    },
    // 选择游戏 type: edit 编辑，add 添加
    clickGame(type) {
      const query = { focus: 1, editIndex: this.activeName, editType: type };
      this.$router.push({ path: '/game/hot', query });
    },
    // 選擇伺服器和類別
    treeClick(type, payload) {
      const clickType = this.editFocus.type;
      const index = this.activeName - 1;
      switch (type) {
        case 'sid':
          const { sid, text } = this.server_item[payload];
          this.tree.sid = payload;
          // 新增編輯
          this.updateEditList({ type, index, clickType, server_id: sid, server_name: text });
          break;

        case 'tid':
          this.tree.tid = payload.id;
          this.updateEditList({ type, index, clickType, ware_type: payload.id, ware_type_name: payload.text });
          this.show_select = false;
          break;
      }
    },
    showAddFocus() {
      this.add_focus = true;
      this.resetEditParams();
      this.$gtmClickEvent(['首页', '商品关注', '添加商品关注']);
    },
    // 编辑及新增關注
    saveEditFocus() {
      // 编辑
      const index = this.activeName - 1;
      const { id } = this.focusGame[index];
      const prev_server_id = this.focusGame[index].server_id;
      const { game_id, server_id, ware_type } = this.editList[index];

      const params = {
        id,
        game_id,
        server_id,
        ware_type
      };
      if (prev_server_id !== server_id) {
        params.last_prop_item = '';
      }

      this.$store.dispatch('fetchEditFocus', params).then(res => {
        const { code, message } = res;
        this.$toast(message);
        if (code === 200) {
          window.location.reload();
          // this.updateDataParams({ index, key: 'finished', value: false })
          // this.activeName = ''
          // this.getMyFocusGame({ game_id: 0, server_id:'', ware_type: '', type: 'reload' })
        }
      });
    },
    // 删除标注
    deleteFocus() {
      // 如果只有一天关注不允许删除
      if (this.focusGame.length === 1) {
        this.$toast('您只有最後一條關注，不能刪除唷');
        return;
      }
      const index = this.activeName - 1;
      const { id } = this.focusGame[index];
      const params = { id };
      // 確認是否刪除
      this.$dialog
        .confirm({
          className: 'txt-center',
          message: '您確認要刪除此關注嗎？',
          cancelButtonText: '確認',
          confirmButtonText: '我再想想'
        })
        .then(() => {
          console.log('PEACE AND LOVE');
        })
        .catch(() => {
          this.$store.dispatch('fetchDelFocus', params).then(res => {
            const { code, message } = res;
            this.$toast(message);
            if (code === 200) {
              window.location.reload();
              // this.updateDataParams({ index, key: 'finished', value: false })
              // this.activeName = ''
              // this.getMyFocusGame({ game_id: 0, server_id: '', ware_type: '', type: 'reload' })
            }
          });
        });
    },
    saveNewFocus() {
      const { game_id, server_id, ware_type } = this.editFocus;
      if (!game_id) {
        this.$toast('請確認您是否已選擇需要關注的遊戲');
        return;
      }
      this.$store.dispatch('fetchAddFocus', { game_id, server_id, ware_type }).then(res => {
        const { code, message } = res;
        this.$toast(message);
        if (code === 200) {
          window.location.reload();
          // this.add_focus = false
          // this.concern_pop = false
          // this.getMyFocusGame({ game_id: 0, server_id: -1, ware_type: '', type: 'reload' })
        }
      });
    },
    showFeedback() {
      this.$gtmClickEvent(['商品列表页', '商品过少反馈', '点击反馈']);
      this.feedback = {
        ...this.feedback,
        show: true
      };
    },
    hideFeedback() {
      this.feedback = {
        ...this.feedback,
        show: false
      };
    }
  },
  mounted() {
    this.setGameList();
    this.loadHistory();
    this.generateFocusParams();
  },
  beforeDestroy() {
    this.bindScroll('remove');
    this.resetEditParams();
  },
  beforeMount() {
    const { game_id, index, type } = this.editFocus;
    // 添加關注遊戲，則展開關注
    if (game_id) {
      this.concern_pop = true;
      // 是添加
      if (type === 'add') {
        this.add_focus = true;
      } else {
        this.activeName = index;
      }

      this.$store.dispatch('publish/fetchGameType', { game_id }).then(res => {
        this.show_select = true;
      });
    }
  }
};
</script>

<style lang="stylus">
@import '../../assets/stylus/common/mall_list.styl';

.concern-loading {
  .van-skeleton {
    margin-bottom 30px
  }
}
.goods-concerns {
  background $white
  .van-sticky {
    background $white
  }
  .van-sticky--fixed {
    background #f6f6f6
  }

  .concern-list {
    .ml-item {
      padding 20px 0
    }
  }
  .van-list__finished-text{
    padding-bottom 10vh
  }
  .no-enough-data {
    .van-list__finished-text {
      padding-bottom 65vh
    }
  }
  .nodata {
    height 80vh
    img {
      width 40%
    }
  }

  .add-concern {
    position fixed
    bottom 40px
    width 100%
    padding 0 20px
    .van-button {
      display block
      width 70%
      margin 0 auto 50px
    }
    .note {
      line-height 50px
    }
  }
  .van-tree-select {
    width 100%
  }

  .van-tree-select__item {
    line-height 78px
    font-weight 400
  }
}
.concern-game {
  padding 30px
  background #f6f6f6

  .container {
    white-space nowrap
  }

  .col {
    display inline-block
    margin-right 20px
    background #f6f6f6
    border-radius 4px
    overflow hidden
    &:last-child {
      margin-right 0
    }

    &.col-on {
      // background #ffefe5

      h3 {
        color #f60
      }
      .section {
        background #f60
        p {
          color #fff
        }
      }
    }

    h3 {
      height 40px
      color #333
      font-size 32px
      padding 5px 20px 0
      text-align center
      font-weight 400
      line-height 1
    }

    .section {
      max-width 300px
      margin-top 10px
      padding 0 20px
      height 42px
      line-height 42px
      border-radius 20px
      p {
        color #999
        font-size 22px

        &:first-child {
          max-width 160px
        }
      }
    }
  }
  .edit {
    color #b6b6b6
    background #f6f6f6
    p {
      color #b6b6b6
    }
  }

  .bw-tooltip {
    right -55px
    &::after {
      right 115px!important
    }
  }
}

.concern-filter {
  padding 0 30px 0 20px
  background #fff
  .van-search {
    width 100%
    &.collaspe {
      width 50%
    }
  }

  .van-dropdown-menu {
    width 45%
    justify-content flex-end
    &::after {
      display none
    }
    .van-dropdown-menu__item {
      max-width 160px
    }
  }
}

.focus-collapse {
  .sel-bk {
    &::after {
      border-top 0
    }
  }
  .van-cell {
    padding 25px 30px

    &::after {
      width 100%
    }

    &.active {
      .van-cell__value span {
        color $fc1
      }
    }
  }

  .van-cell__title {
    span {
      font-size $fs28
    }
  }
  .van-button--small {
    margin-left 30px
    font-size $fs26
  }
}
</style>
