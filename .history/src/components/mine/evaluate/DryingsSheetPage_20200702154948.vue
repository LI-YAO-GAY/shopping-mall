<template>
  <div>
    <Top>
      <template v-slot:default>评价中心</template>
    </Top>
    <van-card :thumb="Item.image_path">
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
        rows="2"
        autosize
        format-trigger="onBlur"
        type="textarea"
        placeholder="说说你的购买感受吧~~"
        show-word-limit
      />
      <van-uploader :after-read="afterRead" class="uploader" />
    </div>
    <div> <van-radio name="1"></van-radio></div>
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
      Item: {},
      value: 0,
      value2: ""
    };
  },
  methods: {
    formatter(value) {
      // 过滤输入的数字
      return value.replace(/\d/g, "");
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  },
  mounted() {
    this.Item = this.$route.query.item;
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
</style>