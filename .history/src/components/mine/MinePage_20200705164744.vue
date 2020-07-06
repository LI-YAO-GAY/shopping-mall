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
              src="http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E5%A4%B4%E5%83%8F%20%E4%BA%BA%E7%89%A9%E5%BD%A2%E8%B1%A1%20%E5%B0%8F%E5%AD%A9&hs=0&pn=1&spn=0&di=104290&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=&ie=utf-8&oe=utf-8&in=3354&cl=2&lm=-1%2C&st=&cs=682748172%2C3788948432&os=1739223447%2C1798230433&simid=4122744560%2C314879237&adpicid=0&lpn=0&ln=2000&fr=ala&fmq=1378374347070_R&fm=&ic=0&s=0%2C&se=&sme=&tab=&face=&ist=&jit=&statnum=head&cg=head&bdtype=15&oriquery=%E5%A4%B4%E5%83%8F&objurl=http%3A%2F%2Fwww.sydiaocha.cn%2Fimg.php%3Fgw.alicdn.com%2Fbao%2Fuploaded%2Fi1%2F380218696%2FTB2R2vfXFXXXXbPXpXXXXXXXXXX_!!380218696.jpg_460x460xz.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bfy1tw5viw_z%26e3BvgAzdH3F%25Em%25Bc%25lC%25Eb%25ll%25Bl%25Ec%25Ad%25BF%25Em%25BE%25Bm%25Em%25lD%25l8%25Ec%25b9%25lA%25El%25bD%25Ac%25Ec%25bl%25A0%25Ec%25Ad%25lm%25Eb%25A9%25Ba%25En%25bb%25An%25Eb%25lm%25b9_z%26e3Bip4s&gsm=0&islist=&querylist="
              class="m-t-30"
            />
            <div v-if="user!==null">
              <div
                class="m-tb-10 F18 fw-600 color-999"
                v-if="userInfoChange"
              >欢迎您:{{userInfoChange.nickname}}</div>
              <div class="m-tb-10 F18 fw-600 color-999" v-else>欢迎您 {{userInfo.nickname}}</div>
            </div>
            <div class="m-b-30 F14 color-999">
              <div v-if="user===null" @click="login" class="m-tb-10">未登录,请先登录</div>
              <div v-if="flag===true" @click="quit">退出登录</div>
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
      userInfo: "",
      userInfoChange: null, //{}--true; null--false
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
          localStorage.removeItem("personal");
          localStorage.removeItem("searchCity");
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
        // console.log(this.userInfoChange);
      }
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    // console.log(this.userInfo);
    // console.log(this.user);
    // console.log(this.user.userInfo.nickname);
    this.changepersonal();
    if (this.user !== null) {
      this.flag = true;
      this.userInfo = this.user.userInfo;
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