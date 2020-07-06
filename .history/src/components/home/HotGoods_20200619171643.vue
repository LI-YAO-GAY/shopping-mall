<template>
  <div>
    <div>
      <div class="title flex j-center">
        <slot name="title"></slot>
      </div>

      <van-grid :column-num="2">
        <van-grid-item v-for="(item,index) in hotGoods" :key="index"/>
          <van-grid-item class="Kbox flex a-column a-center">
            <van-grid-item>
              <img :src="item.image" alt class="w100p" />
            </van-grid-item>
            <van-grid-item>{{item.name}}</van-grid-item>
            <div class="flex a-center">
              <van-grid-item>￥{{item.mallPrice}}</van-grid-item>
              <van-grid-item class="price F14">￥{{item.price}}</van-grid-item>
            </van-grid-item>
          </van-grid-item>

      </van-grid>

      <!--
      <div class="flex f-w">
        <div v-for="(item,index) in hotGoods" :key="index">
          <div class="Kbox flex a-column a-center">
            <div>
              <img :src="item.image" alt class="w100p" />
            </div>
            <div>{{item.name}}</div>
            <div class="flex a-center">
              <div>￥{{item.mallPrice}}</div>
              <div class="price F14">￥{{item.price}}</div>
            </div>
          </div>
        </div>
      </div> -->



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
  methods: {},
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
</style>