import * as localstorage from '@/utils/localstorage';

export default {
  methods: {
    getAid() {
      const { query } = this.$route;
      if (query.aid) {
        return query.aid;
      } else {
        return localstorage.get('reg-aid') || 0;
      }
    },
    setAid() {
      const { query } = this.$route;
      if (query.aid) localstorage.set('reg-aid', query.aid);
    }
  }
};
