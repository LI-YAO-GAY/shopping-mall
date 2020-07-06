<template>
  <div>
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
        @select="select"
      />
    </div>
    <div class="addAddress flex a-center j-center color-fff" @click="onAdd">新增地址</div>
  </div>
</template>

<script>
import Top from "../../top/Top";
import { Toast } from "vant";
export default {
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
      // Toast("新增地址");
      this.$router.push("/newAddress");
    },
    //编辑地址
    onEdit(item, index) {
      // console.log(item);
      this.$router.push({ path: "/editAddress", query: item });
    },
    //切换
    select(item, index) {
      if (item.isDefault === false) {
        this.$api
          .getSetDefaultAddress({ id: item.cid })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
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
        if (this.list.isDefault === true) {
          this.list.map(item => {
            return this.chosenAddressId = item._id;
          });
        }
        this.list.map(item => {
          return (item.address =
            item.province + item.city + item.county + item.addressDetail);
        });
        // localStorage.setItem("address", JSON.stringify(this.list));
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