
<template>
  <!-- 購買指引 -->
  <div v-if="show_guide" class="buy-course">
    <a class="how-to-buy" href="javascript:;" @click="buy_popup.show = true">如何購買？</a>
    <van-popup
      v-model="buy_popup.show"
      closeable
      close-icon="close"
      position="bottom"
      :style="{height: '90%'}"
      class="buy-course__popup"
    >
      <div class="van-action-sheet__header">購物幫助</div>
      <div class="container">
        <div class="md-tle md-tle-desc">
          常見問答
        </div>
        <div class="row">
          <div class="problem">
            1、第一次使用8591，如何支付呢？
          </div>
          <template v-if="common.geo_ip_code != 'CN'">
            <div class="answer" :class="{'ellipsis-box ellipsis-one-clamp': collapse.course_1}">
              您可選擇以下支付方式（點擊查看教學）{{ collapse.course_1 ? '...' : '' }}
              <div class="flex-box wrap payway">
                <nuxt-link v-for="(item, i) in pay_list" :key="`pay_method_${i}`" :to="`/pay/tutorial?type=${item.icon}`" class="blue">
                  <i :class="`pay-icon pay-sm-icon pay-sm-${item.icon}`" />
                  {{ item.name }}
                </nuxt-link>
              </div>
            </div>
            <a v-show="collapse.course_1" class="blue show-answer" data-type="支付方式" href="javascript:;" @click="collapse.course_1 = false">查看全部</a>
          </template>
          <template v-else>
            <div class="answer" :class="{'ellipsis-box ellipsis-one-clamp': collapse.course_1}">
              目前大陸用戶可使用<router-link class="blue" to="/pay/tutorial?type=alipay">【支付寶】</router-link>完成付款。
            </div>
          </template>
        </div>
        <div class="row">
          <div class="problem">
            2、什麼是開【專屬】？
          </div>
          <div class="answer" :class="{'ellipsis-box ellipsis-one-clamp': collapse.course_2}">
            【專屬】是賣家依據協商好的價格和商品開設給您的專屬賣場，該賣場只有您可購買哦~<br>
            開設成功後，您與賣家的聊天室內會有通知<br>
            <van-image lazy-load :src="require('~/assets/images/mall/course-03.png')" /><br><br>
            也可在【我的】>【我是買家】>【我的專屬】內找到。<br>
            <van-image lazy-load :src="require('~/assets/images/mall/course-01.png')" />
          </div>
          <a v-show="collapse.course_2" class="blue show-answer" data-type="开专属" href="javascript:;" @click="collapse.course_2 = false">查看全部</a>
        </div>
        <div class="row">
          <div class="problem">3、在8591平台交易安全嗎？</div>
          <div class="answer" :class="{'ellipsis-box ellipsis-one-clamp': collapse.course_3}">
            為保障交易安全，我們為您提供以下服務：<br>
            1）賣家：賣家全部實名制驗證，更有固話驗證、保證金等認證措施；<br><br>
            <van-image lazy-load :src="require('~/assets/images/mall/course-02.png')" /><br>
            2）資金：商品移交過程中，款項由第三方銀行保管，交易不成功，可及時退款；<br>
            3）售後：交易如遇糾紛，客服可及時介入處理，免除售後擔憂；<br>
          </div>
          <a v-show="collapse.course_3" class="blue show-answer" data-type="平台交易安全" href="javascript:;" @click="collapse.course_3 = false">查看全部</a>
        </div>
        <div class="md-tle md-tle-desc">
          購買流程
        </div>
        <div ref="" v-if="game_info" class="txt-center">
          <img v-if="game_info.type.id == 8" src="~/assets/images/mall/store-process.png">
          <img v-else src="~/assets/images/mall/process.png">
        </div>
        <div v-if="!user.access_token" class="row txt-right mt20">
          <nuxt-link class="blue login" to="/user/login">立即註冊/登錄</nuxt-link>
        </div>
      </div>
      <div class="van-hairline--top van-dialog__footer van-dialog__footer--buttons">
        <van-button size="large" :class="{'orange--text': buy_popup.is_help == 2}" square @click="isHelpful(2)">
          <van-icon v-if="buy_popup.is_help == 2" name="success" />無幫助
        </van-button>
        <van-button size="large" :class="{'orange--text': buy_popup.is_help == 1}" square @click="isHelpful(1)">
          <van-icon v-if="buy_popup.is_help == 1" name="success" />有幫助
        </van-button>
      </div>
    </van-popup>

    <van-dialog
      v-model="feedback_dialog.show"
      title="意見反饋"
      message-align="left"
      :before-close="buyFeedback"
      confirm-button-text="提交"
      show-cancel-button
      cancel-button-text="取消"
    >
      <div class="van-dialog__content terms-dialog">
        <div class="van-dialog__message van-dialog__message--has-title ">
          <van-field v-model="feedback_dialog.content" class="van-field_feedback" type="textarea" rows="3" autosize clearable placeholder="安安，告訴我您希望獲得的幫助啦~" maxlength="200" />
          <van-field v-if="!user.access_token" v-model="feedback_dialog.mobile" class="van-field_mobile" autosize clearable placeholder="還有聯絡電話啦~" maxlength="10" />
        </div>
      </div>
    </van-dialog>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import * as cookie from '~/utils/cookie';



