<template>
  <div class="bg">
    <FirstNav></FirstNav>
    <div class="wrapper" :pulldown="pulldown" ref="wrapper">
      <div class="content">
        <div>
          <Banner :images="images"></Banner>
        </div>
        <div>
          <Second :category="category"></Second>
        </div>
        <div>
          <Advert :advertesPicture="advertesPicture"></Advert>
        </div>
        <div>
          <Recommend v-if="recommend.length > 0" :recommend="recommend"></Recommend>
        </div>
        <div>
          <Building v-if="floor1.length>0" :floor1="floor1">
            <template v-slot:num>
              <div>1F</div>
            </template>
            <template v-slot:title>
              <div>{{floorName.floor1}}</div>
            </template>
          </Building>
          <Building v-if="floor2.length>0" :floor2="floor2">
            <template v-slot:num>
              <div>2F</div>
            </template>
            <template v-slot:title>
              <div>{{floorName.floor2}}</div>
            </template>
          </Building>
          <Building v-if="floor3.length>0" :floor3="floor3">
            <template v-slot:num>
              <div>3F</div>
            </template>
            <template v-slot:title>
              <div>{{floorName.floor3}}</div>
            </template>
          </Building>
        </div>
        <div>
          <HotGoods :hotGoods="hotGoods">
            <template slot="title">
              <div>热销商品</div>
            </template>
          </HotGoods>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import FirstNav from "../../components/home/FirstNav";
import Banner from "../../components/home/Banner";
import Second from "../../components/home/Second";
import Advert from "../../components/home/Advert";
import Recommend from "../../components/home/Recommend";
import Building from "../../components/home/Building";
import HotGoods from "../../components/home/HotGoods";
export default {
  name: "",
  props: {},
  components: {
    FirstNav,
    Banner,
    Second,
    Advert,
    Recommend,
    Building,
    HotGoods
  },
  data() {
    return {
      pulldown: true,
      images: [],
      category: [],
      advertesPicture: {},
      recommend: [],
      floor1: [],
      floor2: [],
      floor3: [],
      floorName: {},
      hotGoods: []
    };
  },
  methods: {
    getRecommend() {
      this.$api
        .getRecommend()
        .then(res => {
          console.log(res);
          this.images = res.data.slides;
          // console.log(this.images);
          //console.log(this.category);
          this.category = res.data.category;
          this.advertesPicture = res.data.advertesPicture;
          this.recommend = res.data.recommend;
          this.floor1 = res.data.floor1;
          this.floor2 = res.data.floor2;
          this.floor3 = res.data.floor3;
          this.floorName = res.data.floorName;
          this.hotGoods = res.data.hotGoods;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    new BScroll(".wrapper");
    this.getRecommend();
    let _this=this
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
      }

      function onError(data) {
        // 定位出错
      }
    });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.bg {
  background: rgb(238, 238, 238);
}
.wrapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin-bottom: 60px;
}
.content {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
}
</style>
