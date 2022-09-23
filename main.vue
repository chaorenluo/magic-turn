<template>
    <div class="cn-realname-page" :class="{'in-app': isApp}">
      <van-nav-bar v-if="!isApp" title="大陸會員實名認證" left-arrow :z-index="15" @click-left="$goBack('/my')">
        <common-nav slot="right" />
      </van-nav-bar>
      <div v-if="loading" class="md-bk">
        <van-loading class="center-block txt-center" />
      </div>
      <template v-else>
        <van-steps v-if="step <= 2" :active="step">
          <van-step>上傳證件</van-step>
          <van-step>確認信息</van-step>
          <van-step>人臉識別</van-step>
        </van-steps>
  
        <div v-if="step == 0" class="step1">
          <van-uploader v-model="back_file" class="mt50" :before-read="() => beforeRead('back')" :after-read="(file) => fileRead(file, 'back')" :max-count="1" @delete="fileDelete('back')">
            <div class="touch-uploader example back-example">
              <div class="mask" />
              <van-icon name="photograph" />
              <p class="white txt-center addition-txt">拍照建議使用白色背景</p>
            </div>
          </van-uploader>
          <p class="mt10 txt-center">身份證人像面</p>
  
          <van-uploader v-model="front_file" class="mt60" :before-read="() => beforeRead('front')" :after-read="(file) => fileRead(file, 'front')" :max-count="1" @delete="fileDelete('front')">
            <div class="touch-uploader example front-example">
              <div class="mask" />
              <van-icon name="photograph" />
              <p class="white txt-center addition-txt">拍照建議使用白色背景</p>
            </div>
          </van-uploader>
          <p class="mt10 txt-center">身份證國徽面</p>
  
          <div class="btn-line mt60">
            <van-button type="primary" size="large" @click="doStep1">下一步</van-button>
          </div>
        </div>
  
        <div v-else-if="step == 1" class="step2">
          <van-field v-model="form.cert_name" label="姓名" placeholder="身份證姓名" clearable :error-message="name_error" @blur="checkName" @focus="name_error = '';" />
  
          <van-field class="sex-line" label="性別" :error-message="sex_error">
            <div slot="input">
              <label class="com-radio">
                <input v-model="form.cert_gender" type="radio" value="man"><span>男</span>
              </label>
              <label class="com-radio ml30">
                <input v-model="form.cert_gender" type="radio" value="woman"><span>女</span>
              </label>
            </div>
          </van-field>
  
          <van-field v-model="form.cert_no" label="身份證號碼" placeholder="身份證號碼" maxlength="18" clearable :error-message="id_error" @blur="checkID" @focus="id_error = '';" />
  
          <div class="btn-line flex justify-around mt60">
            <van-button class="mr20" size="large" :disabled="submitting" @click="step = 0;">上一步</van-button>
            <van-button class="ml20" :loading="submitting" type="primary" size="large" :disabled="!can_step2" @click="doStep2">下一步</van-button>
          </div>
        </div>
  
        <div v-else-if="step == 2" class="step3">
          <div class="txt-center mt60 fs30">請點擊下方按鈕進行人臉驗證</div>
          <div class="btn-line mt60">
            <van-button :loading="submitting" size="large" @click="doQrcode">人臉驗證</van-button>
          </div>
        </div>
  
        <div v-else-if="step == 3" class="state-step step4">
          <div class="red mt60 fs30 flex justify-center align-center">
            <van-icon name="clear" />驗證失敗
          </div>
          <p class="red mt20 txt-center">人臉驗證失敗，請重新嘗試</p>
          <div class="btn-line mt60">
            <van-button type="primary" size="large" @click="step = 0">立即刷新</van-button>
          </div>
        </div>
  
        <div v-else-if="step == 4" class="state-step step5">
          <div class="mt60 fs30 flex justify-center align-center">
            <van-icon name="warning" class="blue" />您今日已多次人臉驗證失敗
          </div>
          <p class="mt20 txt-center">請改天再嘗試或聯絡客服處理</p>
          <div class="btn-line mt60">
            <van-button type="primary" size="large" @click="openCustomIM">聯絡客服</van-button>
          </div>
        </div>
  
        <div v-else-if="step == 5" class="state-step step6">
          <van-cell-group>
            <van-cell :border="false">
              <div class="mt40 mb40 fs30 flex justify-center align-center">
                <van-icon name="checked" class="green" />實名認證成功
              </div>
            </van-cell>
            <van-cell title="姓名" :value="auth_data.cert_name" />
            <van-cell title="性別" :value="auth_data.cert_gender" />
            <van-cell title="身份證號碼" :value="auth_data.cert_no" />
          </van-cell-group>
        </div>
  
        <div v-else-if="step == 6" class="state-step step6">
          <van-cell-group :border="false">
            <van-cell :border="false">
              <div class="mt40 fs30 flex justify-center align-center">
                <van-icon name="info" class="blue" />等待客服審核
              </div>
            </van-cell>
            <van-cell :border="false"> <p class="fc999 txt-center">您已提交寶名認證申請</p> </van-cell>
            <van-cell :border="false"> <p class="fc999">8591客服將於<span class="orange">1個工作日</span>內聯絡您的註冊手機進行確認，請保持手機暢通；若需加急請<span class="orange cursor" @click="openCustomIM">點此聯絡客服</span></p> </van-cell>
          </van-cell-group>
        </div>
      </template>
      <load-script src="https://cn-shanghai-aliyun-cloudauth.oss-cn-shanghai.aliyuncs.com/web_sdk_js/jsvm_all.js" tag_name="face_auth" @loaded="scriptLoaded" />
    </div>
