<template>
  <div>
    <div class="tab" ref="tab">
         <div class="flex j-center p-tb-10 category">商品分类</div>
          <div class="flex a-column left a-center">
            <div v-for="item in CategoryData" :key="item.id" class="m-5 left-item">{{item.mallCategoryName}}</div>
          </div>
          <!--<div class="flex a-column">
            <div v-for="(item,index) in CategoryData" :key="index">
              <div class="flex">
                <div v-for="(item1,index) in item.bxMallSubDto" :key="index">
                  <van-tabs v-model="active">
                    <van-tab :title="item1.mallSubName"></van-tab>
                  </van-tabs>
                </div>
              </div>
            </div>
          </div>
          -->
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
      scrollX: 0,
      active: 2,
      items: [{ text: "分组 1" }, { text: "分组 2" }]
    };
  },
  methods: {
    // TabScroll() {
    //   // console.log(this.CategoryData.length);
    //   let width = this.CategoryData.length * 100;
    //   //console.log(width);
    //   this.$refs.tabcontent.style.width = width + "px";
    //   this.$nextTick(() => {
    //     if (!this.scroll) {
    //       this.scroll = new BScroll(this.$refs.tab, {
    //         startX: 0,
    //         click: true,
    //         scrollX: true,
    //         scrollY: false, //忽略竖直方向的滚动
    //         eventPassthrough: "vertical"
    //       });
    //     } else {
    //       this.scroll.refresh();
    //     }
    //   });
    // }
  },
  mounted() {
    // this.$api.getClassification().then(res=>{
    //  console.log(res);
    // }).catch(err=>{
    //   console.log(err)
    // })
    //console.log(this.CategoryData);
    // this.TabScroll();
  },
  watch: {},
  computed: {
    CategoryData() {
      return this.$store.state.CategoryData;
    }
  }
};
</script>

<style scoped lang='scss'>
.tab {
  white-space: nowrap;
  overflow: hidden;
}
.tab_item {
  width: 100px;
}
.category{
  border-bottom:1px solid #ccc;
}
.left{
  background: rgb(241,248,255);
  height: 100vh;
  width: 80px;
}
.left-item{
   border-bottom:1px solid #ccc;
}
</style>