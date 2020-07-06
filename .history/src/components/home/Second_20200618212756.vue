<template>
  <div>
    <div class="p-10 flex">
      <div v-for="item in category" :key="item.id">
        <div class="flex a-column j-center">
          <div>
            <img :src="item.image" alt />
          </div>
          <div>{{item.mallCategoryName}}</div>
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
</style>