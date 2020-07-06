<template>
  <div class="flex j-center main">
    <div class="back a-center color-fff" @click="goBackFn">
    <van-icon name="arrow-left" />
    </div>
    <div class="title">
      <slot></slot>
    </div>
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