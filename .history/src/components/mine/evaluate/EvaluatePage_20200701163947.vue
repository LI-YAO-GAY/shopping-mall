<template>
  <div>
    <Top>
      <template v-slot:default>评价中心</template>
    </Top>
     <div><img src="../../../assets/pingjia.jpg" alt="" class="w100p"></div>
     <div class="nav flex a-center j-around">
     <span class="f1">待评价</span>
     <span class="f1">已评价</span>
     </div>
  </div>
</template>

<script>
import Top from '../../top/Top';
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
.nav{
  height: 50px;
  width: 90%;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
}
</style>