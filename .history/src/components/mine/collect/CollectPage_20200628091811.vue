<template>
  <div>
    <Top>
      <template v-slot:default>我的收藏</template>
    </Top>
    <div>
    <div v-for="item  in list" :key="item.id">{{item.name}}</div>
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
    return {
    list:[]
    };
  },
  methods: {},
  mounted() {
    // this.$api.getIsCollection(id).then(res=>{
    //   console.log(res);
    // }).catch(err=>{
    //   console.log(err);
    // })
    this.$api.getCollectionList().then(res=>{
      console.log(res);
      this.list = res.list
    }).catch(err=>{
      console.log(err);
    })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>