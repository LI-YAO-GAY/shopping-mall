<template>
  <div>
    <Top>
      <template v-slot:default>全部订单</template>
    </Top>
     <van-tabs v-model="active" swipeable sticky @click="onClick ">
     </van-tabs>
  </div>
</template>

<script>
import Top from '../../top/Top';
export default {
  name: "",
  props: {},
  components: {
    Top
  },
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