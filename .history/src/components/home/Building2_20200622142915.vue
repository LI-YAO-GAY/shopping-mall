<template>
  <div>
    <div class="flex a-center">
      <div class="num flex a-center j-center">
        <slot name="num"></slot>
      </div>
      <div class="title">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="flex">
      <div>
        <div class="pic0">
          <img :src="floor2[0].image" alt class="w100p" />
        </div>
        <div class="pic1">
          <img :src="floor2[1].image" alt class="w100p" />
        </div>
      </div>
      <div>
        <div class="pic2">
          <img :src="floor2[2].image" alt class="w100p" />
        </div>
        <div class="pic3">
          <img :src="floor2[3].image" alt class="w100p" />
        </div>
        <div class="pic4">
          <img :src="floor2[4].image" alt class="w100p" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    floor2: {
      type: Array
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
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
</style>