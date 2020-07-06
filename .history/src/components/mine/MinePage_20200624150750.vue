<template>
  <div>
    <div class="main">
      <div class="flex j-center m-tb-10">会员中心</div>
      <div class="banner flex a-column a-center j-center">
        <div class="m-t-10 relative setting">
          <van-icon name="setting-o" size="20px" @click="setting"/>
        </div>
        <van-image
          round
          width="4rem"
          height="4rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          class="m-t-30"
        />
        <div class="m-tb-10 F18 fw-600 color-999">欢迎您:{{userInfo.nickname}}</div>
        <div class="m-b-30 F14 color-999">
          <div v-if="flag === false" @click="login">未登录</div>
          <div v-if="flag === true" @click="quit">退出登录</div>
        </div>
      </div>
      <div>
        <van-grid :column-num="5" :border="false">
          <van-grid-item icon="cash-back-record" text="待付款" dot />
          <van-grid-item icon="free-postage" text="待发货" badge="99+" />
          <van-grid-item icon="points" text="待收货" badge="99+" />
          <van-grid-item icon="thumb-circle-o" text="评价" badge="99+" />
          <van-grid-item icon="points" text="已完成" badge="99+" />
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
import { Dialog } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      user: "",
      userInfo: {},
      flag: false
    };
  },
  methods: {
    quit() {
      Dialog.confirm({
        message: "亲，您确认要退出吗？"
      })
        .then(() => {
          localStorage.removeItem("user");
          this.userInfo = "";
          this.flag = false;
          //  localStorage.clear();
        })
        .catch(() => {
          // on cancel
        });
    },
    login() {
      this.$router.push("/login");
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    // console.log(this.user.userInfo.nickname);
    this.userInfo = this.user.userInfo;
    if (this.user !== null) {
      this.flag = true;
    } else if (this.user === null) {
      this.flag = false;
    }
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
.setting {
  left: 170px;
}
</style>