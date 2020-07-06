<template>
<div>
    <div class="tab" ref="tab">
        <div class="flex j-center p-tb-10 category">商品分类</div>

        <div class="flex main-bottom">

            <div class="flex a-column left a-center">
                <div v-for="item in categorydata" :key="item.id" class="p-10 left-item" @click="checkItem(index)">{{item.mallCategoryName}}</div>
            </div>

            <div class="flex right" v-if="categorydata.length>0">
            
                <div v-for="(item1,index1) in categorydata[index].bxMallSubDto" :key="index1" class="right-nav">
                    <van-tabs swipeable :scrollspy="true">
                        <van-tab  :title="item1.mallSubName" ></van-tab>
                    </van-tabs>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
  //滚动
    name: "",
    props: {},
    components: {},
    data() {
        return {
            scrollX: 0,
            active: 2,
            index: "",
            categorydata: [],
            bxMallSubDto:[],
            dataList:[],
            id:''
        };
    },
    methods: {
      checkItem(index){
      // console.log(this.categorydata[index].bxMallSubDto.mallSubId);

      }
    },
    mounted() {
        this.$api.getClassification().then(res=>{
         console.log(res);
         this.dataList = res
        }).catch(err=>{
          console.log(err)
        })
        console.log(this.CategoryData);
        this.index = this.$route.query.index;
        // console.log(this.index);
        this.categorydata = JSON.parse(localStorage.getItem("categorydata"));
        console.log(this.categorydata);
        // this.id = this.categorydata.mallSubId
       
    },
    watch: {},
    computed: {
        // CategoryData() {
        //   return this.$store.state.CategoryData;
        // }
    }
};
</script>

<style lang="scss" scoped>
.tab {
    white-space: nowrap;
    overflow: hidden;
}

.category {
    border-bottom: 1px solid #ccc;
    position: fixed;
    width: 100%;
}

.left {
    background: rgb(241, 248, 255);
    height: 100vh;
}

.left-item {
    border-bottom: 1px solid #ccc;
}

.right-nav {
    width: 80px;
}

.main-bottom {
    margin-top: 42px;
}
</style>
