import * as localstorage from '~/utils/localstorage';

export default {
  methods: {
    getTipStorage(payload) {
      const tooltip = localstorage.get('tooltip') || {};

      return !!tooltip[payload];
    },
    setTipStorage(payload) {
      const tooltip = localstorage.get('tooltip') || {};
      tooltip[payload] = 1;
      localstorage.set('tooltip', JSON.stringify(tooltip));
    }
  }
}
;
