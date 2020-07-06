<template>
  <div>
    <div class="m-t-20 p-10 bg-fff">商品推荐</div>

    <div class="tab bg-fff wrapper" ref="tab">
      <ul class="tab_content flex" ref="tabcontent">
        <li
          class="tab_item"
          v-for="item in recommend"
          :key="item.id"
          ref="tabitem"
          :gameinfo="item"
          touch-action=none
        >
          <div class="flex a-column Kbox">
            <li>
              <img :src="item.image" class="images" />
            </li>
            <li class="goodsName">{{item.goodsName}}</li>
            <li>￥{{item.mallPrice}}</li>
            <li>{{item.Price}}</li>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "",
  props: {
    recommend: {
      type: Array
    }
  },
  components: {},
  data() {
    return {
      scrollX:0,
    };
  },
  methods: {
    TabScroll() {
      console.log(this.recommend.length);
      let width = this.recommend.length * 125;
      console.log(width);
      this.$refs.tabcontent.style.width = width + "px";
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.tab, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false, //忽略竖直方向的滚动
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    }
  },
  mounted() {
     console.log(this.recommend.length);
     this.TabScroll()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.tab {
  width: 100vh;
  white-space: nowrap;
   overflow: hidden;
}
.tab_content{
  width: calc(100vh + 667px);
}
.tab_item {
  width: 125px;
}
.Kbox {
  border: 1px solid #ccc;
  padding:10px;
}
.images {
  width: 100%;
  height: 100%;
}
.goodsName {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>