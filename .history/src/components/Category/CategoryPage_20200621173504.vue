<template>
  <div>
    <div>
      <van-tree-select height="100vw" :items="items" :main-active-index.sync="active">
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
    return {
       active: 0,
      items: [{ text: '分组 1' }, { text: '分组 2' }],
    };
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