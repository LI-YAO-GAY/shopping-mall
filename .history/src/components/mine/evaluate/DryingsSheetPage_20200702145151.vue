<template>
  <div>
    <Top>
      <template v-slot:default>评价中心</template>
    </Top>
    <van-card
      desc="描述信息"
      title="商品评分"
      :thumb=Item.image_path
    />
  </div>
</template>

<script>
import Top from "../../top/Top";
export default {
  name: "",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      Item: {}
    };
  },
  methods: {},
  mounted() {
    this.Item = this.$route.query.item;
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.van-card:not(:first-child){
  margin: 0px;
}
</style>