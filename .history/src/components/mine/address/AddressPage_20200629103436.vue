<template>
  <div>
    <div v-if="flag===false">
    <Top>
      <template v-slot:default>地址列表</template>
    </Top>
    <div >
      <div class="flex j-center m-t-40 F18">暂无收货地址~~</div>
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
      searchResult:[]
    };
  },
  methods: {
    addAddress() {
      this.flag = true;
    }
  },
  mounted() {
  this.searchResult=JSON.parse(localStorage.getItem('addAddress'))
  console.log( this.searchResult);
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