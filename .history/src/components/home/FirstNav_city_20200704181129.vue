<template>
  <div>
    <Top>
      <template v-slot:default>城市列表</template>
    </Top>
    <van-search v-model="value" placeholder="请输入城市关键词" />
    <div class="now-city p-b-10 p-l-20 F14">当前城市</div>
    <div class="nowCityOUT p-tb-10 p-l-20">
      <div class="nowCity flex a-center j-center F14" >成都市</div>
    </div>
    <div class="now-city p-tb-10 p-l-20 F14">热门城市</div>
    <div v-for="(item,index) in " :key="index"></div>
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
      value: "",
      hotCities:[]
    };
  },
  methods: {},
  mounted() {
    // this.citys = city.data;
    // console.log(this.citys);
    this.hotCities=city.data.citys
    console.log(this.hotCities);
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
  padding: 3px 20px 3px 20px;
  border-radius: 3px;;
}
.nowCityOUT {
  background: rgb(255, 255, 255);
}
.now-city {
  background: rgb(242, 242, 242);
}
</style>