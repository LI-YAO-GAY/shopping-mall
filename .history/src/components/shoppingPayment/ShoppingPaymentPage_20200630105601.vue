<template>
  <div>
    <Top>
      <template v-slot:default>订单结算</template>
    </Top>
    <div>
    <van-icon name="location-o" size="24px" />
    <div>收货人:</div>
    <div class="F14">收货地址:</div>
    <div class="F14 toast" >(收货不便时，可选择免费代收货服务)</div>
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
.toast{
  color: rgb(251,214,190);
}
</style>