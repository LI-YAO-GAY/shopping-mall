<template>
  <div>
    <van-nav-bar title="购物车" />
    <div>
      <van-panel>
        <template #header>
          <div class="flex j-between">
            <van-checkbox v-model="checked" shape="square" class="m-l-10">全选</van-checkbox>
            <div class="flex a-column m-r-10">
              <div>合计</div>
              <div>请确认订单</div>
            </div>
          </div>
        </template>
        <template #footer>
          <span class="m-r-10"><van-button size="small" type="danger">删除</van-button></span>
          <van-button size="small" type="danger">结算</van-button>
        </template>
      </van-panel>
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
        this.shopList = res;
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
</style>