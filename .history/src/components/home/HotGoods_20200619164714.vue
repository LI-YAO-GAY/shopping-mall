<template>
  <div>
    <div>
      <div class="title flex j-center">
        <slot name="title"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    hotGoods:{
      type:Array
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
.title {
  color: rgb(224, 50, 43);
}
</style>