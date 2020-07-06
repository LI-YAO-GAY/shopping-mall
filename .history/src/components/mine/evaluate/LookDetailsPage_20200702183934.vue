<template>
  <div>
    <Top>
      <template v-slot:default>评价详情</template>
    </Top>
    <van-card thumb="../../../assets/ofjgw2-1kul.jpg">
      <template #title>
        <div class="m-t-10 F16 m-b-20 m-l-10">小白</div>
      </template>
      <template #desc>
        <div>{{EvaluateItem.name}}</div>
      </template>
    </van-card>
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
      EvaluateItem: {},
      id1:'',
      id2:''
    };
  },
  methods: {},
  mounted() {
    // this.EvaluateItem = this.$route.query.item;
    // this.EvaluateItem = JSON.parse(localStorage.getItem("EvaluateItem"));
    // console.log(this.EvaluateItem);
    this.id1 = this.$route.query.id1;
    this.id2 = this.$route.query.id2;
    // console.log(this.id);
    this.$api
      .getEvaluateOne({id:this.id})
      .then(res => {
        console.log(res);
        this.EvaluateItem=res
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
</style>