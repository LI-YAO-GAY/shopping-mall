<template>
  <div>
    <Top>
      <template v-slot:default>订单结算</template>
    </Top>
    <!-- <div>
     
      <div >收货人:</div>
      <div class="F14">收货地址:</div>
      <div class="F14 toast">(收货不便时，可选择免费代收货服务)</div>
      <div>
        <img src="../../assets/caitiao.jpg" alt class="w100p" />
      </div>
    </div>
    -->
    <div class="top">
      <van-cell-group>
        <van-icon name="location-o" size="24px" />
        <van-cell title="收货人" value="内容" label="收货地址:" class="F18" />
        <div class="F14 toast">(收货不便时，可选择免费代收货服务)</div>
      </van-cell-group>
      <img src="../../assets/caitiao.jpg" alt class="w100p" />
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
  methods: {
    onSubmit() {}
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.toast {
  color: rgb(251, 214, 190);
}
.top {
  font-size: 0px;
}
</style>