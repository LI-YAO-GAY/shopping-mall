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
    <van-field
      v-model="value2"
      label="文本"
      :formatter="formatter"
      format-trigger="onBlur"
      placeholder="在失焦时执行格式化"
    />
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
      value: 0
    };
  },
  methods: {},
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
</style>