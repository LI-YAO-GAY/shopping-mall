<template>
  <div>
    <div>
      <div class="title flex j-center">
        <slot name="title"></slot>
      </div>
     <div v-for="(item,index) in hotGoods" :key="index">
     <div><img :src="item.image" alt=""></div>
     <div>{{item.name}}</div>
     <div class="flex"><div>￥{{item.mallPrice}}</div>
     <div>￥{{item.price}}</div></div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    hotGoods:{
      type:Array
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
</style>