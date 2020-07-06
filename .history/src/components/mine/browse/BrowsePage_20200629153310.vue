<template>
  <div>
    <Top>
      <template v-slot:default>最近浏览</template>
    </Top>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div v-for="(item,index)  in list" :key="index">
          <div class="flex m-10 a-center">
            <div class="img">
              <img :src="item.image" alt class="w100p" />
            </div>
            <div class="m-l-10 center">
              <div class="m-b-10">{{item.name}}</div>
              <div class="color-red">￥{{item.present_price}}</div>
            </div>
            <div class="icon" @click="del(item,index)">
              <van-icon name="close" />
            </div>
          </div>
          <div class="line" v-if="index!=browseArr.length-1"></div>
        </div>
        <div class="flex a-center j-center m-t-10" v-if="browseArr.length === 0">暂无浏览记录</div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "../../top/Top";
import BScroll from "better-scroll";
import isEqual from "lodash/isEqual";
import uniqWith from "lodash/uniqWith";
export default {
  name: "",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      browseArr: [],
      browseList: [],
      obj: {},
      list: []
    };
  },
  methods: {
    del(item, index) {
     let id = item.id
     this.list = this.list.filter(item=>{
      return id !== item.id
     })
    }
  },
  mounted() {
    new BScroll(this.$refs.wrapper, {
      click: true
    });
    //获取浏览过商品的id
    this.browseArr = JSON.parse(localStorage.getItem("browseList"));
    this.browseList = uniqWith(this.browseArr, isEqual);
    // console.log( this.browseList);
    this.browseList.map(item => {
      return this.$api
        .getGoodsDetails(item)
        .then(res => {
          // console.log(res.goods.goodsOne);
          this.obj = res.goods.goodsOne;
          this.list.push(this.obj);
          // console.log(this.list);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 80px;
  height: 80px;
  border: 1px solid rgb(245, 245, 245);
}
.line {
  width: 100%;
  height: 1px;
  background: rgb(245, 245, 245);
}
.icon {
  position: relative;
  top: 35px;
  left: 10px;
}
.center {
  width: 230px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.wrapper {
  height: calc(100vh - 50px);
  overflow: hidden;
  background: white;
}
</style>