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
        <div></div>
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
      lookDetails: {},
      id1:'',
      id2:''
    };
  },
  methods: {},
  mounted() {
    // this.lookDetails = this.$route.query.id;
    this.lookDetails = JSON.parse(localStorage.getItem("EvaluateItem"));
    console.log(this.lookDetails);
    // this.id1 = this.$route.query.id1;
    // this.id2 = this.$route.query.id2;
    // console.log(this.id);
    // this.$api
    //   .getEvaluateOne({id:this.id1,id:this.id2})
    //   .then(res => {
    //     console.log(res);
    //     this.EvaluateItem=res
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>