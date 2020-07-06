<template>
  <div>
    <Top>
      <template v-slot:default>地址列表</template>
    </Top>
      <div>
        <div class="flex j-center m-t-40 F18">暂无收货地址~~</div>
      </div>
      <div class="addAddress flex a-center j-center color-fff" @click="addAddress">新增地址</div>
    <div v-if="flag===true">
      <NewAddAddress></NewAddAddress>
    </div>
  </div>
</template>

<script>
import Top from "../../top/Top";
import NewAddAddress from "../address/NewAddAddress";
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
      flag: false
    };
  },
  methods: {
    addAddress() {
      this.flag = true;
      // this.$api
      //   .getSetDefaultAddress({
      //     name: this.name,
      //     tel: this.tel,
      //     address: this.address,
      //     isDefault: this.isDefault,
      //     province: this.province,
      //     city: this.city,
      //     county: this.county,
      //     addressDetail: this.addressDetail,
      //     areaCode: this.areaCode,
      //     id: this.id
      //   })
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  },
  mounted() {},
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