<template>
  <div>
    <Top>
      <template v-slot:default>我的订单</template>
    </Top>
    <div class="main">
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
                    <div class="flex m-b-10">
                      <div class="img">
                        <img :src="item1.image_path" alt class="w100p" />
                      </div>
                      <div class="flex a-center desc m-t-10 j-between">
                        <div class="color-333 F14 name">{{item1.name}}</div>
                        <div class="color-333 m-l-10 F14 price">
                          <div>￥{{item1.mallPrice}}</div>
                          <div class="flex a-center j-end">
                            <van-icon name="cross" />
                            <span class="F12">{{item1.count}}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="line m-tb-10"></div>
                  <div class="t-align-right">
                    <div class="F14 m-t-10">创建时间:{{item.add_time}}</div>
                    <div class="F14 m-tb-5">收货地址:{{item.address}}</div>
                    <div class="F14">
                      共{{item.order_list.length}}件商品,
                      <span>合计:{{item.mallPrice}}</span>
                    </div>
                  </div>
                </template>
              </van-cell>
            </van-cell-group>
          </div>
        </div>
      </div>
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
    }
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
  height: calc(100vh + 100%);
}
.order_id {
  width: 230px;
}
.van-cell__value {
  color: rgb(213, 103, 46);
  height: 20px;
}
.t-align-right {
  width: 100%;
  text-align: right;
  position: relative;
  left: 100px;
}
.img {
  width: 80px;
  height: 80px;
  border: 1px solid rgb(245, 245, 245);
}
.name {
  width: 160px;
}
.desc {
  position: absolute;
  left: 120px;
  width: 220px;
}
.line {
  width: 140%;
  height: 1px;
  background: rgb(242, 242, 242);
}
</style>