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
    <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" readonly/>
    <van-field v-model="nickname" name="昵称" label="昵称" placeholder="昵称" />
    <van-field v-model="gender" name="性别" label="性别" placeholder="性别" />
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
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      user: "",
      userInfo: {},
      username: "",
      nickname: "",
      date: "",
      email: "",
      gender: "",
      year: "",
      month: "",
      day: "",
      id: "",
      showPicker: false,
      minDate: new Date(1950, 0, 1),
      maxDate: new Date(2021, 0, 31),
      currentDate: new Date(),
      currentUser: {},
      personal: {}
    };
  },
  methods: {
    //出生年月
    onConfirm() {
      this.date = dayjs(this.currentDate).format("YYYY年MM月DD日");
      // this.year = dayjs(this.currentDate).format("YYYY");
      // this.month = dayjs(this.currentDate).format("MM");
      // this.day = dayjs(this.currentDate).format("DD");
      this.showPicker = false;
    },
    goBackFn() {
      this.$router.go(-1);
    },
    //保存
    conserve() {
      
     this.$checkLogin(this.goBackFn1);
      let user = {
        gender: this.gender,
        year: this.year,
        month: this.month,
        day: this.day,
        date: this.date,
        id: this.id,
        nickname: this.nickname,
        username: this.username
      };
      localStorage.setItem("personal", JSON.stringify(user));
      console.log(user);
      Toast('保存成功')
    },
    //取消
    cancel() {
      this.$router.back(); //返回上一步
    }
  },
  mounted() {
    if (localStorage.personal) {
      this.user = JSON.parse(localStorage.getItem("personal"));
      this.username = this.user.username;
      this.nickname = this.user.nickname;
      this.gender = this.user.gender;
      this.date = this.user.date;
      this.id = this.user.id;
    } else {
      this.$api.getQueryUser().then(res => {
        // console.log(res.userInfo);
        this.username = res.userInfo.username;
        this.gender = res.userInfo.gender;
        this.nickname = res.userInfo.nickname;
        this.id = res.userInfo._id;
        //  this.year=res.userInfo.year
        //  this.month=res.userInfo.month
        //  this.day=res.userInfo.day
        this.date = `${res.userInfo.year}年${res.userInfo.month}月${res.userInfo.day}日`;
      });
    }
  },
  watch: {},
  computed: {
  }
};
</script>

<style scoped lang='scss'>
.conserve {
  width: 300px;
  height: 40px;
  background: rgb(7, 193, 96);
  border-radius: 5px;
  border: none;
  color: #fff;
  border: 1px solid rgb(245, 246, 247);
  margin-top: 40px;
}
.cancel {
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(245, 246, 247);
  margin-top: 10px;
}
</style>