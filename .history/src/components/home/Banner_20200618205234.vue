<template>
  <div>
    <van-swipe :autoplay="3000" initial-swipe	="0">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img :src="item" v-lazy="images" />
      </van-swipe-item>
    </van-swipe>
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
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>