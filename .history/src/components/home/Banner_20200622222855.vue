<template>
  <div>
    <div class="main">
      <van-swipe :autoplay="3000" initial-swipe="0" :stop-propagation="false">
        <van-swipe-item v-for="item in images" :key="item.id" @click="GoDetails(item)"  @touchstart.stop.prevent="handleTouchStart">
         <img :src="item.image" alt class="w100p"/>
        </van-swipe-item>
      </van-swipe>


      <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" />
  <van-goods-action-icon icon="shop-o" text="店铺" />
  <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" />
  <van-goods-action-button color="#7232dd" type="danger" text="立即购买" />
</van-goods-action>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    images: {
      type: Array
    }
  },
  components: {},
  data() {
    return {
      id: "",
    };
  },
  methods: {
    handleTouchStart (e) {
     console.log('TouchStart执行一次')
      e.preventDefault()//添加阻止click事件触发
      this.touchStatus = true
    },
    GoDetails(item) {
     this.$router.push('/details')
      this.$router.push({ path: "/details", query: { id: item.goodsId} });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.image {
  width: 100%;
  height: 100%;
}
.main {
  margin-top: 54px;
}
</style>