<template>
  <div>
    <Top>
      <template v-slot:default>城市列表</template>
    </Top>
    <van-search v-model="value" placeholder="请输入城市关键词" />
    <div class="m-tb-10 now_City">当前城市</div>
    <div class="nowCityOUT"><div class="nowCity flex a-center j-center">成都市</div></div>
  </div>
</template>

<script>
import Top from "../top/Top";
import city from "../../assets/js/city";
export default {
  name: "",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      citys: [],
      value: ""
    };
  },
  methods: {},
  mounted() {
    this.citys = city.data;
    console.log(this.citys);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.van-search {
  background: rgb(242, 242, 242);
}
.van-search__content {
  background: #fff;
}
.nowCity {
  border: 1px solid #ccc;
  width: 90px;
  padding: 3px 20px 3px 20px ;
}
.nowCityOUT{

}
</style>