<template>
  <div>
    <div class="main flex a-column">
      <div class="relative">
        <div>
          <img :src="obj.image" alt class="w100p" />
        </div>
        <div class="back flex a-center j-center color-fff absolute" @click="goBackFn">
          <van-icon name="arrow-left" />
        </div>
      </div>
      <div class="F18 p-t-10 p-l-10 name">{{obj.name}}</div>
      <div class="color-red m-l-10 m-tb-10">￥{{obj.orl_price}}</div>
      <div class="flex j-between font F14 p-lr-10 p-tb-10">
        <div>运费：{{obj.__v}}</div>
        <div>剩余：{{obj.amount}}</div>
        <div>
        <div class="flex a-center collect" v-if="flag === false">
          收藏:
          <van-icon name="like-o" @click="collect"/>
        </div>
        <div class="flex a-center collect" v-if="flag === true">
          取消收藏:
          <van-icon name="like" @click="CancelCollect" :class="{'red' : flag===true}"/>
        </div>
        </div>
      </div>
      <div class="flex j-between shop m-t-20 p-10">
        <div class="flex a-center">
          <van-icon name="shop-o" size="20px"/>
          <div class="F14 m-l-10">有赞的店</div>
          <div class="official color-fff F14 m-l-10">官方</div>
        </div>
        <div class="flex a-center">
          <div class="F14">进入店铺</div>
          <van-icon name="arrow" size="20px" />
        </div>
      </div>
      <div class="flex goods m-t-20 j-around">
      <div class="p-tb-5" :class="{'red':num===0}">商品详情</div>
      <div class="p-tb-5">商品评论</div>
      </div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
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
      id: "",
      obj: {},
      goods:{},
      flag:false,
      num:0
    };
  },
  methods: {
    goBackFn() {
      this.$router.go(-1);
    },
    getGoodsDetails() {
      this.$api
        .getGoodsDetails(this.id)
        .then(res => {
          // console.log(res.goods.goodsOne);
          this.obj = res.goods.goodsOne;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //收藏
    collect(){
      this.flag = true
      this.$api.getCollection(this.obj).then(res=>{  //上面已经定义了所以直接Obj
       console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    },
    //取消收藏
    CancelCollect(){
       this.flag = false
      this.$api.getCancelCollection(this.id).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getGoodsDetails();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.main {
  width: 100%;
  height: 100vh;
  background-size: cover;
}
.back {
  background: rgba(118, 117, 119, 0.9);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  left: 10px;
  top: 10px;
}
.font {
  color: rgb(175, 178, 194);
  border: 1px solid rgb(249, 249, 249);
}
.name {
  border-top: 1px solid rgb(249, 249, 249);
}
.shop{
  border: 1px solid rgb(249, 249, 249);
}
.official{
  background: rgb(255,68,68);
  border-radius: 5px;;
  padding: 2px;
}
.van-goods-action{
  border-top: 1px solid rgb(249, 249, 249);
}
.goods{
  border-top: 1px solid rgb(249, 249, 249);
}
.red{
  color: red;
}
.collect{
  width: 80px;
}
</style>