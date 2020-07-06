<template>
  <div>
    <div class="main">
      <div class="flex j-center m-tb-10">会员中心</div>
      <div class="banner flex a-column a-center j-center">
        <van-image
          round
          width="4rem"
          height="4rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          class="m-t-30"
        />
        <div class="m-tb-10 F20 fw-600 color-666">欢迎您:{{user.nickname}}</div>
        <div class="m-b-30 F14 color-666">退出登录</div>
      </div>

      <div>
        <van-grid :column-num="5" :border="false">
          <van-grid-item icon="cash-back-record" text="待付款" dot />
          <van-grid-item icon="free-postage" text="待发货" badge="99+" />
          <van-grid-item icon="points" text="待收货" badge="99+" />
          <van-grid-item icon="thumb-circle-o" text="评价" badge="99+" />
          <van-grid-item icon="like-o" text="已完成" badge="99+" />
        </van-grid>
      </div>

      <div class="flex a-center j-between p-10 all">
        <div class="flex a-center">
          <van-icon name="records" class="m-r-5" />全部订单
        </div>
        <van-icon name="arrow" />
      </div>
      <div class="flex a-center j-between p-10 all m-t-20">
        <div class="flex a-center">
          <van-icon name="star-o" class="m-r-5" />收藏商品
        </div>
        <van-icon name="arrow" />
      </div>
      <div class="flex a-center j-between p-10 all">
        <div class="flex a-center">
          <van-icon name="location-o" class="m-r-5" />地址管理
        </div>
        <van-icon name="arrow" />
      </div>
      <div class="flex a-center j-between p-10 all">
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
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"))
  },
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