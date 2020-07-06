<template>
  <div>
    <div class="main m-10 flex j-around">
      <div v-for="item in category" :key="item.id">
        <div class="flex a-column a-center p-tb-10">
          <div class="images">
            <img :src="item.image" class="w100p"/>
          </div>
          <div class="F14 m-t-5">{{item.mallCategoryName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    category: {
      type: Array
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.main{
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 0px 1px 3px #ccc;
}
.images{
  width: 50px;
  height: 50px;
}
</style>