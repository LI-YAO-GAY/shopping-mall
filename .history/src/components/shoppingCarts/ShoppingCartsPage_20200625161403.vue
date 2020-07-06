<template>
  <div>
    <van-nav-bar title="购物车" />
    <div>
      <van-panel>
        <template #header>
          <div class="flex j-between p-tb-10">
            <van-checkbox v-model="checked" shape="square" class="m-l-10" @click="changeAll">全选</van-checkbox>
            <div class="flex a-column m-r-50">
              <div>合计{{total|fixed}}</div>
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
      <div class="flex a-center item relative">
        <van-checkbox v-model="checked" shape="square" class="m-l-10 m-b-15"></van-checkbox>
        <div class="flex a-center m-l-10 m-b-15">
          <div class="img">
            <img :src="item.image_path" alt class="w100p" />
          </div>
          <div>
            <div class="color-red m-b-20 F18 m-l-10">{{item.name}}</div>
            <div class="color-red m-l-10 F18">￥{{item.mallPrice}}</div>
          </div>
          <van-stepper
            v-model="value"
            theme="round"
            button-size="22"
            disable-input
            class="stepper"
          />
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
      checked: "",
      count: "",
      value: "",
      checkAll:false
    };
  },
  methods: {
    changeAll(){
      this.shopList.map(item => {
        item.check = this.checkAll
      })
    }
  },
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
      }),
      filters:{
      fixed(val){
        return '￥'+Number(val).toFixed(2)
      }
    }
  },
  watch: {},
  computed: {
    total() {
      let sum = 0;
      this.shopList.map(item => {
        if (item.check) {
          sum += item.mallPrice * item.count;
        }
      });
      return sum;
    },
  }
};
</script>

<style scoped lang='scss'>
.img {
  width: 100px;
  height: 100px;
  border: 1px solid rgb(245, 245, 245);
}
.item {
  border-bottom: 1px solid rgb(245, 245, 245);
}
.stepper {
  right: 40px;
  top: 60px;
  position: absolute;
}
</style>