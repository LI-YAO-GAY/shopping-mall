<template>
  <!-- <div class="flex j-center main a-center">
    <div class="back a-center" @click="goBackFn">
      <van-icon name="arrow-left" />
    </div>
    <div class="title">
      <slot></slot>
    </div>
  </div>-->
  <div>
    <van-nav-bar @click-left="goBackFn">
      <template #left>
      <van-icon name="arrow-left" color="black"/>
      </template>
      <template #title>
        <slot></slot>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    goBackFn() {
      this.$router.goBackFn();
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.main {
  position: relative;
  .back {
    position: absolute;
    left: 20px;
  }
}
</style>