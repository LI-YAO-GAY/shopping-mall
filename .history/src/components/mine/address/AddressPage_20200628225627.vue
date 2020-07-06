<template>
  <div>
    <Top>
      <template v-slot:default>地址管理</template>
    </Top>
    <div>
    <div class="flex j-center m-t-40 fw-600 F20">暂无收货地址~~</div>
    <div class="addAddress flex a-center j-center color-fff">新增地址</div>
    </div>
    <div></div>
  </div>
</template>

<script>
import Top from '../../top/Top';
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
.addAddress{
  width: 100%;
  background: rgb(241, 110, 110);
  height: 50px;
  position: fixed;
  bottom:0px;
}
</style>