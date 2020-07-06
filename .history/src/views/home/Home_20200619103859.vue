<template>
  <div class="bg">
    <div class="wrapper" :pulldown="pulldown">
      <FirstNav></FirstNav>
      <ul class="content">
        <Banner :images="images"></Banner>
        <Second :category="category"></Second>
        <Advert :advertesPicture="advertesPicture"></Advert>
        <Recommend :recommend="recommend"></Recommend>
        <Building :floor1="floor1" :floor2="floor2" :floor3="floor3"></Building>
      </ul>
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
    this.getRecommend();
    //  this.$api.getRecommend().then(res=>{
    //     console.log(res)
    //     this.image=res.data.slides
    //  }).catch(err=>{
    //    console.log(err)
    //  })
     this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {})
      })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.bg {
  background: rgb(238, 238, 238);
}
</style>