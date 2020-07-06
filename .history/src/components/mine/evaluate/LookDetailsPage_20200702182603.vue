<template>
  <div>
    <Top>
      <template v-slot:default>评价详情</template>
    </Top>
    <van-card thumb="../../../assets/ofjgw2-1kul.jpg">
      <template #title>
        <div class="m-t-10 F16 m-b-20 m-l-10">商品评分</div>
      </template>
      <template #desc>
        <van-rate
          v-model="value"
          :size="20"
          color="#ee0a24"
          void-icon="star"
          void-color="#eee"
          class="m-l-10"
          @change="onChange"
        />
      </template>
    </van-card>
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
      EvaluateItem: {}
    };
  },
  methods: {},
  mounted() {
    this.EvaluateItem = this.$route.query.item;
    this.EvaluateItem = JSON.parse(localStorage.getItem("EvaluateItem"));
    console.log(this.EvaluateItem);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>