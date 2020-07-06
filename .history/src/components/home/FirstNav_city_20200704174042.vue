<template>
  <div>
    <Top>
      <template v-slot:default>城市列表</template>
    </Top>
  </div>
</template>

<script>
import Top from "../top/Top";
import city from "../../assets/js/city";
export default {
  name: "",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      citys: []
    };
  },
  methods: {},
  mounted() {
    this.citys = city.data;
    console.log(this.citys);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>