<template>
  <div>
    <div class="flex a-center">
      <div class="num">
        <slot name="num"></slot>
      </div>
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div>
      
      </div>
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
.num{
  border-radius: 50%;
  background: red;
}
</style>