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
          v-model="value"
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
        v-model="value2"
        :formatter="formatter"
        rows="3"
        autosize
        format-trigger="onBlur"
        type="textarea"
        maxlength="100"
        placeholder="说说你的购买感受吧~~"
      />
      <van-uploader v-model="fileList" multiple class="uploader" />
    </div>
    <div class="m-10"><van-checkbox v-model="checked" @click="check">匿名评价</van-checkbox></div>
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
      value: 0,
      value2: "",
      checked: false,
      fileList: []
    };
  },
  methods: {
    formatter(value) {
      // 过滤输入的数字
      return value.replace(/\d/g, "");
    },
    check() {},
    Onsubmit(){
      this.$api.getComment({}).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  mounted() {
    this.EvaluateItem = this.$route.query.item;
    this.EvaluateItem = JSON.parse(localStorage.getItem('EvaluateItem'))
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
}
.van-button {
  width: 90%;
}
</style>