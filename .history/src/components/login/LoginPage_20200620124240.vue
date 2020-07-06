<template>
  <div>
    <div class="main">
      <div class="content">
        <div class="F20">登录/注册</div>
        <van-field v-model="value1" left-icon="user-o" clearable placeholder="USERNAME" />
        <van-field v-model="value2" clearable left-icon="edit" placeholder="PSAAWORD" />
        <van-field
          v-model="phone"
          required
          label="手机号"
          placeholder="经注册需要"
        />
        <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
          <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
          </template>
        </van-field>
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
      value1: "",
      value2: "",
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
}
</style>