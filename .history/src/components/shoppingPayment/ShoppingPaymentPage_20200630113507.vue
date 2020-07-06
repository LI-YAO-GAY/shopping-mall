<template>
  <div>
    <Top>
      <template v-slot:default>订单结算</template>
    </Top>
    <div class="top">
      <van-cell-group class="flex">
        <van-icon name="location-o" size="24px" class="m-t-20 m-l-10" />
        <van-cell>
          <template #title>
            <div class="F18">收货人:{{name}}</div>
          </template>
          <template #default>
            <div class="F14">{{tel}}</div>
          </template>
          <template #label>
            <div class="lable">
            <div class="F14">收货地址:{{address}}</div>
            <div class="F12 toast">(收货不便时，可选择免费代收货服务)</div>
            </div>
          </template>
        </van-cell>
      </van-cell-group>
      <img src="../../assets/caitiao.jpg" alt class="w100p" />
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
      id:'',
      defaultAdd:{},
      name:'',
      tel:'',
      address:'',
    };
  },
  methods: {
    onSubmit() {},
  },
  mounted() {
    this.id = this.$route.query.id
    this.$api.getDefaultAddress().then(res=>{
      console.log(res);
      this.defaultAdd=res.defaultAdd
      this.name=res.defaultAdd.name
      this.tel=res.defaultAdd.tel
      this.address=res.defaultAdd.address
    }).catch(err=>{
      console.log(err);
    })
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
.lable{
  width: 220px;
}
</style>