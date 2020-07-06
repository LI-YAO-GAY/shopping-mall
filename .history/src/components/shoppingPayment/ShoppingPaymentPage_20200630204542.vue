<template>
  <div>
    <Top>
      <template v-slot:default>订单结算</template>
    </Top>
    <div class="top">
      <van-cell-group class="flex">
        <van-cell center>
          <template #icon>
            <van-icon name="location-o" size="24px" class="m-r-10" />
          </template>
          <template #title>
            <div class="j-between flex">
              <div class="color-666">收货人:{{name}}</div>
              <div class="F14">{{tel}}</div>
            </div>
          </template>
          <template #label>
            <div class="lable">
              <div class="F14">收货地址:{{address}}</div>
              <div class="F12 toast m-t-5">(收货不便时，可选择免费代收货服务)</div>
            </div>
          </template>
          <template #right-icon>
            <van-icon name="arrow" @click="checkAddress" />
          </template>
        </van-cell>
      </van-cell-group>
      <div v-if="arr.length===0">请添加默认地址</div>
      <img src="../../assets/caitiao.jpg" alt class="w100p" />
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div v-for="(item,index) in arr" :key="index">
          <div class="flex line">
            <div class="m-l-10 img m-tb-10">
              <img :src="item.image_path" class="w100p" />
            </div>
            <div class="m-tb-10 center">
              <div class="m-b-20 m-l-10 red">{{item.name}}</div>
              <span class="red m-l-5 fw-600">{{item.present_price|fixed}}</span>
            </div>
            <div class="flex a-center m-t-20">
              <van-icon name="cross" />
              {{item.count}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import Top from "../top/Top";
import BScroll from "better-scroll";
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      id: "",
      defaultAdd: {},
      name: "",
      tel: "",
      address: "",
      arr: [],
      arr1: [],
      idDirect: "",
      orderId: []
    };
  },
  methods: {
    //提交
    onSubmit() {
      if (this.$route.query.arr) {
        this.idDirect = false;
        this.$api
          .getOrder({
            address: this.address,
            tel: this.tel,
            orderId: this.orderId,
            totalPrice: this.total,
            idDirect: this.idDirect,
            count: this.arr.length
          })
          .then(res => {
            console.log(res);
            localStorage.removeItem("shopping");
            Toast({
              icon: "success",
              message: "结算成功"
            });
          })
          .catch(err => {
            console.log(err);
          });
      } else if (this.$route.query.arr1) {
        this.idDirect = true;
        this.$api
          .getOrder({
            address: this.address,
            tel: this.tel,
            orderId: this.orderId,
            totalPrice: this.total,
            idDirect: this.idDirect,
            count: this.arr.length
          })
          .then(res => {
            console.log(res);
            localStorage.removeItem("shopping");
            Toast({
              icon: "success",
              message: "结算成功"
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    checkAddress() {
      this.$router.push("/address");
    }
  },
  mounted() {
    new BScroll(this.$refs.wrapper, {
      click: true
    });
    //从购物车到结算
    this.arr = this.$route.query.arr;
    // console.log(this.arr);
    this.arr = JSON.parse(localStorage.getItem("shopping"));
    // console.log(this.arr);
    this.arr.map(item => {
      this.orderId.push(item.cid);
    });
    //从详情页到结算
    this.arr1 = this.$route.query.arr1;
    this.arr = JSON.parse(localStorage.getItem("details"));
    //默认地址请求
    this.$api
      .getDefaultAddress()
      .then(res => {
        console.log(res);
        this.defaultAdd = res.defaultAdd;
        this.name = res.defaultAdd.name;
        this.tel = res.defaultAdd.tel;
        this.address = res.defaultAdd.address;
      })
      .catch(err => {
        console.log(err);
      });
  },
  filters: {
    fixed(val) {
      return "￥" + Number(val).toFixed(2);
    }
  },
  watch: {},
  computed: {
    total() {
      let sum = 0;
      this.arr.map(item => {
        sum += item.present_price * item.count * 100;
      });
      return sum;
    }
  }
};
</script>

<style scoped lang='scss'>
.wrapper {
  width: 100%;
  height: calc(100vh - 200px);
  overflow: hidden;
}
.toast {
  color: rgb(251, 214, 190);
}
.top {
  font-size: 0px;
}
.lable {
  width: 220px;
}
.line {
  border-bottom: 1px solid rgb(246, 246, 246);
}
.img {
  width: 80px;
  height: 80px;
  border: 1px solid rgb(246, 246, 246);
}
.red {
  color: rgb(255, 0, 0);
}
.center {
  width: 240px;
}
</style>