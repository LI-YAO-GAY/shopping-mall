<template>
  <div>
    <div class="flex j-around nav">
      <div v-for="(item,index) in nav" :key="index" class="flex a-column a-center">
        <div @click="Go(item)" :class="{red:item.page}">
          <i class="iconfont F24" :class="item.icon"></i>
          {{item.title}}
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
    }
  },
  mounted() {},
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