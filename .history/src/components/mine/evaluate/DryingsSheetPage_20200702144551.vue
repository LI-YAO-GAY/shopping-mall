<template>
  <div>
    <Top>
      <template v-slot:default>评价中心</template>
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
      Item:{}
    };
  },
  methods: {},
  mounted() {
    this.Item = this.$route.query.item
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>