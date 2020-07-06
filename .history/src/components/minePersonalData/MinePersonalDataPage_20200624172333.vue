<template>
  <div>
    <Top>
      <template v-slot:default>个人资料</template>
    </Top>
    <van-field v-model="nickname" label="githup"></van-field>
    <van-cell is-link class="flex a-center">
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="custom-title">头像</span>
      </template>
      <template #default>
        <van-image round width="5rem" height="5rem" :src="require('../../assets/order.gif')" />
      </template>
    </van-cell>
    <van-field v-model="nickname" name="用户名" label="用户名" placeholder="用户名" />
    <van-field v-model="nickname" name="昵称" label="昵称" placeholder="昵称" />
    <van-field v-model="nickname" name="性别" label="性别" placeholder="性别" />
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
      nickname: ""
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