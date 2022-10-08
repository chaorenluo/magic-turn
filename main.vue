<template>
  <div class="cards-page">
    <fixed-head :height="fix_head_height">
      <van-notice-bar v-if="card_notice" left-icon="volume-o" mode="closeable" @close="hideNotice('card_notice')">
        <a :href="card_notice.url" style="color: #ed6a0c;">{{ card_notice.title }}</a>
      </van-notice-bar>
      <van-nav-bar title="點數卡" :left-arrow="!$check_in_app" @click-left="clickLeft" />
    </fixed-head>
    <h3 class="seo hide">24H自動發卡，來源正規，品質保障</h3>
    <div v-if="!is_lgn" id="gpt-card-idx2" class="card-banner" />
    <div v-else-if="spring_2021 && user.count_end_time > option.server_time.time" class="spring-active">
      <a class="nfs" href="https://m.8591.com.hk/notice/detail?id=1090" target="_blank">活動規則</a>
      <count-down :now-time="option.server_time.time" :end-time="user.count_end_time" />
    </div>
    <div v-else id="gpt-card-idx" class="card-banner" />

    <van-tabs v-model="tab" swipeable sticky animated :offset-top="sticky_top">
      <van-tab title="港台點卡" name="hkntw">
        <card-list :list="hkntw_list" @clickCard="onClickCard" />
      </van-tab>
      <van-tab title="海外點卡" name="oversea">
        <card-list :list="oversea_list" @clickCard="onClickCard" />
      </van-tab>
      <van-tab title="大陸點卡" name="mainland">
        <card-list :list="mainland_list" @clickCard="onClickCard" />
      </van-tab>
    </van-tabs>

    <van-sku
      ref="sku"
      v-model="show_sku"
      class="card-sku"
      :sku="{
        tree:[],
        none_sku: true,
        stock_num: card_stock
      }"
      :goods-id="card_id"
      :hide-stock="true"
      :reset-stepper-on-hide="true"
      :quota="10"
      :disable-stepper-input="true"
      :close-on-click-overlay="true"
      stepper-title="購買數量"
      :custom-stepper-config="{
        quotaText: stock_message,
        handleOverLimit: data => overLimit(data)
      }"
      @stepper-change="changeStock"
    >
      <template #sku-header>
        <div class="card-sku-header ml-lg mr-lg mt-lg van-hairline--bottom">
          <com-image :src="card_img" :error-src="require('_IMG_/index/noimg.png')" />
          <p class="card-sku-header__title fs-36 mt-lg"> {{ card_name }} </p>
          <coupon-banner v-if="is_lgn" class="van-sku__goods-price" type="card" />

          <p class="card-sku-header__price bfs mt-lg">
            <del>原價：HK$ {{ card_price }}</del>
          </p>
          <div class="card-sku-header__sale bfs flex space-between align-end lineheight1">
            <div>
              {{ price_txt }}：
              <span v-if="card_85_price" class="orange">
                HK$ <span class="fs-50">{{ card_85_price }}</span>
              </span>
              <span v-else class="fs-30 orange">暫無庫存</span>
              <span v-if="discountable" class="txt-tag red radius nfs ml-sm">
                {{ card_discount }}<span>折</span>
              </span>
            </div>
            <sale-count :cid="sel_card.i" />
          </div>
        </div>
      </template>
      <div slot="sku-group" class="van-sku-group-container van-hairline--bottom">
        <div class="van-sku-row">
          <div>面額：</div>
          <div class="denom-list flex flex-wrap space-between">
            <template v-if="card_sku_list.length">
              <span v-for="v in card_sku_list" :key="v.id" :class="['denom-list-item', {'active': sel_sku.id == v.id}]" @click="clickSku(v)">
                {{ v.n }}
              </span>
              <span v-for="(v, i) in fill_sku_list" :key="i" class="denom-list-item empty" />
            </template>
            <span v-else class="denom-list-item">當前未配置面額 </span>
          </div>
        </div>
      </div>
      <template slot="sku-actions">
        <div class="van-sku-actions">
          <van-button v-if="!card_stock" disabled size="large">暫無庫存</van-button>
          <template v-else>
            <van-button v-ga-event="['商品相关','加入购物车','点卡频道页-加入购物车']" size="large" type="warning" @click="onBuyClicked('addCart')">加入購物車</van-button>
            <van-button v-ga-event="['商品相关','购买','点卡频道页-立即购买']" size="large" type="danger" @click="onBuyClicked('')">立即購買</van-button>
          </template>
        </div>
      </template>
    </van-sku>
    <fixed-foot :height="$check_in_app ? .6 : 1.6">
      <buy-user :class="{'hide-slide':!show_buy_user}">
        <div slot="hide-txt" class="flex align-center" @click="show_buy_user = false;">
          收起<span class="hkicon-arr-down ml-xs" />
        </div>
      </buy-user>
      <tab-bar v-if="!$check_in_app" />
    </fixed-foot>
  </div>
