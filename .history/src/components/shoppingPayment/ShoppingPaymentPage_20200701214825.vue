<template>
  <div>
    <Top>
      <template v-slot:default>订单结算</template>
    </Top>
    <div class="top">
      <van-cell-group class="flex">
        <van-cell center v-if="!this.$route.query.item">
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
        <van-cell center v-if="this.$route.query.item">
          <template #icon>
            <van-icon name="location-o" size="24px" class="m-r-10" />
          </template>
          <template #title>
            <div class="j-between flex">
              <div class="color-666">收货人:{{name1}}</div>
              <div class="F14">{{tel1}}</div>
            </div>
          </template>
          <template #label>
            <div class="lable">
              <div class="F14">收货地址:{{address1}}</div>
              <div class="F12 toast m-t-5">(收货不便时，可选择免费代收货服务)</div>
            </div>
          </template>
          <template #right-icon>
            <van-icon name="arrow" @click="checkAddress" />
          </template>
        </van-cell>
      </van-cell-group>

      <img src="../../assets/caitiao.jpg" alt class="w100p" />
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="content1" v-if="arr.length >0">
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
        <div class="content2" v-if="arr1.length > 0">
          <div v-for="(item,index) in arr1" :key="index">
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
    </div>
    <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit" v-if="arr.length>0" />
    <van-submit-bar :price="total1" button-text="提交订单" @submit="onSubmit" v-if="arr1.length>0" />
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
      name1: "",
      tel1: "",
      address1: "",
      arr: [],
      arr1: [],
      idDirect: "",
      orderId: [],
      addressInfo: {},
      obj: {}
    };
  },
  methods: {
    //提交
    onSubmit() {
      if (this.$route.query.arr) {
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
            // console.log(res);
            Toast({
              icon: "success",
              message: "结算成功"
            });
            this.$router.push("/mine");
            this.arr = [];
            localStorage.setItem("shopping", JSON.stringify(this.arr));
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$api
          .getOrder({
            address: this.address,
            tel: this.tel,
            orderId: this.orderId,
            totalPrice: this.total,
            idDirect: this.idDirect,
            count: this.arr1.length
          })
          .then(res => {
            console.log(res);
            Toast({
              icon: "success",
              message: "结算成功"
            });
            this.$router.push("/mine");
            this.arr1 = [];
            localStorage.setItem("details", JSON.stringify(this.arr1));
            console.log(this.arr1);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    //选择地址
    checkAddress() {
      this.$router.push({
        path: "/checkAddress",
        query: { idDirect: this.idDirect }
      });
      // console.log(this.idDirect);
    }
  },
  mounted() {
    //滑动效果
    new BScroll(this.$refs.wrapper, {
      click: true
    });
    //
    if (this.$route.query.arr) {
      //从购物车到结算页面 --arr
      this.arr = this.$route.query.arr;
      this.idDirect = this.$route.query.idDirect;
      console.log(this.arr);
      console.log(this.idDirect);
      this.arr = JSON.parse(localStorage.getItem("shopping"));
      // console.log(this.arr);
      this.arr.map(item => {
        this.orderId.push(item.cid);
      });
    } else if (this.$route.query.arr1) {
      //从详情页到结算页面 --arr1
      this.arr1 = this.$route.query.arr1;
      // console.log(this.obj);
      this.idDirect = this.$route.query.idDirect;
      // console.log(this.idDirect);
      this.arr1 = JSON.parse(localStorage.getItem("details"));
      // console.log(this.arr1);
      this.arr1.map(item => {
        this.orderId.push(item.id);
      });
    }
    //第一部分---地址
    //一进页面选中默认地址==defaultAdd
    if (!this.$route.query.item) {
      this.$api
        .getDefaultAddress()
        .then(res => {
          // console.log(res);
          this.defaultAdd = res.defaultAdd;
          this.name = res.defaultAdd.name;
          this.tel = res.defaultAdd.tel;
          this.address =
            res.defaultAdd.province +
            res.defaultAdd.city +
            res.defaultAdd.county;
          // console.log(this.address);
        })
        .catch(err => {
          console.log(err);
        });
    }
    //改变地址，如果是从地址列表传过来item==addressInfo
    else if (this.$route.query.item) {
      this.addressInfo = this.$route.query.item;
      console.log(this.addressInfo);
      this.name1 = this.addressInfo.name;
      this.tel1 = this.addressInfo.tel;
      this.address1 =
        this.addressInfo.province +
        this.addressInfo.city +
        this.addressInfo.county;
      // console.log(this.address);
    }
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
    },
    total1() {
      let sum = 0;
      this.arr1.map(item => {
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