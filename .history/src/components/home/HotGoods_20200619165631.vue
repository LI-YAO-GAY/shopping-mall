<template>
  <div>
    <div>
      <div class="title flex j-center">
        <slot name="title"></slot>
      </div>
      <div v-for="(item,index) in hotGoods" :key="index">
        <div class="Kbox">
        <div>
          <img :src="item.image" alt />
        </div>
        <div>{{item.name}}</div>
        <div class="flex a-center">
          <div>￥{{item.mallPrice}}</div>
          <div class="price">￥{{item.price}}</div>
        </div>
        </div>
      </div>
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
.Kbox{
  border:1px solid #ccc;
}
.price{
  text-decoration: line-through;
}
</style>