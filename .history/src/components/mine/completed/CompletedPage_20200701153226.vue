<template>
  <div>
    <Top>
      <template v-slot:default>我的订单</template>
    </Top>
    <div class="main">
      <van-tabs v-model="active" swipeable sticky swipe-threshold="5">
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