</template>
  <script>
 
  import commonNav from '~/components/public/commonNav';
  import inApp from '~/mixin/inApp';
  import Compressor from 'compressorjs';
  import loadScript from "~/components/plugin/loadScript";
  import dayjs from "dayjs";
  import { checkCnName, checkCnID } from '~/utils/utils';
  const sex_data = { 男: 'man', 女: 'woman' };
  
  export default {
  
    data() {
      return {
        loading: true,
        submitting: false,
        face_loaded: false,
        step: 0,
  
        name_error: '',
        sex_error: '',
        id_error: '',
        birthday: '',
  
        qrcode_data: '',
        front_file: [],
        back_file: [],
  
        form: {
          cert_front_url: '',
          cert_back_url: '',
          cert_name: '',
          cert_no: '',
          cert_gender: '',
          meta_info: ''
        },
        auth_data: {
          cert_gender: '',
          cert_name: '',
          cert_no: ''
        }
      };
    },
    computed: {
    
      can_step1() {
        if (this.form.cert_name && this.form.cert_gender && this.form.cert_no && this.form.cert_back_url && this.form.cert_front_url) {
          return true;
        }
        return false;
      },
      can_step2() {
        if (this.form.cert_name && !this.name_error && this.form.cert_no && !this.id_error && this.form.cert_gender && !this.submitting) {
          return true;
        }
        return false;
      }
    },
    methods: {
      fileDelete(type) {
        this[`${type}_file`] = [];
        this[`cert_${type}_url`] = '';
        if (type == 'back') {
          this.form.cert_name = '';
          this.form.cert_no = '';
          this.form.cert_gender = '';
          this.form.meta_info = '';
          this.form.cert_back_url = '';
        } else {
          this.form.cert_front_url = '';
        }
      },
      beforeRead(type) {
        if (this[`${type}_file`][0] && this[`${type}_file`][0].status == 'uploading') {
          this.$toast('您有圖檔正在上傳，請稍後唷');
          return false;
        }
        return true;
      },
      fileRead(file, type) {
        file.status = 'uploading';
        file.message = '處理中';
        // 图片小于1m，不进行压缩
        if (file.file.size < 1048576) {
          this.uploadReadData(file.file, type);
          return;
        }
        new Compressor(file.file, {
          quality: 0.5,
          success: (result) => {
            result = new window.File([result], result.name);
            this.uploadReadData(result, type);
          }
        });
      },
      async uploadReadData(file, type) {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('type', type);
        const res = await this.$cnapi.auth_upload(formData);
        if (res.status != 200) {
          this.$toast(res.statusText);
          return;
        }
        const { code, data, message } = res.data;
        this[`${type}_file`][0].status = 'done';
        if (code != 200) {
          this.$toast(message);
          return;
        }
        const { ocr_result = {}, uri } = data;
        this.form[`cert_${type}_url`] = uri;
  
        if (type == 'back') {
          const { name, number, gender } = ocr_result;
          if (!name || !number || !gender) {
            this.$toast('證件信息無法識別，請更換一張身份證人像面照片重新上傳');
            return;
          }
          this.form.cert_name = ocr_result.name;
          this.form.cert_no = ocr_result.number;
          this.form.cert_gender = sex_data[ocr_result.gender];
          this.birthday = ocr_result.number.substring(6, 14);
        }
      },
      checkName() {
        if (this.form.cert_name.length > 1 && !checkCnName(this.form.cert_name)) {
          this.name_error = '';
        } else {
          this.name_error = '姓名格式有誤，請檢查！';
        }
      },
  
      checkID() {
        if (this.form.cert_no.length > 1 && checkCnID(this.form.cert_no)) {
          this.id_error = '';
        } else {
          this.id_error = '身份證格式有誤，請檢查！';
        }
      },
  
      doStep1() {
        this.$toast('因站臺技術原因，暫時無法進行實名認證。如有疑問，請聯絡客服。');
        return;
        if (!this.form.cert_back_url) {
          this.$toast('請上傳身份證人像面');
          return;
        }
        if (!this.form.cert_front_url) {
          this.$toast('請上傳身份證國徽面');
          return;
        }
        if (!this.can_step1) {
          this.$toast('證件信息無法識別，請重新上傳');
          return;
        }
  
        this.checkID();
        this.checkName();
        this.step = 1;
      },
      over16YearsOld() {
        const year_16 = dayjs().subtract(18, 'year').format('YYYYMMDD');
        if (year_16 - this.birthday >= 0) {
          return true;
        }
        return false;
      },
      async doStep2() {
        if (!this.can_step2) {
          return;
        }
        if (!this.over16YearsOld()) {
          this.$dialog.alert({
            title: '温馨提示',
            message: '根據國家法律規定，網絡平台不允許向未滿18周歲的未成年人提供服務，敬請諒解。'
          }).then(() => {});
          return;
        }
        this.submitting = true;
        const res = await this.$cnapi.auth_creat(this.form);
        this.submitting = false;
        if (res.status != 200) {
          this.$toast(res.statusText);
          return;
        }
        const { code, data, message } = res.data;
        if (code != 200) {
          this.$dialog.alert({
            title: '温馨提示',
            message
          }).then(() => {});
          return;
        }
        this.qrcode_data = data.url;
        this.step = 2;
        this.loopCheck();
      },
      doQrcode() {
        window.open(this.qrcode_data, '_blank');
      },
      async loopCheck() {
        const res = await this.$cnapi.auth_finish();
        if (res.status != 200) {
          this.$toast(res.statusText);
          return;
        }
        const { code, data } = res.data;
  
        if (code == 200) {
          this.getData();
        } else if (code != 200 && data && data.length) {
          this.step = 3;
        } else {
          setTimeout(() => {
            this.loopCheck();
          }, 5000);
        }
      },
      openCustomIM() {
        if (this.common.customer_active == 0) {
          this.$toast('在線客服維護中');
          return;
        }
        this.customIM(true);
      },
      scriptLoaded() {
        this.face_loaded = true;
        if (window.getMetaInfo) {
          this.form.meta_info = getMetaInfo();
        }
      },
      async getData() {
        this.loading = true;
        const res = await this.$cnapi.auth_index();
        this.loading = false;
        if (res.status != 200) {
          this.$toast(res.statusText);
          return;
        }
        const { code, data, message } = res.data;
        if (code != 200) {
          this.$toast(message);
          return;
        }
  
        const { cert_gender, cert_name, cert_no, finish, is_overflow } = data;
  
        if (finish == 2) {
          this.step = 6;
        } else if (finish == 1) {
          this.step = 5;
          this.auth_data = { cert_gender, cert_name, cert_no };
        } else if (is_overflow) {
          this.step = 4;
        } else {
          this.step = 0;
        }
      }
    },
    mounted() {
      this.getData();
    }
  };
  </script>
  
