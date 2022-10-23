
<template>
  <div class="latest-trade flex align-center">
    <b class="shrink0">最新成交</b>
    <span v-if="!data" class="ml-md fc3">加載中...</span>
    <slide-show v-else-if="list.length" class="ml-md">
      <li v-for="(v, i) in list" :key="i" class="flex justify-between align-center">
        <span class="flex1 ellipsis mr-md">
          【{{ v.game_name }}】{{ v.server }}-{{ v.goods_type }}
        </span>
        <span v-show="cn_price_tag  || user.name" class="orange shrink0 price">{{ cn_price_tag }}  {{user}} {{ number_format(v.order_amount) }}</span>
      </li>
    </slide-show>
  </div>
</template>

<script>
import { number_format } from '~/utils/utils';
import slideShow from "~/components/plugin/slideShow";
import { mapGetters,mapState } from "vuex";

export default {
  props: ['data', 'type'],
  components: { slideShow },
  computed: {
    ...mapState(['user']),
    ...mapGetters({
      cn_price_tag: 'common/cn_price_tag'
    }),
    list() {
      if (this.data) {
        return this.data[this.type];
      }
      return [];
    }
  },
  methods: {
    number_format
  },
  mounted(){
    console.log(this.cn_price_tag,this.user)
  }
};
</script>
