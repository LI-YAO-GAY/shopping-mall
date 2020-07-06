<template>
  <div>
    <Top>
      <template v-slot:default>个人资料</template>
    </Top>
    <van-field
    v-model="nickname"
    name="用户名"
    label="用户名"
    placeholder="用户名"
  />
  </div>
</template>

<script>
import Top from "../top/Top";
export default {
  name: "",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      nickname:''
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>