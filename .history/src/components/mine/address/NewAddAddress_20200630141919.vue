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
      />
    </div>
  </div>
</template>

<script>
import areaList from "../../../assets/js/area";
import { Toast } from "vant";
import Top from "../../top/Top";
export default {
  //新增地址
  name: "",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      areaList,
      searchResult: [],
    };
  },
  methods: {
    //保存
    onSave(content) {
      this.$api
        .getAddAddress({
          name: content.name,
          tel: content.tel,
          address: content.address,
          isDefault: content.isDefault,
          province: content.province,
          city: content.city,
          county: content.county,
          addressDetail: content.addressDetail,
          areaCode: content.areaCode,
          id:content.id
        })
        .then(res => {
          console.log(res);
          Toast("添加成功");
          this.$router.go(-1)
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
</style>