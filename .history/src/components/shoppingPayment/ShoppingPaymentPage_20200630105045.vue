<template>
  <div>
    <Top>
      <template v-slot:default>订单结算</template>
    </Top>
    <div>
    <van-icon name="location-o" size="20px" />
    <div><img src="../../assets/caitiao.jpg" alt="" class="w100p"></div>
    </div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import Top from "../top/Top";
export default {
  name: "",
  props: {},
  components: {
    Top
  },
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