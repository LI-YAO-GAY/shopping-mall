<template>
  <div>
    <div>商品推荐</div>
    <div class="flex">
    <div v-for="item in recommend" :key="item.id">
      <div class="flex">
        <div>
          <img :src="item.image" class="w100p" />
        </div>
        <div>{{item.goodsName}}</div>
        <span>{{item.mallPrice}}</span>
        <span>{{item.Price}}</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    recommend: {
      type: Array
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>