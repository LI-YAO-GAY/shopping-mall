<template>
  <div>
    <Top>
      <template v-slot:default>全部订单</template>
    </Top>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
      <div class="main">
        <van-tabs v-model="active" swipeable sticky swipe-threshold="5">
          <!-- 循环？？？？？
          <van-tab v-for="(item,index) in navList" :key="index" :title="item.name" ellipsis="false">-->
          <van-tab title="全部">
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
          </van-tab>
          <van-tab title="待支付"></van-tab>
          <van-tab title="待发货"></van-tab>
          <van-tab title="待收货"></van-tab>
          <van-tab title="已完成">
            <div class="content p-10">
              <div v-for="(item,index) in list" :key="index">
                <div class="border m-b-10">
                  <van-cell-group>
                    <van-cell>
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
                        <div class="t-align-r">
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
          </van-tab>

          <!-- </van-tab> -->
        </van-tabs>
      </div>
    </van-pull-refresh>
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
      list: [],
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
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
    // onClick(name, title) {
    //   console.log(name); //下标
    //   console.log(title); //名称
    // }
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