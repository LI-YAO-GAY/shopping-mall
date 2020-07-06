<template>
  <div>
    <div class="main"></div>
    <Top>
    <template v-slot:default>城市列表</template>
    </Top>
  </div>
</template>

<script>
import Top from '../top/Top'
export default {
  name: "",
  props: {},
  components: {
    Top
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.main {
  height: 100vh;
  width: 100vw;
  background: #000;
}
</style>