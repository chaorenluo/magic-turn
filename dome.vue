<template>
  <div class="cn-realname-page" :class="{'in-app': isApp}">
    <van-nav-bar v-if="!isApp;" title="大陸會員實名認證" left-arrow :z-index="15;" @click-left="$goBack('/my')">
      <common-nav slot="right">
    </common-nav></van-nav-bar>
    <div v-if="state.loading;" class="md-bk">
      <van-loading class="center-block txt-center">
    </van-loading></div>
    <template v-else>
      <van-steps v-if="state.step <= 2;" :active="state.step;">
        <van-step>上傳證件</van-step>
        <van-step>確認信息</van-step>
        <van-step>人臉識別</van-step>
      </van-steps>

      <div v-if="state.step == 0;" class="step1">
        <van-uploader v-model="state.back_file;" class="mt50" :before-read="() => beforeRead('back');" :after-read="file => fileRead(file, 'back');" :max-count="1;" @delete="fileDelete('back')">
          <div class="touch-uploader example back-example">
            <div class="mask">
            <van-icon name="photograph">
            <p class="white txt-center addition-txt">拍照建議使用白色背景</p>
          </van-icon></div>
        </div></van-uploader>
        <p class="mt10 txt-center">身份證人像面</p>

        <van-uploader v-model="state.front_file;" class="mt60" :before-read="() => beforeRead('front');" :after-read="file => fileRead(file, 'front');" :max-count="1;" @delete="fileDelete('front')">
          <div class="touch-uploader example front-example">
            <div class="mask">
            <van-icon name="photograph">
            <p class="white txt-center addition-txt">拍照建議使用白色背景</p>
          </van-icon></div>
        </div></van-uploader>
        <p class="mt10 txt-center">身份證國徽面</p>

        <div class="btn-line mt60">
          <van-button type="primary" size="large" @click="doStep1">下一步</van-button>
        </div>
      </div>

      <div v-else-if="state.step == 1;" class="step2">
        <van-field v-model="state.form.cert_name;" label="姓名" placeholder="身份證姓名" clearable :error-message="state.name_error;" @blur="checkName" @focus="name_error = '';">

        <van-field class="sex-line" label="性別" :error-message="state.sex_error;">
          <div slot="input">
            <label class="com-radio">
              <input v-model="state.form.cert_gender;" type="radio" value="man;"><span>男</span>
            </label>
            <label class="com-radio ml30">
              <input v-model="state.form.cert_gender;" type="radio" value="woman;"><span>女</span>
            </label>
          </div>
        </van-field>

        <van-field v-model="state.form.cert_no;" label="身份證號碼" placeholder="身份證號碼" maxlength="18" clearable :error-message="state.id_error;" @blur="checkID" @focus="id_error = '';">

        <div class="btn-line flex justify-around mt60">
          <van-button class="mr20" size="large" :disabled="state.submitting;" @click="step = 0;">上一步</van-button>
          <van-button class="ml20" :loading="state.submitting;" type="primary" size="large" :disabled="!can_step2;" @click="doStep2">下一步</van-button>
        </div>
      </van-field></van-field></div>

      <div v-else-if="state.step == 2;" class="step3">
        <div class="txt-center mt60 fs30">請點擊下方按鈕進行人臉驗證</div>
        <div class="btn-line mt60">
          <van-button :loading="state.submitting;" size="large" @click="doQrcode">人臉驗證</van-button>
        </div>
      </div>

      <div v-else-if="state.step == 3;" class="state-step step4">
        <div class="red mt60 fs30 flex justify-center align-center">
          <van-icon name="clear">驗證失敗
        </van-icon></div>
        <p class="red mt20 txt-center">人臉驗證失敗，請重新嘗試</p>
        <div class="btn-line mt60">
          <van-button type="primary" size="large" @click="step = 0">立即刷新</van-button>
        </div>
      </div>

      <div v-else-if="state.step == 4;" class="state-step step5">
        <div class="mt60 fs30 flex justify-center align-center">
          <van-icon name="warning" class="blue">您今日已多次人臉驗證失敗
        </van-icon></div>
        <p class="mt20 txt-center">請改天再嘗試或聯絡客服處理</p>
        <div class="btn-line mt60">
          <van-button type="primary" size="large" @click="openCustomIM">聯絡客服</van-button>
        </div>
      </div>

      <div v-else-if="state.step == 5;" class="state-step step6">
        <van-cell-group>
          <van-cell :border="false;">
            <div class="mt40 mb40 fs30 flex justify-center align-center">
              <van-icon name="checked" class="green">實名認證成功
            </van-icon></div>
          </van-cell>
          <van-cell title="姓名" :value="state.auth_data.cert_name;">
          <van-cell title="性別" :value="state.auth_data.cert_gender;">
          <van-cell title="身份證號碼" :value="state.auth_data.cert_no;">
        </van-cell></van-cell></van-cell></van-cell-group>
      </div>

      <div v-else-if="state.step == 6;" class="state-step step6">
        <van-cell-group :border="false;">
          <van-cell :border="false;">
            <div class="mt40 fs30 flex justify-center align-center">
              <van-icon name="info" class="blue">等待客服審核
            </van-icon></div>
          </van-cell>
          <van-cell :border="false;"> <p class="fc999 txt-center">您已提交寶名認證申請</p> </van-cell>
          <van-cell :border="false;"> <p class="fc999">8591客服將於<span class="orange">1個工作日</span>內聯絡您的註冊手機進行確認，請保持手機暢通；若需加急請<span class="orange cursor" @click="openCustomIM">點此聯絡客服</span></p> </van-cell>
        </van-cell-group>
      </div>
    </template>
    <load-script src="https://cn-shanghai-aliyun-cloudauth.oss-cn-shanghai.aliyuncs.com/web_sdk_js/jsvm_all.js" tag_name="face_auth" @loaded="scriptLoaded">
  </load-script></div>
