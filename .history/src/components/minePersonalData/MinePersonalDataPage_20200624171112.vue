<template>
  <div>
    <Top>
      <template v-slot:default>个人资料</template>
    </Top>
    <van-field v-model="nickname" label="githup"></van-field>
    <van-field v-model="nickname" label="头像">
     <template #right>
         <van-image
          round
          width="4rem"
          height="4rem"
          :src="('https://img.yzcdn.cn/vant/cat.jpeg')"
          class="m-t-30"
        />
     </template>
    </van-field>
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