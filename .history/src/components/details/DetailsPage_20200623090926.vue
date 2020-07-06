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
        <div class="flex a-center">
          收藏:
          <van-icon name="like-o" class="m-r-10" />
        </div>
      </div>
      <div class="flex j-between">
        <div class="flex a-center">
          <van-icon name="shop-o" size="20px"/>
          <div class="F14">有赞的店</div>
        </div>
        <div class="flex a-center">
          <div>进入店铺</div>
          <van-icon name="arrow" size="20px" />
        </div>
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
      obj: {}
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
</style>