</template>
<script setup>
import {computed,getCurrentInstance} from "vue";

import commonNav from '~/components/public/commonNav';
import inApp from '~/mixin/inApp';
import Compressor from 'compressorjs';
import loadScript from "~/components/plugin/loadScript";
import dayjs from "dayjs";
import { checkCnName, checkCnID } from '~/utils/utils';

const state = reactive({
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
});
const can_step1 = computed(() => {
if (state.form.cert_name && state.form.cert_gender && state.form.cert_no && state.form.cert_back_url && state.form.cert_front_url) {
  return true;
}

return false;
})
const can_step2 = computed(() => {
if (state.form.cert_name && !state.name_error && state.form.cert_no && !state.id_error && state.form.cert_gender && !state.submitting) {
  return true;
}

return false;
})
const fileDelete = (type) => {
state[`${type}_file`].s3 = [];
state[`cert_${type}_url`].s6 = '';
getCurrentInstance().setupState[`cert_${type}_url`].s4();

if (type == 'back') {
  state.form.cert_name = '';
  state.form.cert_no = '';
  state.form.cert_gender = '';
  state.form.meta_info = '';
  state.form.cert_back_url = '';
} else {
  state.form.cert_front_url = '';
}
}
const beforeRead = (type) => {
if (state[`${type}_file`][0] && state[`${type}_file`][0].status == 'uploading') {
  $toast('您有圖檔正在上傳，請稍後唷');
  return false;
}

return true;
}
const fileRead = (file,type) => {
file.status = 'uploading';
file.message = '處理中'; // 图片小于1m，不进行压缩

if (file.file.size < 1048576) {
  uploadReadData(file.file, type);
  return;
}

new Compressor(file.file, {
  quality: 0.5,
  success: result => {
    result = new window.File([result], result.name);
    uploadReadData(result, type);
  }
});
}
const uploadReadData = (file,type) => {
const formData = new FormData();
formData.append('image', file);
formData.append('type', type);
const res = await $cnapi.auth_upload(formData);

if (res.status != 200) {
  $toast(res.statusText);
  return;
}

const {
  code,
  data,
  message
} = res.data;
state[`${type}_file`][0].status = 'done';

if (code != 200) {
  $toast(message);
  return;
}

const {
  ocr_result = {},
  uri
} = data;
state.form[`cert_${type}_url`] = uri;

if (type == 'back') {
  const {
    name,
    number,
    gender
  } = ocr_result;

  if (!name || !number || !gender) {
    $toast('證件信息無法識別，請更換一張身份證人像面照片重新上傳');
    return;
  }

  state.form.cert_name = ocr_result.name;
  state.form.cert_no = ocr_result.number;
  state.form.cert_gender = sex_data[ocr_result.gender];
  state.birthday = ocr_result.number.substring(6, 14);
}
}
const checkName = () => {
if (state.form.cert_name.length > 1 && !checkCnName(state.form.cert_name)) {
  state.name_error = '';
} else {
  state.name_error = '姓名格式有誤，請檢查！';
}
}
const checkID = () => {
if (state.form.cert_no.length > 1 && checkCnID(state.form.cert_no)) {
  state.id_error = '';
} else {
  state.id_error = '身份證格式有誤，請檢查！';
}
}
const doStep1 = () => {
$toast('因站臺技術原因，暫時無法進行實名認證。如有疑問，請聯絡客服。');
return;

if (!state.form.cert_back_url) {
  $toast('請上傳身份證人像面');
  return;
}

if (!state.form.cert_front_url) {
  $toast('請上傳身份證國徽面');
  return;
}

if (!can_step1.value) {
  $toast('證件信息無法識別，請重新上傳');
  return;
}

checkID();
checkName();
state.step = 1;
}
const over16YearsOld = () => {
const year_16 = dayjs().subtract(18, 'year').format('YYYYMMDD');

if (year_16 - state.birthday >= 0) {
  return true;
}

return false;
}
const doStep2 = () => {
if (!can_step2.value) {
  return;
}

if (!over16YearsOld()) {
  $dialog.alert({
    title: '温馨提示',
    message: '根據國家法律規定，網絡平台不允許向未滿18周歲的未成年人提供服務，敬請諒解。'
  }).then(() => {});
  return;
}

state.submitting = true;
const res = await $cnapi.auth_creat(state.form);
state.submitting = false;

if (res.status != 200) {
  $toast(res.statusText);
  return;
}

const {
  code,
  data,
  message
} = res.data;

if (code != 200) {
  $dialog.alert({
    title: '温馨提示',
    message
  }).then(() => {});
  return;
}

state.qrcode_data = data.url;
state.step = 2;
loopCheck();
}
const doQrcode = () => {
window.open(state.qrcode_data, '_blank');
}
const loopCheck = () => {
const res = await $cnapi.auth_finish();

if (res.status != 200) {
  $toast(res.statusText);
  return;
}

const {
  code,
  data
} = res.data;

if (code == 200) {
  getData();
} else if (code != 200 && data && data.length) {
  state.step = 3;
} else {
  setTimeout(() => {
    loopCheck();
  }, 5000);
}
}
const openCustomIM = () => {
if (common.customer_active == 0) {
  $toast('在線客服維護中');
  return;
}

customIM(true);
}
const scriptLoaded = () => {
state.face_loaded = true;

if (window.getMetaInfo) {
  state.form.meta_info = getMetaInfo();
}
}
const getData = () => {
state.loading = true;
const res = await $cnapi.auth_index();
state.loading = false;

if (res.status != 200) {
  $toast(res.statusText);
  return;
}

const {
  code,
  data,
  message
} = res.data;

if (code != 200) {
  $toast(message);
  return;
}

const {
  cert_gender,
  cert_name,
  cert_no,
  finish,
  is_overflow
} = data;

if (finish == 2) {
  state.step = 6;
} else if (finish == 1) {
  state.step = 5;
  state.auth_data = {
    cert_gender,
    cert_name,
    cert_no
  };
} else if (is_overflow) {
  state.step = 4;
} else {
  state.step = 0;
}
}
onMounted(() => {
getData();
})

</script>