<template>
  <div>
    <CategoryPage></CategoryPage>
  </div>
</template>

<script>
import CategoryPage from "../../components/category/CategoryPage";
export default {
  name: "Category",
  props: {},
  components: {
    CategoryPage
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    //  console.log(this.CategoryData);
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