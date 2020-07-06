<template>
  <div>
    <div>
      <div class="title flex j-center m-tb-10">
        <slot name="title"></slot>
      </div>
      <van-grid :column-num="2">
        <van-grid-item v-for="(item,index) in hotGoods" :key="index" @click="GoDetails(item)">
          <van-image :src="item.image" alt class="w100p" />
           <div class="name F14">{{item.name}}</div>
            <div class="flex a-center m-t-5">
              <div class="F14">￥{{item.mallPrice}}</div>
              <div class="price F12">￥{{item.price}}</div>
            </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    hotGoods: {
      type: Array
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {
      GoDetails(item) {
      // this.$router.push("/details");
      this.$router.push({ path: "/details", query: { id: item.goodsId } });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.title {
  color: rgb(224, 50, 43);
}
.Kbox {
  border: 1px solid #ccc;
}
.price {
  color: rgb(224, 50, 43);
  text-decoration: line-through;
}
.name{
  width: 170px;
  overflow: hidden;
  white-space: nowrap;
  text-emphasis: none;
}
</style>