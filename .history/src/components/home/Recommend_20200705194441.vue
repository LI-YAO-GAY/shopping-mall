<template>
  <div>
    <div class="m-t-20 p-10 bg-fff line">商品推荐</div>
    <div class="tab bg-fff wrapper" ref="tab">
      <div class="tab_content flex" ref="tabcontent">
        <div
          class="tab_item"
          v-for="item in recommend"
          :key="item.id"
          ref="tabitem"
          :gameinfo="item"
          touch-action="none"
        >
          <div class="flex a-column Kbox">
            <div @click="lookDetails(item)">
              <img :src="item.image" class="images" />
            </div>
            <div class="goodsName" @click="lookDetails(item)">{{item.goodsName}}</div>
            <div class="flex a-center">
              <div>￥{{item.mallPrice}}</div>
              <div class="F12 color-ccc m-l-5 price">￥{{item.price}}</div>
            </div>
            <div class="flex i-l a-center">
              <div class="color-fff icon flex a-center j-center F12">
                <i class="iconfont icon-03f" @click="goshoppingCarts(item)"></i>
              </div>
              <div class="color-fff look flex a-center j-center F12" @click="lookDetails(item)">查看详情</div>
            </div>
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
      scrollX: 0,
      id: ""
    };
  },
  methods: {
    lookDetails(item) {
      this.$router.push({ path: "/details", query: { id: item.goodsId } });
    },
    TabScroll() {
      // console.log(this.recommend.length);
      let width = this.recommend.length * 125;
      //console.log(width);
      this.$refs.tabcontent.style.width = width + "px";
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.tab, {
            startX: 0,
            scrollX: true,
            scrollY: false, //忽略竖直方向的滚动
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
    goshoppingCarts(item) {
      // console.log(item);
      this.$api
        .getAddShop(item.goodsId)
        .then(res => {
          // console.log(res);
          this.$toast.success(res.msg);
          // history.go(0);
          // console.log(this.id);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.TabScroll();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.tab {
  white-space: nowrap;
  overflow: hidden;
}
.tab_item {
  width: 125px;
}
.Kbox {
  border-right: 1px solid #ccc;
  padding: 10px;
}
.images {
  width: 100%;
  height: 100%;
}
.goodsName {
  width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.icon {
  background: rgb(254, 202, 58);
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  height: 30px;
  flex: 1;
}
.look {
  background: rgb(255, 76, 56);
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  height: 30px;
  flex: 2.5;
}
.price {
  text-decoration: line-through;
}
.line {
  border-bottom: 1px solid #ccc;
}
</style>