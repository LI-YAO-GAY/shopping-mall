<template>
  <div>
    <div class="main">
      <div>重庆</div>
      <input type="text">
      <div>搜索</div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.main {
  width: 100%;
  background: rgb(242,242,242);
}
</style>