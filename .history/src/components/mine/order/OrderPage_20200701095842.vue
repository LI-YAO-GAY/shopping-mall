<template>
  <div>
    <Top>
      <template v-slot:default>全部订单</template>
    </Top>
    <van-tabs v-model="active" swipeable sticky @click="onClick "></van-tabs>
  </div>
</template>

<script>
import Top from "../../top/Top";
export default {
  name: "",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      active: 1
    };
  },
  methods: {
    getOrderNumber() {
      this.$api
        .getOrderNum()
        .then(res => {
          console.log(res);
          this.numList = res.numList;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getMyOrder(){
      this.$api
        .getMyOrder()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getMyOrder()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>