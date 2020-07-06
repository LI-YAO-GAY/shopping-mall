<template>
  <div>
    <div class="main">
      <div class="flex j-center p-tb-10">会员中心</div>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
        <div class="center">
          <div class="banner flex a-column a-center j-center">
            <div class="m-t-10 relative setting">
              <van-icon name="setting-o" size="20px" @click="setting" />
            </div>
            <van-image
              round
              width="4rem"
              height="4rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
              class="m-t-30"
            />
            <div>
              <div
                class="m-tb-10 F18 fw-600 color-999"
                v-if="userInfoChange"
              >欢迎1您:{{userInfoChange.nickname}}</div>
              <div class="m-tb-10 F18 fw-600 color-999" v-else>欢迎2您:{{userInfo.nickname}}</div>
            </div>
            <div class="m-b-30 F14 color-999">
              <div v-if="flag === false" @click="login">未登录</div>
              <div v-if="flag === true" @click="quit">退出登录</div>
            </div>
          </div>
          <div>
            <van-grid :column-num="5" :border="false">
              <van-grid-item icon="cash-back-record" text="待付款" dot />
              <van-grid-item icon="free-postage" text="待发货" />
              <van-grid-item icon="points" text="待收货" />
              <van-grid-item
                icon="thumb-circle-o"
                text="评价"
                :badge="count"
                @click="evaluate"
                v-if="TobeList.length>0"
              />
              <van-grid-item
                icon="thumb-circle-o"
                text="评价"
                @click="evaluate"
                v-if="TobeList.length===0"
              />
              <van-grid-item icon="points" text="已完成" @click="completed" />
            </van-grid>
          </div>
          <div class="flex a-center j-between p-10 all" @click="order">
            <div class="flex a-center">
              <van-icon name="records" class="m-r-5" />全部订单
            </div>
            <van-icon name="arrow" />
          </div>
          <div class="flex a-center j-between p-10 all m-t-20" @click="collect">
            <div class="flex a-center">
              <van-icon name="star-o" class="m-r-5" />收藏商品
            </div>
            <van-icon name="arrow" />
          </div>
          <div class="flex a-center j-between p-10 all" @click="address">
            <div class="flex a-center">
              <van-icon name="location-o" class="m-r-5" />地址管理
            </div>
            <van-icon name="arrow" />
          </div>
          <div class="flex a-center j-between p-10 all" @click="browse">
            <div class="flex a-center">
              <van-icon name="eye-o" class="m-r-5" />最近浏览
            </div>
            <van-icon name="arrow" />
          </div>
        </div>
      </van-pull-refresh>
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
      user: {},
      userInfo: {},
      userInfoChange: {},
      flag: false,
      numList: [],
      count: "",
      TobeList: [],
      isLoading: false
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
          this.$router.push("/login");
        })
        .catch(() => {
          // on cancel
        });
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    login() {
      this.$router.push("/login");
    },
    minePersonalData() {
      this.$router.push("/minePersonalData");
    },
    setting() {
      this.$checkLogin(this.minePersonalData);
    },
    order() {
      this.$router.push("/order");
    },
    collect() {
      this.$router.push("/collect");
    },
    address() {
      this.$router.push("/address");
    },
    browse() {
      this.$router.push("/browse");
    },
    evaluate() {
      this.$router.push("/evaluate");
    },
    completed() {
      this.$router.push({ path: "/order", query: { index: 4 } });
    },
    changepersonal() {
      if (localStorage.personal) {
        this.userInfoChange = JSON.parse(localStorage.getItem("personal"));
        console.log(this.userInfoChange);
        console.log(666)
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.userInfo = this.user.userInfo;
    console.log(this.userInfo.nickname);
    console.log(this.user);
    // console.log(this.user.userInfo.nickname);
    this.changepersonal();
    if (this.user !== null) {
      this.flag = true;
    } else if (this.user === null) {
      this.flag = false;
    }
    //评论
    this.$api
      .getTobeEvaluated()
      .then(res => {
        // console.log(res);
        this.count = res.data.count;
        this.TobeList = res.data.list;
        // console.log(this.TobeList);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.main {
  height: 100vh;
}
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
.center {
  margin-bottom: 60px;
}
</style>