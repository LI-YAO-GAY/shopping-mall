<template>
  <div>
    <div class="m-t-20 p-10 bg-fff">商品推荐</div>

    <div class="tab bg-fff wrapper" ref="tab">
      <div class="tab_content flex" ref="tabcontent">
        <div
          class="tab_item"
          v-for="item in recommend"
          :key="item.id"
          ref="tabitem"
          :gameinfo="item"
          touch-action=none
        >
          <div class="flex a-column Kbox">
            <div>
              <img :src="item.image" class="images" />
            </div>
            <div class="goodsName">{{item.goodsName}}</div>
            <div>￥{{item.mallPrice}}</div>
            <div>{{item.Price}}</div>
          </div>
        </div>
      </div>
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
      // console.log(this.recommend.length);
      let width = this.recommend.length * 140;
      console.log(width);
      this.$refs.tabcontent.style.width = width + "px"
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
.tab_item {
  width: 125px;
}
.Kbox {
  border-right: 1px solid #ccc;
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