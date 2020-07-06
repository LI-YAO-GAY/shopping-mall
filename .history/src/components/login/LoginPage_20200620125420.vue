<template>
  <div>
    <div class="main">
      <div class="content p-lr-10 p-t-10">
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
  height: 400px;
  background: url("../../assets/timg.jpg") no-repeat;
}
.content {
  width: 90%;
  background: #fff;
  p
}
.van-button{
  margin-right:10px;
}
  </style>