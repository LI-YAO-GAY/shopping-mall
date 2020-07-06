<template>
  <div>
    <Top>
      <template v-slot:default>评价详情</template>
    </Top>
    <van-card class="relative">
      <template #thumb>
        <van-image
          round
          width="4rem"
          height="4rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          class="m-t-10"
        />
      </template>
      <template #title>
        <div class="m-t-10 F16 m-b-20 m-l-10" v-if="lookItem.anonymous===true">匿名用户</div>
      </template>
      <template #num>
        <div class="F14 m-l-10 absolute time">{{lookItem.comment_time}}</div>
      </template>
      <template #footer>
        <div class="F14 t-align-l w-o-t MsgContent">评价内容:{{lookItem.content}}</div>
      </template>
      <template #desc>
        <van-rate
          v-model="lookItem.rate"
          :size="18"
          color="#ee0a24"
          void-icon="star"
          void-color="#eee"
          class="m-l-10"
        />
      </template>
    </van-card>
    <div v-for="(item,index) in lookItem.goods" :key="index">
      <div class="flex m-lr-10 a-center Item">
        <div class="img" @click="Godetails(item)">
          <img :src="item.image" alt class="w100p" />
        </div>
        <div class="m-l-10 name" @click="Godetails(item)">{{item.name}}</div>
        <div class="carts flex a-center j-center m-l-40" @click="onAddCartClicked(item)">
          <van-icon name="shopping-cart-o" size="24px" class="color-red" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "../../top/Top";
import { Toast } from "vant";
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
  methods: {
    Godetails(item) {
      // console.log(item);
      this.$router.push({ path: "/details", query: { id: item.id } });
    },
    onAddCartClicked(item) {
      this.$api
        .getAddShop(item.id)
        .then(res => {
          console.log(res);
          // console.log(this.id);
          this.reload();
        })
        .catch(err => {
          console.log(err);
        });
      Toast({
        icon: "success",
        message: "添加成功，亲请去购物车查看"
      });
    }
  },
  mounted() {
    this.lookItem = this.$route.query.item;
    console.log(this.lookItem);
    this.lookItem = JSON.parse(localStorage.getItem("lookItem"));
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 80px;
  height: 80px;
}
.carts {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgb(255, 230, 226);
}
.Item {
  border-top: 1px solid rgb(242, 242, 242);
}
.van-card:not(:first-child) {
  margin: 0;
}
.van-card {
  background: #fff;
}
.time {
  top: 20px;
  left: 130px;
}
.t-align-l {
  text-align: left;
}
.van-card__thumb {
  width: 64px;
  height: 64px;
}
.MsgContent {
  width: 90%;
}
</style>