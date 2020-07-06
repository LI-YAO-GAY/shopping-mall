<template>
  <div>
    <div class="main">
      <div class="flex j-center m-tb-10">会员中心</div>
      <div class="banner flex a-column a-center j-center">
        <van-image
          round
          width="5rem"
          height="5rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          class="m-t-40"
        />
        <div class="m-tb-10 F20 fw-600 color-666">欢迎您:</div>
        <div class="m-b-40 F14 color-666">退出登录</div>
      </div>

      <div>
      <van-tabbar >
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>
      </div>

      <div class="flex a-center j-between p-tb-15 p-lr-10 all">
        <div class="flex a-center">
          <van-icon name="records" class="m-r-5" />全部订单
        </div>
        <van-icon name="arrow" />
      </div>
      <div class="flex a-center j-between p-tb-15 p-lr-10 all m-t-20">
        <div class="flex a-center">
          <van-icon name="star-o" class="m-r-5" />收藏商品
        </div>
        <van-icon name="arrow" />
      </div>
      <div class="flex a-center j-between p-tb-15 p-lr-10 all">
        <div class="flex a-center">
          <van-icon name="location-o" class="m-r-5" />地址管理
        </div>
        <van-icon name="arrow" />
      </div>
      <div class="flex a-center j-between p-tb-15 p-lr-10 all">
        <div class="flex a-center">
          <van-icon name="eye-o" class="m-r-5" />最近浏览
        </div>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
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
.banner {
  background: linear-gradient(
    to top,
    rgb(136, 206, 240),
    rgb(235, 236, 238),
    rgb(255, 255, 255),
    rgb(235, 236, 238),
    rgb(136, 206, 240)
  );
}
.all {
  border-top: 1px solid rgb(248, 248, 250);
  border-bottom: 1px solid rgb(248, 248, 250);
}
</style>