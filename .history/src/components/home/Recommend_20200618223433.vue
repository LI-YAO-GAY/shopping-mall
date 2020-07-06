<template>
  <div>
    <div>商品推荐</div>
    <div v-for="item in recommend" :key="item.id">
      <div>
        <div>
          <img :src="item.image" alt />
        </div>
        <div>{{item.goodsName}}</div>
        <span>{{item.mallPrice}}</span>
        <span>{{item.Price}}</span>
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