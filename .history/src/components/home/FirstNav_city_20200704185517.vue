<template>
  <div>
    <Top>
      <template v-slot:default>城市列表</template>
    </Top>
    <van-search v-model="value" placeholder="请输入城市关键词" />
    <div class="now-city p-b-10 p-l-20 F14">当前城市</div>
    <div class="nowCityOUT p-tb-10 p-l-20">
      <div class="nowCity flex a-center j-center F14">成都市</div>
    </div>
    <div class="now-city p-tb-10 p-l-20 F14">热门城市</div>
    <div class="flex f-w m-b-10">
      <div v-for="(item,index) in hotCities" :key="index">
        <div class="hotCity flex a-center j-center F14 f1 m-l-15 m-t-10">{{item.name}}</div>
      </div>
    </div>
    <van-index-bar class="side_font">
      <div v-for="(item,index) in indexList" :key="index">
        <van-index-anchor :index="item" class="van-index-anchor" />
        <div v-for="(item1,index1) in title[index]" :key="index1">
          <van-cell :title="item1.name" />
        </div>
      </div>
    </van-index-bar>
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
      city: [],
      value: "",
      hotCities: [],
      indexList: [],
      title: []
    };
  },
  methods: {},
  mounted() {
    this.city = city.data;
    console.log(this.city);
    this.hotCities = this.city.hotCities;
    // console.log(this.hotCities);
    this.indexList = Object.keys(this.city.cities); //返回-对象属性名的字符串形式-构成数组
    // console.log(this.cities);
    this.title = Object.values(this.city.cities); //返回-对象属性值的字符串形式-构成数组
    console.log(this.title);
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
  padding: 3px 15px 3px 15px;
  border-radius: 3px;
}
.nowCityOUT {
  background: rgb(255, 255, 255);
}
.now-city {
  background: rgb(242, 242, 242);
}
.hotCity {
  padding: 3px 35px 3px 35px;
  border-radius: 3px;
  border: 1px solid #ccc;
}
.van-index-anchor {
  background: rgb(242, 242, 242);
}

</style>