<template>
  <div>
    <van-nav-bar title="购物车" />
    <div>
      <van-panel>
        <template #header>
          <div class="flex j-between p-tb-10">
            <van-checkbox v-model="checked" shape="square" class="m-l-10">全选</van-checkbox>
            <div class="flex a-column m-r-50">
              <div>合计</div>
              <div>请确认订单</div>
            </div>
          </div>
        </template>
      </van-panel>
      <div class="m-t-10 flex j-between">
        <div></div>
        <div>
          <span class="m-r-10">
            <van-button size="small" type="danger">删除</van-button>
          </span>
          <span class="m-r-10">
            <van-button size="small" type="danger">结算</van-button>
          </span>
        </div>
      </div>
    </div>
    <div v-for="item in shopList" :key="item.id">
      <div class="flex a-center">
        <van-checkbox v-model="checked" shape="square" class="m-l-10"></van-checkbox>
        <div class="flex a-center m-l-10">
          <div class="img">
            <img :src="item.image_path" alt class="w100p" />
          </div>
          <div>
            <div class="color-red m-b-20 F18 m-l-10">{{item.name}}</div>
            <div class="color-red m-l-10">￥{{item.mallPrice}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id: "",
      shopList: [],
      checked: ""
    };
  },
  methods: {},
  mounted() {
    this.id = this.$route.query.id;
    // console.log(this.id);
    this.$api
      .getShoppingCard(this.id)
      .then(res => {
        console.log(res);
        this.shopList = res.shopList;
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 100px;
  height: 100px;
  border: 1px solid rgb(245, 245, 245);
}
</style>