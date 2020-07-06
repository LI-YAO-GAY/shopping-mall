<template>
  <div>
    <Top>
      <template v-slot:default>评价中心</template>
    </Top>
    <div>
      <img src="../../../assets/pingjia.jpg" alt class="w100p" />
    </div>
    <div class="flex j-center">
      <div class="nav flex a-center j-around relative">
        <span class="p-lr-10 flex a-center a-column" @click="beforeEvalute">
          待评价
          <div class="line absolute"></div>
        </span>
        <span class="p-lr-10  flex a-center a-column" @click="afterEvalute">
          已评价
          <div class="line absolute"></div>
        </span>

        <!-- :class="{'line' :flag===true}" -->
      </div>
    </div>
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
      flag: false
    };
  },
  methods: {
    beforeEvalute() {
      this.flag = true;
    },
    afterEvalute() {
      this.flag = false;
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.nav {
  height: 50px;
  width: 90%;
  border-radius: 5px;
  box-shadow: 0 3px 5px #ccc;
  top: -10px;
}
.line {
  width: 80px;
  height: 3px;
  background: red;
  border-radius: 1px;
  bottom:40px;
}
</style>