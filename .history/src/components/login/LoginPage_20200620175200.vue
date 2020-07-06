<template>
  <div>
    <div class="main relative flex j-center">
      <div class="content absolute">
        <div class="F20">登录/注册</div>
          <van-field
            v-model="nickname"
            left-icon="user-o"
            clearable
            placeholder="USERNAME"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            clearable
            left-icon="edit"
            placeholder="PSAAWORD"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field v-model="phone" label="手机号" placeholder="仅注册需要" />
          <van-field v-model="sms" center clearable label="短信验证码" placeholder="仅注册需要">
            <template #button>
              <van-button
                size="small"
                type="primary"
                native-type="button"
                :disabled="disabled"
                @click="clickGetCode"
              >{{text}}</van-button>
            </template>
          </van-field>
          <div class="flex a-center">
            <div>
              <van-field
                v-model="verify"
                center
                clearable
                label="验证码"
                placeholder="请输入验证码"
                :rules="[{ message: '请填写验证码' }]"
              />
            </div>
            <div class="code" v-html="code" :click="getCode"></div>
          </div>
          <div style="margin: 16px;">
            <van-button type="primary" native-type="submit" :click="Login">登录</van-button>
            <van-button type="danger"  native-type="submit" :click="Register">注册</van-button>
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
      code: "",
      disabled: false,
      text: "发送验证码",
      nickname: "",
      password: "",
      sms: "",
      phone: "",
      verify: ""
    };
  },
  methods: {
    // 回到上一步
    goBackFn() {
      this.$router.go(-1);
    },
    clickGetCode() {
      let time = 60;
      this.disabled = true;
      let timer = setInterval(() => {
        time--;
        this.text = `${time}s后重新发送`;
        if (time === 0) {
          this.disabled = false;
          this.text = "重新发送";
          clearInterval(timer);
        }
      }, 1000);
    },
    getCode() {
      this.$api
        .getVerify()
        .then(res => {
          // console.log(res);
          this.code = res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    Login() {
      this.$api
        .getLogin(this.nickname, this.password, this.verify)
        .then(res => {
          if (res.code === 200) {
            this.$notify("登录成功");
            this.$router.push("/");
          }
          else if (res.code === -1) {
            this.$notify("用户名不存在，请注册");
            // (this.nickname = ""),
            //   (this.password = ""),
            //   (this.phone = ""),
            //   (this.password = ""),
            //   (this.sms = ""),
            //   (this.verify = "");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    Register() {
      //  console.log('submit', values);
      this.$api
        .getRegister(this.nickname, this.password, this.verify)
        .then(res => {
          if (res.code === 200) {
            this.$notify("注册并登录成功");
            this.$router.push("/");
          } else if (res.code === -1) {
            this.$notify("用户名已存在");
            // (this.nickname = ""),
            //   (this.password = ""),
            //   (this.phone = ""),
            //   (this.password = ""),
            //   (this.sms = ""),
            //   (this.verify = "");
          }
          else if (res.code === -2) {
            this.$notify("验证码错误");
            // (this.nickname = ""),
            //   (this.password = ""),
            //   (this.phone = ""),
            //   (this.password = ""),
            //   (this.sms = ""),
            //   (this.verify = "");
          }  else {
            (this.nickname = ""),
              (this.password = ""),
              (this.phone = ""),
              (this.password = ""),
              (this.sms = ""),
              (this.verify = "");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCode();
  },
  watch: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100vh;
  background: url("../../assets/timg (1).jpg");
  background-size: cover;
}

.content {
  width: 90%;
  background: rgba(255, 255, 255, 0.7);
  top: 100px;
  padding: 10px 10px 40px 10px;
}

.van-button {
  margin-right: 10px;
}

.van-field {
  margin-top: 20px;
}

.code {
  width: 140px !important;
  height: 40px !important;
}
</style>
