<template>
  <div>
    <div class="flex">
      <div class="flex a-column">
        <div v-for="item in CategoryData" :key="item.id">{{item.mallCategoryName}}</div>
      </div>
      <div class="flex a-column">
        <div v-for="(item,index) in CategoryData" :key="index">
          <div class="flex">
            <div v-for="(item1,index) in item.bxMallSubDto[0]" :key="index">
              <van-tabs v-model="active">
                <van-tab :title="item1.mallSubName"></van-tab>
              </van-tabs>
            </div>
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
      active: 2,
      items: [{ text: "分组 1" }, { text: "分组 2" }]
    };
  },
  methods: {},
  mounted() {
    // this.$api.getClassification().then(res=>{
    //  console.log(res);
    // }).catch(err=>{
    //   console.log(err)
    // })
    console.log(this.CategoryData);
  },
  watch: {},
  computed: {
    CategoryData() {
      return this.$store.state.CategoryData;
    }
  }
};
</script>

<style scoped lang='scss'>
</style>