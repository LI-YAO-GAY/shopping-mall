<template>
  <div>
    <van-nav-bar title="购物车" />
    <div>
      <van-checkbox v-model="checked" shape="square">全选</van-checkbox>
      <van-panel>
        <template #footer>
          <van-button size="small">按钮</van-button>
          <van-button size="small" type="danger">按钮</van-button>
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
      shopList: []
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