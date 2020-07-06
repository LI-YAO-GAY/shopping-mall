<template>
  <div>
    <Top>
      <template v-slot:default>评价详情</template>
    </Top>
  </div>
</template>

<script>
import Top from "../../top/Top";
export default {
  name: "",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      EvaluateItem: {}
    };
  },
  methods: {},
  mounted() {
    this.EvaluateItem = this.$route.query.item;
    this.EvaluateItem = JSON.parse(localStorage.getItem("EvaluateItem"));
    console.log(this.EvaluateItem);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>