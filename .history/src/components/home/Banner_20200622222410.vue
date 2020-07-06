<template>
  <div>
    <div class="main">
      <van-swipe :autoplay="3000" initial-swipe="0" :stop-propagation="false">
        <van-swipe-item v-for="item in images" :key="item.id" @click="GoDetails(item)"  @touchstart.stop.prevent="handleTouchStart">
         <img :src="item.image" alt class="w100p"/>
        </van-swipe-item>
      </van-swipe>
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