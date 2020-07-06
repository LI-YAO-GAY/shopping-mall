<template>
  <div>
    <Top>
      <template v-slot:default>地址管理</template>
    </Top>
    <div>
      <div class="flex j-center m-t-40 F18">暂无收货地址~~</div>
    </div>
    <div class="addAddress flex a-center j-center color-fff" @click="addAddress">新增地址</div>
  </div>
</template>

<script>
import Top from "../../top/Top";
import EditAddress from "../../mine/address/EditAddress";
export default {
  name: "",
  props: {},
  components: {
    Top,
    EditAddress
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
      id: ""
    };
  },
  methods: {
    addAddress() {
      this.$api
        .getSetDefaultAddress({
          name: this.name,
          tel: this.tel,
          address: this.address,
          isDefault: this.isDefault,
          province: this.province,
          city: this.city,
          county: this.county,
          addressDetail: this.addressDetail,
          areaCode: this.areaCode,
          id: this.id
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
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