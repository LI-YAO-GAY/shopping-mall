<template>
  <div>
    <Top>
      <template v-slot:default>全部订单</template>
    </Top>
    <div class="main">
      <van-tabs v-model="active" swipeable sticky @click="onClick " swipe-threshold="5">
        <van-tab v-for="(item,index) in navList" :key="index" :title="item.name" ellipsis="false">
          <div class="content p-10">
            <div v-for="(item,index) in list" :key="index">
              <div class="border m-b-10">
                <van-cell-group>
                  <van-cell  value="交易完成">
                    <template #title>
                      <div class="order_id">订单编号:{{item.order_id}}</div>
                    </template>
                  </van-cell>
                </van-cell-group>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
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
      ],
      list: []
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
          this.list = res.list;
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
.border {
  border-radius: 5px;
  background: rgb(255, 255, 255);
}
.main {
  background: rgb(242, 242, 242);
  height: 100vh;
}
.order_id{
  width: 230px;
}
.van-cell__value{
color: rgb(213,103,46);
}
</style>