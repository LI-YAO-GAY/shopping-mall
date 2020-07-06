<template>
  <div>
    <Top>
      <template v-slot:default>编辑地址</template>
    </Top>
    <div>
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :address-info="addressInfo"
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
import areaList from "../../../assets/js/area";
import { Toast } from "vant";
import Top from "../../top/Top";
import CollectPageVue from "../collect/CollectPage.vue";
export default {
  name: "",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      areaList,
      searchResult: [],
      addressInfo: {},
      nowaddress: {}
    };
  },
  methods: {
    onSave(content) {
      // console.log(content);
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
          id: this.addressInfo._id       //这个id===传过来的item的id
        })
        .then(res => {
          console.log(res);
          Toast("修改成功");
          this.$router.go(-1)
        })
        .catch(err => {
          console.log(err);
        });
    },
    onDelete(content) {
      // console.log(content._id);
      this.$api
        .getDeleteAddress({id:this.addressInfo._id })
        .then(res => {
          console.log(res);
          Toast("delete");
          this.$router.go(-1)
        })
        .catch(err => {
          console.log(err);
        });
    },
    onChangeDetail(val) {
      // if (val) {
      //   this.searchResult = [
      //     {
      //       name: "黄龙万科中心",
      //       address: "杭州市西湖区"
      //     }
      //   ];
      // } else {
      //   this.searchResult = [];
      // }
    }
  },
  mounted() {
    //如果没有用组件的名字 自定义名字的话 就this.$route.query
    //加入传对象item，
    //传的时候，query：item------接收的时候，直接this.$route.query
    //如果用组件的名字  就正常传参
    this.addressInfo = this.$route.query.item;
    // console.log(this.editItem);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>