</template>

<script>
import "_SCSS_/cards/index.scss";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { number_format } from "_UTIL_/helper";
import noimg from "_IMG_/cards/card_noimg2.png";
import tabBar from "_COMP_/public/tabBar";
import couponBanner from "_COMP_/public/couponBanner";
import countDown from "_COMP_/plugin/countDown";
import fixedHead from "_COMP_/public/fixedHead";
import fixedFoot from "_COMP_/public/fixedFoot";
import buyUser from "_COMP_/card/buyUser";
import saleCount from "_COMP_/card/saleCount";
import cardList from "_COMP_/card/cardList";
import loginPop from "_MIX_/loginPop";

export default {
  mixins: [loginPop],
  async asyncData({ store, query, params, error }) {
    await store.dispatch('transferData/getCardData');
    const { t = 'hkntw' } = query;
    const { id = '' } = params;
    let seo_title = '點數卡-24H自動發卡、100%品質保證-香港8591';
    let seo_description = '8591點數卡提供港臺點卡、大陸點卡、海外點卡；Mycard、Gash、貝殼幣、GO卡、iTunes禮品卡、google play禮品卡等。買點數卡，上香港8591';
    let og_image = '';
    const og_description = '24H自動發卡，100%品質保障，首單滿99减30';

    if (id) {
      const card_data = store.state.transferData.card_data[`_${id}`];
      if (!card_data) {
        return error({ tle: '點數卡ID錯誤，請重試', statusCode: 200 });
      }
      const card_name = card_data.n;

      seo_title = `${card_name}-香港8591`;
      seo_description = `${card_name}限時優惠，24H自動發卡，100%品質保障，支援轉數快付款。買${card_name}點數卡，上香港8591，首單滿99減20 `;
      og_image = card_data.c;
    }

    let hkntw_list = { };
    let mainland_list = { };
    let oversea_list = {};

    for (const i in store.state.transferData.card_data) {
      const v = store.state.transferData.card_data[i];
      switch (v.t) {
        case '港台點卡':
          hkntw_list[i] = v;
          break;
        case '大陸點卡':
          mainland_list[i] = v;
          break;
        case '海外點卡':
          oversea_list[i] = v;
          break;
      }
    }
    if (!Object.keys(hkntw_list).length) {
      hkntw_list = '';
    }
    if (!Object.keys(mainland_list).length) {
      mainland_list = '';
    }
    if (!Object.keys(oversea_list).length) {
      oversea_list = '';
    }

    return {
      hkntw_list,
      mainland_list,
      oversea_list,
      show_card_id: id,
      tab: t,
      seo_title,
      seo_description,
      og_image,
      og_description
    };
  },
  components: { tabBar, couponBanner, fixedHead, fixedFoot, countDown, buyUser, saleCount, cardList },
  head() {
    const meta = [
      { hid: 'description', name: 'description', content: this.seo_description },
      { hid: 'og:description', property: "og:description", content: this.og_description }
    ];
    if (this.og_image) {
      meta.push(
        { hid: 'og:image', property: "og:image", content: this.og_image },
        { hid: 'og:image:width', property: "og:image:width", content: 600 },
        { hid: 'og:image:height', property: "og:image:height", content: 314 }
      );
    }
    return {
      title: this.seo_title,
      meta,
      link: [
        { hid: 'amphtml', rel: 'amphtml', href: `https://m${this.$config.domain}/amp/cards` }
      ]
    };
  },
  data() {
    return {
      noimg,
      submitting: false,
      loading: false,
      show_sku: false,
      sel_card: '',
      sel_sku: '',
      sel_num: '',
      show_buy_user: true,

      card_id: '',
      card_img: '',
      card_sku_list: [],
      fill_sku_list: [],
      card_name: '',
      card_stock: 0,
      card_price: '',
      card_85_price: '',
      card_discount: '',
      discountable: 0,
      price_txt: '現價',

      coupon_list: [],

      group_buy_price: 0,
      img_url: this.$config.img_url
    };
  },
  computed: {
    fix_head_height() {
      let h = 0.8;
      if (this.card_notice) {
        h += 0.6;
      }
      return h;
    },
    spring_2021() {
      return this.user.user_info.spring_2021;
    },
    card_notice() {
      return this.transferData.notification.card_notice;
    },
    has_card_ad() {
      return this.transferData.has_card_ad;
    },
    card_data() {
      return this.transferData.card_data;
    },
    card_discount_switch() {
      return this.option.site.card_discount_switch ? this.option.site.card_discount_switch * 1 : 0;
    },
    stock_message() {
      if (this.card_stock > 5) {
        return '';
      }
      if (this.loading) {
        return '檢測庫存...';
      }
      if (this.card_stock > 0) {
        return '庫存緊張';
      }
      if (this.card_85_price) {
        return '庫存不足';
      }
      return '暫無庫存';
    }
  },
  methods: {
    number_format,
    clickLeft() {
      this.$goBack();
    },
    getSelVal() {
      const data = {
        card_id: this.sel_card.i,
        denom_id: this.sel_sku.id,
        quantity: this.sel_num
      };
      this.loading = true;
      this.$api.get_denom_price(data).then(res => {
        this.loading = false;
        this.$toast.clear();
        if (res.status) {
          const { sale_price, discount, discountable, stock, group_buy_price } = res.data;
          this.card_stock = stock;
          this.card_85_price = sale_price;
          this.discountable = discountable;
          this.card_discount = (discount * 100 + '').replace('0', '');
          this.group_buy_price = group_buy_price;// 拼團價格
          this.price_txt = '現價';
          if (this.discountable) {
            this.price_txt = '新人價';
          }

          if (this.card_discount_switch && !discountable && this.card_price > sale_price) {
            const d = Math.ceil(parseInt((sale_price / this.card_price) * 1000) / 10);
            if (d < 100) {
              this.discountable = 1;
              this.card_discount = (d + '').replace('0', '');
            }
          }
        } else {
          this.card_stock = 0;
          this.card_85_price = 0;
          this.discountable = 0;
        }
        this.show_sku = true;
      });
    },
    onClickCard(data) {
      const { k: cid, v: val } = data;
      this.clickCard(cid, val);
    },
    clickCard(cid, val) {
      const denom_arr = []; // 面額 sku 數組
      const v = { ...val };

      v.i = cid.replace('_', '');
      if (v.d.length === 0) {
        // 空數據
      } else {
        for (const i in v.d) {
          denom_arr.push({
            card_name: v.n,
            ...v.d[i],
            id: i.replace('_', '')
          });
        }
      }

      this.sel_card = v;
      this.sel_sku = denom_arr[0] ?? '';
      this.sel_num = 1;

      this.card_id = v.i;
      this.card_img = v.c ? `${v.c}!t314x192.jpg` : '';
      this.card_sku_list = denom_arr;
      this.fill_sku_list = new Array(4 - denom_arr.length % 4).fill(1);

      this.card_name = `${v.n} ${this.sel_sku.n || ''}`;

      this.card_price = this.sel_sku.p;
      this.$toast.loading({
        duration: 0,
        forbidClick: true,
        loadingType: 'spinner',
        message: '正在加載...'
      });
      this.getSelVal();
    },
    changeStock(v) {
      if (!this.submitting && this.show_sku) {
        this.sel_num = v;
        this.getSelVal();
      }
    },
    overLimit(data) {
      const { action } = data;

      if (action === 'minus') {
        this.$toast('至少選擇一件商品');
      } else if (action === 'plus') {
        if (this.sel_num == this.card_stock) {
          this.$toast('已經沒庫存了~');
        } else {
          this.$toast('最多一次購買10件喔');
        }
      }
    },
    clickSku(v) {
      if (v.id == this.sel_sku.id) return;
      this.sel_sku = v;
      this.card_stock = 0; // 設置步進器值為1
      this.sel_num = 1;
      this.card_price = v.p;
      this.card_name = `${v.card_name} ${v.n}`;
      this.getSelVal();
    },
    onBuyClicked(type) {
      if (!this.isLgn()) {
        return;
      }
      const data = {
        card_id: this.sel_card.i,
        denom_id: this.sel_sku.id,
        quantity: this.sel_num
      };

      if (data.card_id == 53 || data.card_id == 56) {
        this.buyCardRiskPop(type, data);
        return;
      }

      if (this.submitting) {
        return;
      }
      if (data.card_id == 2 && !this.$localstorage.get('pop_mycard')) {
        this.$localstorage.set('pop_mycard', 1);
        this.$dialog.alert({
          title: "溫馨提示",
          message: '【港版Mycard】官方會員帳號儲值服務臨時維護中，目前只能儲值到遊戲內（【台版MyCard】無限制），請確認後再購買。',
          showCancelButton: true,
          confirmButtonText: '確認購買',
          cancelButtonText: '我再想想'
        }).then(() => {
          if (this.submitting) {
            return;
          }
          this.submitting = true;
          if (type === 'group') {
            this.cardGroup(data);
          } else if (type == 'addCart') {
            this.addCart(data);
          } else {
            this.doBuy(data);
          }
        }).catch(() => {});
        return;
      }

      if (type === 'group') {
        this.cardGroup(data);
      } else if (type == 'addCart') {
        this.addCart(data);
      } else {
        this.doBuy(data);
      }
    },
    buyCardRiskPop(type, data) {
      this.$dialog.alert({
        message: '因Google更新使用條款，玩家必須要用"當地IP+當地帳號”方可充值<br>購買前請仔細閱讀相關說明',
        showCancelButton: true,
        confirmButtonText: '已了解，繼續購買',
        cancelButtonText: '詳細了解'
      }).then(() => {
        if (this.submitting) {
          return;
        }
        if (type === 'group') {
          this.cardGroup(data);
        } else if (type == 'addCart') {
          this.addCart(data);
        } else {
          this.doBuy(data);
        }
      }).catch(() => {
        location.href = 'https://www.8591.com.hk/notice/detail?id=27&gopc=1';
      });
    },
    // 購買點卡
    doBuy({ denom_id, quantity }) {
      this.submitting = 1;
      const data = JSON.stringify([{ denom_id, quantity }]);
      this.$api.generate_order_goods(data).then(res => {
        this.submitting = 0;
        if (res.status) {
          const i = [];
          for (const v of res.data) {
            i.push(`${v.id}_${v.quantity}_c`);
          }
          this.$router.push({ path: '/pay', query: { i: i.join(',') } });
        } else {
          this.$toast(res.message);
        }
      });
    },
    addCart({ denom_id, quantity }) {
      const data = {
        goods_id: denom_id,
        type: 'denom',
        quantity
      };
      this.submitting = 1;
      this.$api.add_cart(data).then(res => {
        this.submitting = 0;
        if (res.status) {
          this.$toast('商品已成功加入購物車');
          this.$cfgFn.getUserCenterCount();
        } else {
          this.$toast(res.message);
        }
      });
    },
    sortCoupon(a, b) {
      return b.reduction_amount - a.reduction_amount;
    },
    getCoupon() {
      if (!this.is_lgn) {
        return;
      }
      this.$api.get_coupon({ type: 0 }).then(res => {
        if (res.status) {
          const coupon = res.data.coupon || [];
          const coupon_list = coupon.filter(v => {
            if (v.allow_goodsType != '非點數卡') {
              return true;
            }
          });
          coupon_list.sort(this.sortCoupon);
          this.coupon_list = coupon_list;
        }
      });
    },
    cardAdReady() {
      if (this.has_card_ad) {
        if (!this.is_lgn) {
          const iframe = document.querySelector('#gpt-card-idx2 iframe');
          const el = iframe.contentDocument.querySelector('#google_image_div a');
          iframe.parentNode.remove();
          document.querySelector('#gpt-card-idx2').appendChild(el);
        } else {
          const iframe = document.querySelector('#gpt-card-idx iframe');
          const el = iframe.contentDocument.querySelector('#google_image_div a');
          iframe.parentNode.remove();
          document.querySelector('#gpt-card-idx').appendChild(el);
        }
      }
    },
    initGoogleAd() {
      googletag.cmd.push(() => {
        googletag.pubads().refresh();
      });
    },
    // 拼团购买
    cardGroup(params) {
      this.submitting = 1;
      this.$api.card_group(params).then(res => {
        this.submitting = 0;
        if (res.status) {
          const { id, discount, goods_title } = res.data;
          this.$router.push({ path: '/active/2021/grouplist', query: { group_id: id, save_money: discount, goods_title } });
        } else {
          this.$toast(res.message);
        }
      });
    }
  },
  beforeMount() {
    this.setAdLoad({ name: 'has_card_ad', val: false });
  },
  mounted() {
    this.getCoupon();
    this.setTabBar('card');
    if (this.show_card_id) {
      this.clickCard(this.show_card_id, this.card_data[`_${this.show_card_id}`]);
    }
    // 获取是否有机会
    if (this.is_lgn) {
      this.getUserAllInfo().then(() => {
        this.initGoogleAd();
      });
    } else {
      this.initGoogleAd();
    }
  },
  watch: {
    is_lgn() {
      if (this.is_lgn) {
        this.initGoogleAd();
      }
    },
    has_card_ad() {
      this.cardAdReady();
    },
    tab() {
      this.$router.push(`/cards?t=${this.tab}`);
    }
  }
};
</script>
