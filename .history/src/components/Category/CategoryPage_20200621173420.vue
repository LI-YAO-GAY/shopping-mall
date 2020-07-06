<template>
  <div>
    <div>
      <van-tree-select height="55vw" :items="items" :main-active-index.sync="active">
        <template #content>
          <van-image v-if="active === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
          <van-image v-if="active === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        </template>
      </van-tree-select>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    CategoryData: {
      type: Array
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // this.$api.getClassification().then(res=>{
    //  console.log(res);
    // }).catch(err=>{
    //   console.log(err)
    // })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>