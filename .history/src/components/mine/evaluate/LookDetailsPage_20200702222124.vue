<template>
  <div>
    <Top>
      <template v-slot:default>评价详情</template>
    </Top>
    <van-card>
      <template #thumb>
        <van-image round width="4rem" height="4rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </template>
      <template #title>
        <div class="m-t-10 F16 m-b-20 m-l-10" v-if="lookItem.anonymous===true">匿名用户</div>
      </template>
      <template #num>
        <div class="F16 m-l-10">{{lookItem.comment_time}}</div>
      </template>
      <template #footer>
        <div class="m-t-10 F16 m-l-10">评价内容:{{lookItem.content}}</div>
      </template>
      <template #desc>
        <van-rate
          v-model="lookItem.rate"
          :size="20"
          color="#ee0a24"
          void-icon="star"
          void-color="#eee"
          class="m-l-10"
        />
      </template>
    </van-card>
    <div v-for="(item,index) in lookItem.goods" :key="index">
    <div><img :src="item.image" alt="" class="w100p"></div>
    <div>{{item.name}}</div>
    <div class="carts"><van-icon name="shopping-cart-o" /></div>
    </div>
  </div>
</template>

<script>
import Top from "../../top/Top";
export default {
  name: "",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      lookItem: {},
      id1: "",
      id2: ""
    };
  },
  methods: {},
  mounted() {
    this.lookItem = this.$route.query.item;
    console.log(this.lookItem);
    this.lookItem = JSON.parse(localStorage.getItem("lookItem"));

    // this.id1 = this.$route.query.id1;
    // this.id2 = this.$route.query.id2;
    // console.log(this.id);
    // this.$api
    //   .getEvaluateOne({id:this.id1,id:this.id2})
    //   .then(res => {
    //     console.log(res);
    //     this.EvaluateItem=res
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>