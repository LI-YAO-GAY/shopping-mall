<template>
  <div>
    <div class="flex a-center j-center m-tb-10">
      <div class="num flex a-center j-center  m-r-10">
        <slot name="num"></slot>
      </div>
      <div class="title">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="flex floor" v-for="item in floor1.splice(0,1)" :key="item.id">
      <div>
        <div class="pic0">
          <img :src="item.image" alt class="w100p"  @click="GoDetails" />
        </div>
        <div class="pic1" >
          <img :src="floor1[1].image" alt class="w100p"  @click="GoDetails"  />
        </div>
      </div>
      <div>
        <div class="pic2">
          <img :src="floor1[2].image" alt class="w100p"  @click="GoDetails" />
        </div>
        <div class="pic3">
          <img :src="floor1[3].image" alt class="w100p"  @click="GoDetails" />
        </div>
        <div class="pic4">
          <img :src="floor1[4].image" alt class="w100p"  @click="GoDetails" />
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
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
     GoDetails() {
      this.$router.push({ path: "/details", query: { id: this.goodsId } });
    }
  },
  mounted() {
  },
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
.floor{
  font-size: 0;
}
</style>