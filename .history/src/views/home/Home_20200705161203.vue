<template>
  <div class="bg">
    <FirstNav></FirstNav>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
      <div class="wrapper" :pulldown="pulldown" ref="wrapper">
        <div class="content">
          <div>
            <Banner v-if="images.length > 0" :images="images"></Banner>
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
    </van-pull-refresh>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import FirstNav from "../../components/home/FirstNav";
import Banner from "../../components/home/Banner";
import Second from "../../components/home/Second";
import Advert from "../../components/home/Advert";
import Recommend from "../../components/home/Recommend";
import Building1 from "../../components/home/Building1";
import Building2 from "../../components/home/Building2";
import Building3 from "../../components/home/Building3";
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
      hotGoods: [],
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
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
          // this.$store.commit("setCategoryData", res.data.category);
          localStorage.setItem(
            "categorydata",
            JSON.stringify(res.data.category)
          );

          //本地储存：因为本地存了过后任何页面都能用
          //Vuex：一刷新数据就不存在了
          //路由传参:因为传的数据需要那个页面接收了才能用
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    new BScroll(this.$refs.wrapper, {
      click: true
    });
    this.getRecommend();
  },
  watch: {},
  computed: {
    // CategoryData() {
    //   return this.$store.state.CategoryData;
    // }
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background: rgb(238, 238, 238);
}
.wrapper {
  width: 100%;
  height: calc(100vh - 54px);
  overflow: hidden;
  margin-bottom: 60px;
}

.content {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
}
.van-pull-refresh {
  height: calc(100vh - 54px);
}
</style>
