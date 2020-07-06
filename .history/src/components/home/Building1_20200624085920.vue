<template>
  <div>
    <div class="flex a-center j-center m-tb-10">
      <div class="num flex a-center j-center m-r-10">
        <slot name="num"></slot>
      </div>
      <div class="title">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="flex floor">
      <div>
        <div v-for="item in floor1.splice(0,1)" :key="item.id">
          <div class="pic0">
            <img :src="item.image" alt class="w100p" @click="GoDetails(item)" />
          </div>
        </div>
        <div v-for="item in floor1.splice(1,2)" :key="item.id">
          <div class="pic1">
            <img :src="item.image" alt class="w100p" @click="GoDetails(item)" />
          </div>
        </div>
      </div>

      <div v-for="item in floor1.splice(2,5)" :key="item.id">
        <div class="pic2">
          <img :src="item.image" alt class="w100p" @click="GoDetails(item)" />
        </div>
        <div class="pic3">
          <img :src="item.image" alt class="w100p" @click="GoDetails(item)" />
        </div>
        <div class="pic4">
          <img :src="item.image" alt class="w100p" @click="GoDetails(item)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    floor1: {
      type: Array
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    GoDetails(item) {
      this.$router.push({ path: "/details", query: { id: this.goodsId } });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.num {
  border-radius: 50%;
  background: rgb(224, 50, 43);
  color: #fff;
  font-size: 12px;
  width: 18px;
  height: 18px;
}
.title {
  color: rgb(224, 50, 43);
}
.floor {
  font-size: 0;
}
</style>