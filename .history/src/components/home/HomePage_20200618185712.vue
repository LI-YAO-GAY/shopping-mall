<template>
  <div>
    <div class="main">
    <span>
    <span>重庆</span>
      <form action="/">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          background="#F2F2F2"
          @search="onSearch"
        />
      </form>
      </span>
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
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.main {
  width: 100%;
}
.van-search__content{
  background: #fff;
}
</style>