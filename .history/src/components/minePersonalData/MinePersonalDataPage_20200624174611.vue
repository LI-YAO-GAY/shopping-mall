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
        <van-image round width="5rem" height="5rem" :src="require('../../assets/ofjgw2-1kul.jpg')" />
      </template>
    </van-cell>
    <van-field v-model="nickname" name="用户名" label="用户名" placeholder="用户名" />
    <van-field v-model="name" name="昵称" label="昵称" placeholder="昵称" />
    <van-field v-model="sex" name="性别" label="性别" placeholder="性别" />
    <van-field v-model="email" name="邮箱" label="邮箱" placeholder="邮箱" />
    <van-field
      v-model="date"
      name="出生年月"
      label="出生年月"
      placeholder="选择出生年月"
      readonly
      clickable
      @click="showCalendar = true"
    />
    <van-calendar v-model="showCalendar" @confirm="onConfirm" color="#07c160" />
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
      name: "",
      nickname: "",
      date: "",
      email: "",
      sex: "",
      showCalendar: false
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getYear()}${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.showCalendar = false;
      this.date = this.formatDate(date);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>