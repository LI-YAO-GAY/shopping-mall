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
                  <van-cell value="交易完成">
                    <template #title>
                      <div class="order_id">订单编号:{{item.order_id}}</div>
                    </template>
                    <template #label>
                      <div v-for="(item1,index1) in item.order_list" :key="index1">
                        <div class="flex">
                        <div class="img">
                          <img :src="item1.image_path" alt class="w100p" />
                        </div>
                        <div>
                          <div class="color-red m-b-20 F16 m-l-10 name">{{item1.name}}</div>
                          <div class="color-red m-l-10 F16">￥{{item1.mallPrice}}</div>
                        </div>
                        </div>
                      </div>
                      <div class="t-align-right">
                        <div class="F14">创建时间:{{item.add_time}}</div>
                        <div class="F14 m-tb-5">收货地址:{{item.address}}</div>
                        <div class="F14">
                          共{{item.status}}件商品,
                          <span>合计:{{item.mallPrice}}</span>
                        </div>
                      </div>
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
.order_id {
  width: 230px;
}
.van-cell__value {
  color: rgb(213, 103, 46);
}
.t-align-right {
  text-align: right;
  position: relative;
  left: 100px;
}
.img {
  width: 80px;
  height: 80px;
  border: 1px solid rgb(245, 245, 245);
}
</style>