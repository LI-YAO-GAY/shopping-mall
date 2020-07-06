<template>
  <div class="flex j-center main">
    <div class="back" @click="Goback">&gt;</div>
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
    Goback() {
      this.$router.back();
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