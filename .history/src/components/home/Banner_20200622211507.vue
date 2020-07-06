<template>
  <div>
    <div class="main">
      <van-swipe :autoplay="3000" initial-swipe="0" >
        <van-swipe-item v-for="item in images" :key="item.id">
          <img :src="item.image" alt class="w100p" @click="GoDetails" />
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