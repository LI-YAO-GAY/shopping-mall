<template>
  <div>
    <div class="flex j-around nav">
      <div v-for="(item,index) in nav" :key="index" class="flex a-column a-center">
        <i class="iconfont F24" :class="item.icon"></i>
        {{item.title}}
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
          path: "/"
        },
        {
          icon: "icon-gengduo",
          title: "分类",
          path: "/category"
        },
        {
          icon: "icon-03f",
          title: "购物车",
          path: "/shoppingcarts"
        },
        {
          icon: "icon-wode",
          title: "我的",
          path: "/mine"
        }
      ]
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.nav{
  width: 100%;
  height: 60px;
  position:fixed;
  bottom:0px;
}
</style>