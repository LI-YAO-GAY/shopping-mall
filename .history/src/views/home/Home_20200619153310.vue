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
          <Building :floor1="floor1" :floor2="floor2" :floor3="floor3">
            <template v-slot:num>
              <div>1F</div>
            </template>
            <template v-slot:title>
              <div>休闲食品</div>
            </template>
          </Building>
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
export default {
  name: "",
  props: {},
  components: {
    FirstNav,
    Banner,
    Second,
    Advert,
    Recommend,
    Building
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
      floor3: []
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
  computed: {}
};
</script>

<style scoped lang='scss'>
.bg {
  background: rgb(238, 238, 238);
}
.wrapper {
  width: 100%;
  height: calc(100vh - 54px);
  overflow: hidden;
}
.content {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
</style>
