<template>
  <div>
    
  <div>{{CategoryData.mallCategoryName}}</div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
   
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