<template>
  <div>
    <Top>
      <template v-slot:default>城市列表</template>
    </Top>
    <van-search v-model="searchCity" placeholder="请输入城市关键词" @input="OnSearch" @focus="Focus" />
    <div v-if="searchCity === ''">
      <div class="now-city p-b-10 p-l-20 F14">当前城市</div>
      <div class="nowCityOUT p-tb-10 p-l-20">
        <div class="nowCity flex a-center j-center F14">
          <div v-if="nowcity">{{nowcity}}</div>
          <div v-else>定位中...</div>
        </div>
      </div>
      <div class="now-city p-tb-10 p-l-20 F14">热门城市</div>
      <div class="flex f-w m-b-10">
        <div v-for="(item,index) in hotCities" :key="index">
          <div
            class="hotCity flex a-center j-center F14 f1 m-l-15 m-t-10"
            @click="checkCity(item)"
          >{{item.name}}</div>
        </div>
      </div>
      <van-index-bar class="side_font">
        <div v-for="(item,index) in indexList" :key="index">
          <van-index-anchor :index="item" class="van-index-anchor" />
          <div v-for="(item1,index1) in title[index]" :key="index1">
            <van-cell :title="item1.name" @click="checkCity(item1)" />
          </div>
        </div>
      </van-index-bar>
    </div>
    <div v-if="searchCity !==''">
      <div v-for="(item,index) in arr1" :key="index">
        <div class="sea-searchCity p-tb-10 p-l-20">{{item.name}}</div>
      </div>
    </div>
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
      nowcity: "", //
      city: [],
      searchCity: "", //搜索关键字
      hotCities: [],
      indexList: [],
      title: [],
      arr: [],
      arr1: [],
      flag: false
    };
  },
  methods: {
    getSomeCity() {
      let _this = this;
      AMap.plugin("AMap.Geolocation", function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: "RB"
        });

        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);

        function onComplete(data) {
          // data是具体的定位信息
          _this.nowcity = data.addressComponent.city;
          console.log(data);
          // if (_this.position_city) {
          //   _this.$store.commit("setPosition_city", _this.nowcity);
          // }
        }

        function onError(data) {
          // 定位出错
        }
      });
    },
    checkCity(item1) {
      this.searchCity = item1.name;
      console.log(item1.name);
      localStorage.setItem("serchCity", this.searchCity);
      this.$router.push({ path: "/", query: { searchCity: this.value } });
    },
    Focus() {
      // this.flag = true;
      // console.log(111);
    }
  },
  mounted() {
    this.getSomeCity();
    this.city = city.data;
    console.log(this.city);
    this.hotCities = this.city.hotCities;
    // console.log(this.hotCities);
    this.indexList = Object.keys(this.city.cities); //返回-对象属性名的字符串形式-构成数组
    // console.log(this.cities);
    this.title = Object.values(this.city.cities); //返回-对象属性值的字符串形式-构成数组
    // console.log(this.title);
  },
  watch: {
    searchCity(val) {
      if (val !== "") {
        this.arr = this.title.flat(1);
        this.arr1 = this.arr.filter((item, index) => {
          return JSON.stringify(item).includes(val) === true;
        });
      }
    }
  },
  computed: {
    // position_city() {
    //   return this.$store.state.position_city;
    // }
  }
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
.searchPage {
  width: 200px;
  height: 500px;
}
.sea-searchCity {
  border-bottom: 1px solid rgb(242, 242, 242);
}
</style>