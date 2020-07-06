<template>
  <div>
    <Top>
      <template v-slot:default>评价中心</template>
    </Top>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
      <div>
        <img src="../../../assets/pingjia.jpg" alt class="w100p" />
      </div>
      <div class="flex j-center">
        <div class="nav flex a-center j-around relative">
          <span class="p-lr-10 flex a-center a-column" @click="beforeEvalute">
            待评价
            <div v-if="flag===true" class="line absolute"></div>
          </span>
          <span class="p-lr-10 flex a-center a-column" @click="afterEvalute">
            已评价
            <div v-if="flag===false" class="line absolute"></div>
          </span>
        </div>
        <div v-if="isComment===false">
          <div v-for="(item,index) in list" :key="index">
          <div>{{item.name}}</div>
          </div>
        </div>
      </div>
    </van-pull-refresh>
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
      flag: true,
      isLoading: false,
      list: [],
      isComment: ""
    };
  },
  methods: {
    beforeEvalute() {
      this.flag = true;
    },
    afterEvalute() {
      this.flag = false;
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }
  },
  mounted() {
    this.$api
      .getTobeEvaluated()
      .then(res => {
        // console.log(res);
        this.list = res.data.list;
        this.list.map(item => {
          this.isComment = item.isComment;
        });
        console.log(this.list);
        // console.log(this.isComment);
      })
      .catch(err => {
        console.log(err);
      });
  },
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
  background: rgb(255, 68, 68);
  border-radius: 1px;
  bottom: 0px;
}
</style>