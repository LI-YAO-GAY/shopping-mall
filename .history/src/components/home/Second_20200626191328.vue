<template>
  <div>
    <div class="main m-10 flex j-around">
      <div v-for="(item,index) in category" :key="item.id">
        <div class="flex a-column a-center p-tb-10" @click="GoCategory(index)">
          <div class="images">
            <img :src="item.image" class="w100p" />
          </div>
          <div class="F14 m-t-5">{{item.mallCategoryName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    category: { 
      type: Array
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    GoCategory(index){
    this.$router.push({path:'/category',query:{index:index}}) //点击首页传一个下标并跳转到分类页面
    }
  },
  mounted() {
    localStorage.setItem('categorydata',JSON.stringify(this.category)) //本地储存：因为本地存了过后任何页面都能用
  },                                                                   //Vuex：yi
                                                                       //路由传参:因为传的数据需要那个页面接收了才能用
  watch: {},                          
  computed: {}
};
</script>

<style scoped lang='scss'>
.main {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 3px #ccc;
}
.images {
  width: 50px;
  height: 50px;
}
</style>