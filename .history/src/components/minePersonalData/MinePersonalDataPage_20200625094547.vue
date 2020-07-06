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
    <van-field v-model="name" name="用户名" label="用户名" placeholder="用户名" />
    <van-field v-model="nickname" name="昵称" label="昵称" placeholder="昵称" />
    <van-field v-model="sex" name="性别" label="性别" placeholder="性别" />
    <van-field v-model="email" name="邮箱" label="邮箱" placeholder="邮箱" />
    <van-field
      v-model="date"
      name="出生年月"
      label="出生年月"
      placeholder="选择出生年月"
      clickable
      readonly
      @click="showPicker = true"
    />
    <div class="flex a-column a-center">
    <button class="conserve" @click="conserve">保存</button>
    <button class="cancel" @click="cancel">取消</button>   
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker
        title="选择年月日"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        v-model="currentDate"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import dayjs from "dayjs";
import Top from "../top/Top";
export default {
  name: "",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      user: "",
      userInfo: "",
      name: "",
      nickname: "",
      date: "",
      email: "",
      sex: "",
      year: "",
      month: "",
      day: "",
      showPicker: false,
      minDate: new Date(1950, 0, 1),
      maxDate: new Date(2021, 0, 31),
      currentDate: new Date()
    };
  },
  methods: {
    onConfirm() {
      this.date = dayjs(this.currentDate).format("YYYY年MM月DD日");
      this.showPicker = false;
    },
    //保存
    conserve(){

    },
    //取消
    cancel(){
      this.$router.back()//返回上一步
    }
  },
  mounted() {
    this.$api.getQueryUser().then(res => {
      console.log(res.userInfo);
      this.name = res.userInfo.username;
      this.sex = res.userInfo.gender;
      this.sex = res.userInfo.gender;
      this.nickname = res.userInfo.nickname;
      //  this.year=res.userInfo.year
      //  this.month=res.userInfo.month
      //  this.day=res.userInfo.day
      this.date = `${res.userInfo.year}年${res.userInfo.month}月${res.userInfo.day}日`;
    });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.conserve{
  width: 300px;
  height: 40px;
  background:rgb(7,193,96) ;
  border-radius: 5px;
  border: none;
  color: #fff;
   border: 1px solid rgb(245,246,247);
   margin-top:40px;
}
.cancel{
  width: 300px;
  height: 40px;
   border-radius: 5px;
   border: none;
   background: rgb(255,255,255);
   border: 1px solid rgb(245,246,247);
   margin-top:10px;
}
</style>