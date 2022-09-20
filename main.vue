<template>
  <div class="active-2020-gift" @click="receive">
  
      <div class="footer">
          <div class="footer-txt">
              {{name}}
          </div>
      </div>
      <div class="model" v-if="show">
          <div class="model-body">
              <img  src="~assets/images/active/2020/gift/discount.png" />
              <div class="close" @click.stop="close"></div>
          </div>
      </div>
  </div>
</template>

<script>

import luckyInfo from "~/components/mobileGame/prepaid/luckyInfo";

export default {
 asyncData({store}){
  const access_token = store.state.user.access_token;
   return{
       access_token,
   }
 },
 data() {
     return{
         show:false,
     }
 },
 computed:{
     name(){
         return this.access_token ? '立即領取使用' :'立即登入領取'
     }
 },
 methods:{
     receive(){
        if(this.show) return;
         this.coupon();
         this.$router.push('3333')
     },
     coupon(){
         this.$axios.get('activity/get_game_voucher').then((res)=>{
           const {code,message} = res.data
           if(code == 200){
              this.$gtmClickEvent(['領券數', '領券數'])
              this.show = true;
           }else{
             this.$toast(message)
           }
         })
     },
     close(){
         this.show = false;
         this.$toast("恭喜你獲得20元折價券，請至《劍靈：革命》使用")
     }
 },
 mounted(){
  this.$gtmClickEvent(['獨立訪客數', '獨立訪客數'])
 }
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/active/2020/gift.styl' 
</style>