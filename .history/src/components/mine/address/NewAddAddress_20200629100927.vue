<template>
  <div>
    <Top>
      <template v-slot:default>新增地址</template>
    </Top>
    <div>
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
import areaList from "../../../assets/js/area";
import { Toast } from "vant";
import Top from "../../top/Top";
export default {
  name: "",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      areaList,
      searchResult: []
    };
  },
  methods: {
    //保存
    onSave() {
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
          localStorage.setItem("addAddress", this.searchResult);
          Toast("save");
        })
        .catch(err => {
          console.log(err);
        });
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>