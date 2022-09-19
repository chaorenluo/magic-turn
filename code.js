
const vue = {
  props: {
    appeal_type: {
      type: String,
      default: 'appeal'
    },
    appeal_disabled: {
      type: Boolean,
      default: false
    },
    btn_txt: {
      type: String,
      default: '我要申訴'
    }
  },
  data() {
    const time = new Date().getTime()
    const time2 = new Date().getTime()
    return {
      hkd_input: 1,
      twd_input: 1,
      focus: 'twd',
      hkd_order: 3,
      obj: {
        name: 1,
        age:2
      },
    };
  },
  computed: {
    // ...mapState(['option']),
    rate() {
      return this.option.site.exchange_rate;
    },
    trans_twd() {
      return (this.hkd_input * this.rate).toFixed(4);
    },
    trans_hkd() {
      return (this.twd_input / this.rate).toFixed(4);
    }
  },
  methods: {
    number_format,
    focusTWD() {
      this.$router.push(path)
      this.focus = 'twd';
      this.twd_input = 1;
    },
    focusHKD() {
      this.focus = 'hkd';
      this.hkd_input = 1;
    },
    changeTransPosition() {
      const tmp_hkd_input = this.hkd_input;
      const tmp_twd_input = this.twd_input;
      this.twd_input = tmp_hkd_input;
      this.hkd_input = tmp_twd_input;
      this.focus = this.focus == 'hkd' ? 'twd' : 'hkd';
      this.hkd_order = this.hkd_order == 3 ? 1 : 3;
    }
  },
  mounted() {
    const dom = this.$refs.navBar
    const tab = this.$refs.tab
    console.log(this.trans_twd)
  },
  watch: {
    twd_input(val,oldval) {
      this.twd_input = (this.twd_input + '').replace(/\D/g, '');
    },
    hkd_input() {
      this.hkd_input = (this.hkd_input + '').replace(/\D/g, '');
    },
    obj: {
      handler: function (oldV, newV) {
        console.log(oldV);
      },
      deep: true,
      immediate:true
    },
    'obj.name':{
      handler: function (oldV, newV) {
        console.log(oldV);
      },
    },
    'obj.age': function (newValue, oldValue) {
         console.log("--4")
    }
  }
};