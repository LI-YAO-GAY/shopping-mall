<template>
  <div>
    <div class="flex j-around nav">
      <div v-for="(item,index) in nav" :key="index" class="flex a-column a-center">
        <div @click="Go(item)" :class="{red:title === item.page}">
          <i class="iconfont F24"></i>
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
      title:'',
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
    Go(item){
      this.$router.push(item.page)
      this.title = item.page
    }
  },
  mounted() {
    this.title = this.$route.path
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
.red{
  color:red
}
</style>