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
          <Building1 v-if="floor1.length>0" :floor1="floor1">
            <template v-slot:num>
              <div>1F</div>
            </template>
            <template v-slot:title>
              <div v-if="floorName">{{floorName.floor1}}</div>
            </template>
          </Building1>
          <Building2 v-if="floor2.length>0" :floor2="floor2">
            <template v-slot:num>
              <div>2F</div>
            </template>
            <template v-slot:title>
              <div>{{floorName.floor2}}</div>
            </template>
          </Building2>
          <Building3 v-if="floor3.length>0" :floor3="floor3">
            <template v-slot:num>
              <div>3F</div>
            </template>
            <template v-slot:title>
              <div>{{floorName.floor3}}</div>
            </template>
          </Building3>
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
import Building1 from "../../components/home/Building";
import Building2 from "../../components/home/Building";
import Building3 from "../../components/home/Building";
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
    Building1,
    Building2,
    Building3,
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
          this.$store.commit("setCategoryData", res.data.category);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    new BScroll(".wrapper");
    this.getRecommend();
  },
  watch: {},
  computed: {
    CategoryData() {
      return this.$store.state.CategoryData;
    }
  }
};
</script>

<style lang="scss" scoped>
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
