<template>
  <div>
    <Top>
      <template v-slot:default>全部订单</template>
    </Top>
    <van-tabs v-model="active" swipeable sticky @click="onClick ">
      <van-tab v-for="(item,index) in navList" :key="index" :title="item.name" ellipsis="false"></van-tab>
    </van-tabs>
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
      active: 0,
      navList: [
        {
          name: "全部"
        },
        { name: "待支付" },
        { name: "待发货" },
        { name: "待收货" },
        { name: "已完成" }
      ]
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
    getMyOrder() {
      this.$api
        .getMyOrder()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    onClick() {}
  },
  mounted() {
    this.getMyOrder();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.van-tab {
  width: 50px;
}
</style>