export default {
   props: {
    now_sel: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  data() {
    const pp=123;
    return {
      buy_popup: {
        show: false,
        is_help: 0
      },
      show_guide: 0,
      feedback_dialog: {
        show: false,
        content: '',
        mobile: ''
      },
      pay_list: [
        { icon: 'ibon', name: '7-11超商付款' },
        { icon: 'family', name: '全家超商付款' },
        { icon: 'ok', name: 'OK超商付款' },
        { icon: 'life', name: '萊爾富超商付款' },
        { icon: 'atm', name: '實體ATM機台付款' }
      ],
      collapse: {
        course_1: true,
        course_2: true,
        course_3: true
      }
    };
  },
  computed: {
    ...mapState(['im']),
    ...mapGetters({
      appealTotal: 'appeal/appealTotal'
    }),
    game_info() {
      return this.mall.mall_info ? this.mall.mall_info.game_info : '';
    },
    msg1:{
        set(){  
          console.log('我被设置了')   //msg1设置值时此处触发 
        },
        get(){
          console.log('我被调用了') //msg1获取值时触发
          return 6         //这儿返回值将是msg1的值。
        }
      }
  },
  methods: {
    ...mapMutations({
      deletListData: 'transferData/deletListData',
      deletePageSetting: 'transferData/deletePageSetting'
    }),
    async isHelpful(payload) {
      // 一天只能反饋一次
      if (this.buy_popup.is_help > 0) {
        return;
      }
      console.log(this.$refs.ljm)
      console.log(this.$route)
      this.buy_popup.is_help = payload;
      cookie.set('mall-detail-guide', payload, { expires: 1 });
      this.$gtmClickEvent(['卖场详情页', '购买帮助', payload === 1 ? '有帮助' : '无帮助']);
      switch (payload) {
        case 1:
          this.$toast('感謝你的反饋');
          break;
        case 2:
          this.feedback_dialog.show = true;
          break;
      }
    },
    buyFeedback(action, done) {
      const feedback = '新用戶引導無幫助';
      if (action === 'confirm') {
        const { content, mobile } = this.feedback_dialog;
        if (!content) {
          this.$toast('請填寫您的寶貴建議再提交');
          done(false);
          return;
        }

        if (!this.user.access_token && !mobile) {
          this.$toast('請填寫您的聯絡電話唷~');
          done(false);
          return;
        }

        this.recordFeedback(feedback + '\r\n' + content, done);
      } else {
        // this.recordFeedback(feedback, done)
        done();
      }
    },
    recordFeedback(content, done) {
      const { mobile } = this.feedback_dialog;
      this.$store.dispatch('common/fetchFeedbackStore', { content, mobile }).then(res => {
        done();
        if (res.code === 200) {
          this.$toast('感謝您的反饋');
        } else {
          this.$toast(res.message);
        }
      });
    }
  },
  mounted() {
    this.buy_popup.is_help = this.$cookies.get('mall-detail-guide') || 0;
    this.show_guide = 1;

    // this.$store.dispatch('mall/fetchShowGuide').then(res => {
    //   const { code, data } = res;
    //   if (code === 200) {
    //     this.show_guide = data.showGuide;
    //     // this.show_guide = 1
    //   }
    // });
  },
  watch:{
    buy_popup(){
      console.log(this.buy_popup)
    },
    
    pay_list:{

      handler:function(oldV,newV){

          console.log(oldV);

      },

      deep:true

    },
    arr:function(oldV,newV){

      console.log(oldV);

      console.log(newV);     

      }
  }
};
</script>

