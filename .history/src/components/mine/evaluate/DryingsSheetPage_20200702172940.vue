<template>
  <div>
    <Top>
      <template v-slot:default>评价中心</template>
    </Top>
    <van-card :thumb="EvaluateItem.image_path">
      <template #title>
        <div class="m-t-10 F16 m-b-20 m-l-10">商品评分</div>
      </template>
      <template #desc>
        <van-rate
          v-model="rate"
          :size="20"
          color="#ee0a24"
          void-icon="star"
          void-color="#eee"
          class="m-l-10"
        />
      </template>
    </van-card>
    <div class="relative">
      <van-field
        v-model="value"
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
  </div>
</template>

<script>
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
      rate: 0,
      checked: false,
      fileList: [],
      id: "",
      rate: "",
      value: "",//内容
      anonymous: false,//匿名
      rate: "",
      _id: "",
      order_id: "",
      image: ""
    };
  },
  methods: {
    formatter(value) {
      // 过滤输入的数字
      return value.replace(/\d/g, "");
    },
    check() {
    },
    Onsubmit() {
      this.$api
        .getComment({
          id: this.EvaluateItem.cid,
          rate: this.EvaluateItem.rate,
          content: this.content,
          anonymous: this.checked,
          _id: this.EvaluateItem._id,
          order_id: this.EvaluateItem.order_id,
          image: this.EvaluateItem.image_path
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.EvaluateItem = this.$route.query.item;
    this.EvaluateItem = JSON.parse(localStorage.getItem("EvaluateItem"));
    console.log(this.EvaluateItem);
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
</style>