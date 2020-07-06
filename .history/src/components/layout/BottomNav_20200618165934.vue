<template>
  <div>
    <div v-for="item in nav" :key="item">
    <i class="iconfont" :class="item.icon"></i>
    {{item.title}}
    
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
          path:'/'
        },
        {
          icon: "icon-gengduo",
          title: "分类",
          path:'/category'
        },
        {
          icon: "icon-03f",
          title: "购物车",
          path:'/shoppingcarts'
        },
        {
          icon: "icon-wode",
          title: "我的",
          path:'/mine'
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
</style>