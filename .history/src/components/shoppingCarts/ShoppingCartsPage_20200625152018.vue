<template>
  <div>
    <van-nav-bar title="购物车" />
    <div>
      <van-panel>
        <template #header>
          <van-checkbox v-model="checked" shape="square">全选</van-checkbox>
          <div>合计</div>
          <div>请确认订单</div>
        </template>
        <template #footer>
          <van-button size="small">删除</van-button>
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
      checked:''
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