<template>
  <div>
    <div>
      <div class="num">
        <slot name="num"></slot>
      </div>
      <div class="title">
        <slot title="title"></slot>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    floor1:{
      type:Array
    },
    floor2:{
      type:Array
    },
    floor3:{
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
</style>