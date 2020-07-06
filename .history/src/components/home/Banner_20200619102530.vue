<template>
  <div class="main">
    <scroll class="wrapper" :pulldown="pulldown">
      <ul class="content">
        <li>
          <van-swipe :autoplay="3000" initial-swipe="0" @click="GoDetails">
            <van-swipe-item v-for="item in images" :key="item.id">
              <img :src="item.image" alt class="w100p" />
            </van-swipe-item>
          </van-swipe>
        </li>
      </ul>
       <div class="loading-wrapper"></div>
    </scroll>
  </div>
</template>

<script>
 import BScroll from 'better-scroll'
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
      pulldown: true
    };
  },
  methods: {
    GoDetails() {
      this.$router.push({ path: "/Details", query: { id: this.id } });
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