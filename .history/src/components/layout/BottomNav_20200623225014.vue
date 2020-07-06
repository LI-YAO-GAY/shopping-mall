<template>
  <div>
    <div class="flex j-around nav bg-fff">
      <div v-for="(item,index) in nav" :key="index" class="flex a-column a-center">
        <div v-if="index!==2" @click="Go(item)" :class="{red:sum === item.page}">
          <i class="iconfont F24" :class="item.icon"></i>
          <div>{{item.title}}</div>
        </div>
        <div v-if="index===2" @click="NoGo" :class="{red:sum === item.page}">
          <i class="iconfont F24" :class="item.icon"></i>
          <div>{{item.title}}</div>
        </div>
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
    Go(item) {
      this.$router.push(item.page);
      this.sum = item.page;
    },
    NoGo(item) {
      this.$checkLogin();
    }
  },
  mounted() {
    this.sum = this.$route.path; //一加载让sun等于路由
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.nav {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0px;
}
.red {
  color: red;
}
</style>