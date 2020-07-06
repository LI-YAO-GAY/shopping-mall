<template>
  <div>
    <Top>
      <template v-slot:default>评价中心</template>
    </Top>
     <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
    <van-card :thumb="EvaluateItem.image_path">
      <template #title>
        <div class="m-t-10 F16 m-b-20 m-l-10">商品评分</div>
      </template>
      <template #desc>
        <van-rate
          v-model="value"
          :size="20"
          color="#ee0a24"
          void-icon="star"
          void-color="#eee"
          class="m-l-10"
          @change="onChange"
        />
      </template>
    </van-card>
    <div class="relative">
      <van-field
        v-model="value1"
        :formatter="formatter"
        rows="3"
        autosize
        format-trigger="onBlur"
        type="textarea"
        maxlength="100"
        placeholder="说说你的购买感受吧~~"
      />
      <van-uploader v-model="fileList" multiple class="uploader check_uploader" />
    </div>
    <div class="m-10">
      <van-checkbox v-model="checked">匿名评价</van-checkbox>
    </div>
    <div class="flex j-center m-t-20">
      <van-button type="primary" size="large" @click="Onsubmit">提交</van-button>
    </div>
     </van-pull-refresh>
  </div>
</template>

<script>
import { Toast } from "vant";
import Top from "../../top/Top";
export default {
  name: "",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      EvaluateItem: {},
      value: 0,
      value1: "",
      checked: false,
      fileList: [],
      isLoading: false,

      id: "",
      rate: "",
      content: "", //内容
      anonymous: "", //匿名
      rate: "",
      _id: "",
      order_id: "",
      image: []
    };
  },
  methods: {
    formatter(value) {
      // 过滤输入的数字
      return value.replace(/\d/g, "");
    },
    onChange(value) {
      // console.log(value);
      // this.rate = value
    },
    Onsubmit() {
      this.$api
        .getComment({
          id: this.EvaluateItem.cid,
          rate: this.value,
          content: this.value1,
          anonymous: this.checked,
          _id: this.EvaluateItem._id,
          order_id: this.EvaluateItem.order_id,
          image: this.image
        })
        .then(res => {
          console.log(res);
          Toast({
            icon: "success",
            message: "评价成功"
          });
          this.$router.push('/lookDetails')
        })
        .catch(err => {
          console.log(err);
        });
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  },
  mounted() {
    this.EvaluateItem = this.$route.query.item;
    this.EvaluateItem = JSON.parse(localStorage.getItem("EvaluateItem"));
    // console.log(this.EvaluateItem);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.van-card:not(:first-child) {
  margin: 0px;
}
.uploader {
  position: absolute;
  top: 110px;
  left: 10px;
}

.van-cell {
  height: 200px;
  background: rgb(247, 247, 247);
}
.van-button {
  width: 90%;
}
.van-card {
  background: #fff;
}
.van-pull-refresh {
  height: calc(100vh - 50px);
}
</style>