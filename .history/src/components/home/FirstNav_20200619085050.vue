<template>
  <div class="w100p">
    <div class="main flex a-center j-around p-tb-10">
      <div class="flex a-center">
        <div class="p-lr-5">重庆</div>
        <van-icon name="arrow-down" />
      </div>
      <form action="/">
        <van-search v-model="value" placeholder="请输入搜索关键词" background="#F2F2F2" @search="onSearch" />
      </form>
      <div class="p-r-5">搜索</div>
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
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.main {
  background: #f2f2f2;
  position: fixed;
  top:0;
  z-index: 999;
}
.van-search__content {
  background: #fff;
}
.van-search{
  padding: 0;
  width: 100%;
}
</style>