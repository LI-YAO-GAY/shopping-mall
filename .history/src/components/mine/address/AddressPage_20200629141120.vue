<template>
  <div>
    <div v-if="flag===false">
      <Top>
        <template v-slot:default>地址列表</template>
      </Top>
      <div v-if="list.length === 0">
        <div class="flex j-center m-t-40 F18">暂无收货地址~~</div>
      </div>
      <div v-if="list.length !== 0">
        <van-address-list
          v-model="chosenAddressId"
          :list="list"
          default-tag-text="默认"
          @add="onAdd"
          @edit="onEdit"
        />
      </div>
      <div class="addAddress flex a-center j-center color-fff" @click="onAdd">新增地址</div>
    </div>
    <div v-if="flag===true">
      <NewAddAddress></NewAddAddress>
    </div>
  </div>
</template>

<script>
import Top from "../../top/Top";
import NewAddAddress from "../address/NewAddAddress";
import { Toast } from "vant";
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
      list: [],
      chosenAddressId:''
    };
  },
  methods: {
    onAdd() {
      Toast("新增地址");
      this.flag = true;
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    }
  },
  mounted() {
    //查询收货地址(get)
    this.$api
      .getAddress()
      .then(res => {
        // console.log(res);
        this.list = res.address;
        console.log(this.list);
        this.list.map(item => {
          return (item.address = item.province + item.city + item.county);
        });
      })
      .catch(err => {
        console.log(err);
      });
      //查询默认收货地址(get)
      this.$api.getDefaultAddress().then(res=>{
      console.log(res);
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