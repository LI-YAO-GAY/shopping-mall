<template>
  <div>
    <Top>
      <template v-slot:default>地址列表</template>
    </Top>
    <div v-if="list.length === 0">
      <div class="flex j-center m-t-40 F18">暂无收货地址~~</div>
    </div>
    <div v-if="list.length !== 0" class="checked__none">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @click-item="click_item"
      />
    </div>
    <div class="addAddress flex a-center j-center color-fff" @click="onAdd">新增地址</div>
  </div>
</template>

<script>
import Top from "../top/Top";
import { Toast } from "vant";
export default {
  inject: ["reload"],
  name: "",
  props: {},
  components: {
    Top
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
      chosenAddressId: ""
    };
  },
  methods: {
    //新增地址
    onAdd() {
      this.$router.push("/newAddress");
    },
    //编辑地址
    onEdit(item, index) {
      // console.log(item);
      this.$router.push({ path: "/editAddress", query: { item } });
    },
    click_item(item) {
      this.$router.push({ path: "/shoppingPayment", query: { item } });
      console.log(item);
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
        this.list.map((item, index) => {
          this.$set(item, "id", index + 1 + ""); //加一个ID属性
          item.address =
            item.province + item.city + item.county + item.addressDetail;
        });
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
.addAddress {
  width: 100%;
  background: rgb(241, 110, 110);
  height: 50px;
  position: fixed;
  bottom: 0px;
}
</style>