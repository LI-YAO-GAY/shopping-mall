<template>
  <div>
    <div class="flex j-around a-center nav bg-fff relative">
      <div v-for="(item,index) in nav" :key="index" class="flex a-column a-center">
        <div @click="Go(item,index)" :class="{red:sum === item.page}">
          <i class="iconfont F24" :class="item.icon"></i>
          <div>{{item.title}}</div>
        </div>
      </div>
      <div class="circle"></div>
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
      sum: "",
      nav: [
        {
          icon: "icon-jurassic_home",
          title: "商城",
          page: "/"
        },
        {
          icon: "icon-gengduo",
          title: "分类",
          page: "/category"
        },
        {
          icon: "icon-03f",
          title: "购物车",
          page: "/shoppingcarts"
        },
        {
          icon: "icon-wode",
          title: "我的",
          page: "/mine"
        }
      ]
    };
  },
  methods: {
    Go(item, index) {
      this.sum = item.page;
      if (index !== 2) {
        this.$router.push(item.page);
      } else if (index === 2) {
        let user = localStorage.getItem("user");
        // console.log(user);
        if (user !== null) {
          this.$router.push("/shoppingCarts");
        } else {
          Dialog.confirm({
            title: "请登录",
            message: "当前状态未登录，是否立即登录？"
          })
            .then(res => {
              this.$router.push("/login");
            })
            .catch(err => {
              console.log(err);
            });
        }
      }
    }
  },
  mounted() {
    this.sum = this.$route.path; //一加载让sum等于路由
  },
  watch: {
    "$route.path"(val) {
      // console.log(val);
      if (val === "/category") {
        this.sum = val;
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.nav {
  width: 100%;
  height: 54px;
  position: fixed;
  bottom: 0px;
}
.red {
  color: red;
}
.circle{
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
  position: absolute;
  top:0px;
  left:240px;
}
</style>