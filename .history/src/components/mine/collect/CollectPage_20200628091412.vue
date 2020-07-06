<template>
  <div>
    <Top>
      <template v-slot:default>我的收藏</template>
    </Top>
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
  mounted() {
    this.$api.getIsCollection().then(res=>{
      console.log(res);
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