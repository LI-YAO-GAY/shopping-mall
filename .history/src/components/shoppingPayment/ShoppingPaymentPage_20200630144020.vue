<template>
  <div>
    <Top>
      <template v-slot:default>订单结算</template>
    </Top>
    <div class="top">
      <van-cell-group class="flex">
        <van-icon name="location-o" size="24px" class="m-t-40 m-l-10" />
        <van-cell>
          <template #title>
            <div class="color-666">收货人:{{name}}</div>
          </template>
          <template #default>
            <div class="F14">{{tel}}</div>
          </template>
          <template #label>
            <div class="lable">
              <div class="F14">收货地址:{{address}}</div>
              <div class="F12 toast m-t-5">(收货不便时，可选择免费代收货服务)</div>
            </div>
          </template>
        </van-cell>
      </van-cell-group>
      <div v-if="arr.length===0">请添加默认地址</div>
      <img src="../../assets/caitiao.jpg" alt class="w100p" />
    </div>
    <div>
      <div v-for="(item,index) in arr" :key="index">
        <div class="flex line">
          <div class="m-l-10 img m-tb-10">
            <img :src="item.image_path" class="w100p" />
          </div>
          <div class="m-tb-10">
            <div class="m-b-20 m-l-10 red">{{item.name}}</div>
            <span class="red m-l-10 fw-600">￥{{item.orl_price}}</span>
            <span class="red m-l-5 fw-600">{{item.present_price}}</span>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import Top from "../top/Top";
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
      arr: []
    };
  },
  methods: {
    onSubmit() {},
    Godetails(item){
      console.log(item);
      this.$router.push({path:'/details',query:{id:item.id}})
    }
  },
  mounted() {
    this.arr = this.$route.query.arr;
    // console.log(this.arr);
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
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
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
.red{
  color: rgb(255,0,0);
}
</style>