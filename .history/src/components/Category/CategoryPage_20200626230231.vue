<template>
  <div>
    <div class="tab" ref="tab">
      <div class="flex j-center p-tb-10 category">商品分类</div>

      <div class="flex main-bottom j-between">
        <div class="flex a-column left a-center">
          <div
            v-for="item in categorydata"
            :key="item.id"
            class="p-10 left-item"
            @click="checkLeft(index)"
          >{{item.mallCategoryName}}</div>
        </div>
        <div class="flex right" v-if="categorydata.length>0">
          <van-tabs v-model="active" swipeable @click="onClick">
            <van-tab
              v-for="(item1,index1) in categorydata[index].bxMallSubDto"
              :key="index1"
              :title="item1.mallSubName"
              ellipsis="false"
            >{{index}}</van-tab>
          </van-tabs>
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
      active: "",
      index: "",
      categorydata: [],
      bxMallSubDto: [],
      dataList: [],
      id: ""
    };
  },
  methods: {
    onClick(name, title) {
      let id = this.somedata[0].bxMallSubDto[name].mallSubId;
      //这个就是id 
      console.log(name);  //1
      console.log(title); //失灵水果
      this.$api
        .getClassification(this.id)
        .then(res => {
          console.log(res);
          this.dataList = res;
        })
        .catch(err => {
          console.log(err);
        });   
    },
    checkLeft(index) {
      // console.log(this.categorydata[index].bxMallSubDto.mallSubId);
    },
    checkRight(index) {
      // console.log(this.categorydata[index].bxMallSubDto.mallSubId);
      
    }
  },
  mounted() {
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

//  <div class="contentbox" v-if="somedata.length>0">
//           <van-tabs v-model="active" swipeable @click="onClick">
//             <van-tab
//               ellipsis="false"
//               class="content"
//               v-for="(item,index) in somedata[aIndex].bxMallSubDto"
//               :key="index"
//               :title="item.mallSubName"
//             >
//               <div v-for="(item1,index1) in arr" :key="index1">
//                 <div class="line df">
//                   <div class="m-l-10">
//                     <img class="w75 g1" :src="arr[index1].image" />
//                   </div>

//                   <div>
//                     <div class="m-l-10 text0 cred m-t-10">{{item1.name}}</div>

//                     <div class="m-l-10 m-t-10">
//                       <span class="text1 cred">${{item1.present_price}}</span>
//                       <span class="text2">${{item1.orl_price}}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </van-tab>
//           </van-tabs>
//         </div>
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
  width: 100px;
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
.van-tab__pane {
  width: 275px;
}
</style>
