<template>
  <div>
    <div class="main flex a-center j-around p-tb-10">
      <form action="/">
        <van-search v-model="value" show-action placeholder="请输入搜索关键词" background="#F2F2F2" @search="onSearch">
          <template #action>
            <div @click="onSearch" class="m-l-20">搜索</div>
          </template>
          <template #left>
            <div @click="onCity" >重庆</div>
            <van-icon name="arrow-down"  class="m-r-20"/>
          </template>
        </van-search>
      </form>
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
    onCity(val) {
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
  position: fixed;
  top: 0;
  z-index: 999;
}
.van-search__content {
  background: #fff;
}
.van-search {
  padding: 0;
}
</style>