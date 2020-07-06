<template>
  <div>
    <Top>
      <template v-slot:default>地址管理</template>
    </Top>
    <div>
    <div>暂无收货地址~~</div>
    <div class="addAddress">新增地址</div>
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
  background: rgb(255,68,68);
  height: 50px;
}
</style>