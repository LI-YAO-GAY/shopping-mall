<template>
  <div>
    <div v-if="flag===false">
      <Top>
        <template v-slot:default>地址列表</template>
      </Top>
      <div v-if="searchResult.length=0">
        <div class="flex j-center m-t-40 F18">暂无收货地址~~</div>
      </div>
      <div v-if="searchResult.length>0">
        <div v-for="item in searchResult" :key="item.id">
          <van-address-list
            v-model="chosenAddressId"
            :searchResult="searchResult"
            :disabled-list="disabledList"
            disabled-text="以下地址超出配送范围"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
          />
        </div>
      </div>
      <div class="addAddress flex a-center j-center color-fff" @click="addAddress">新增地址</div>
    </div>
    <div v-if="flag===true">
      <NewAddAddress></NewAddAddress>
    </div>
  </div>
</template>

<script>
import Top from "../../top/Top";
import NewAddAddress from "../address/NewAddAddress";
import { Toast } from 'vant';
export default {
  name: "",
  props: {},
  components: {
    Top,
    NewAddAddress
  },
  data() {
    return {
      name: "",
      tel: "",
      address: "",
      isDefault: "",
      province: "",
      city: "",
      county: "",
      addressDetail: "",
      areaCode: "",
      id: "",
      flag: false,
      searchResult: {},
      chosenAddressId: "1"
    };
  },
  methods: {
    addAddress() {
      this.flag = true;
    },
    onAdd() {
      Toast("新增地址");
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    }
  },
  mounted() {
    // this.searchResult = JSON.parse(localStorage.getItem("addAddress"));
    // console.log(this.searchResult);
    //查询默认收货地址(get)
    this.$api.getDefaultAddress().then(res=>{
      console.log(res);
      this.searchResult = res.defaultAdd
    }).catch(err=>{
      console.log(err);
    })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.addAddress {
  width: 100%;
  background: rgb(241, 110, 110);
  height: 50px;
  position: fixed;
  bottom: 0px;
}
</style>