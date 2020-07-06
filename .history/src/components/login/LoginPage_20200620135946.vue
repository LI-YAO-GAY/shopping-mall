<template>
  <div>
    <div class="main relative flex j-center">
      <div class="content absolute p-5">
        <div class="F20">登录/注册</div>
        <van-field
          v-model="username"
          left-icon="user-o"
          clearable
          placeholder="USERNAME"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model=" password"
          clearable
          left-icon="edit"
          placeholder="PSAAWORD"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field v-model="phone" label="手机号" placeholder="仅注册需要" />
        <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
          <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
          </template>
        </van-field>
        <div class="flex a-center">
         <div><van-field v-model="sms" center clearable  label="验证码" placeholder="请输入验证码"/>  </div>
         <div class="code">fsfs</div>
        </div>      
        <div style="margin: 16px;">
          <van-button type="primary" native-type="login">登录</van-button>
          <van-button type="danger" native-type="register">注册</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      username: "",
      password: "",
      sms: "",
      phone: ""
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.main {
  width: 100%;
  height: 100vh;
  background: url("../../assets/timg (1).jpg");
  background-size: cover;
}
.content {
  width: 96%;
  background: rgba(255,255,255,0.7);
  top:100px;
}
.van-button {
  margin-right: 10px;
}
.van-field {
  margin-top: 20px;
}
.code{
  width: 100px;
  background:#658;
}
</style>