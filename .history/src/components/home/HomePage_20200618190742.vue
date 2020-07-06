<template>
  <div>
    <div class="main flex a-center j-around">
      <div class="flex a-center">
        <div class="p-l-5">重庆</div>
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
  width: 100%;
  background: #f2f2f2;
}
.van-search__content {
  background: #fff;
}
</style>