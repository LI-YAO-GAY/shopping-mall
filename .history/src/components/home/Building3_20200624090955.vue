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
    <!-- <div class="flex floor">
      <div>
        <div class="pic0">
          <img :src="floor3[0].image" alt class="w100p"  @click="GoDetails"/>
        </div>
        <div class="pic1">
          <img :src="floor3[1].image" alt class="w100p"  @click="GoDetails"/>
        </div>
      </div>
      <div>
        <div class="pic2">
          <img :src="floor3[2].image" alt class="w100p"  @click="GoDetails"/>
        </div>
        <div class="pic3">
          <img :src="floor3[3].image" alt class="w100p"  @click="GoDetails"/>
        </div>
        <div class="pic4">
          <img :src="floor3[4].image" alt class="w100p"  @click="GoDetails"/>
        </div>
      </div>
    </div> -->
      <div class="flex floor">
      <div>
        <div v-for="(item,index) in floor3" :key="index">
          <div class="pic0">
            <img v-if="index===0" :src="item.image" alt class="w100p" @click="GoDetails(item)" />
          </div>
          <div class="pic1">
            <img
              v-if="index===floor3.length-1"
              :src="item.image"
              alt
              class="w100p"
              @click="GoDetails(item)"
            />
          </div>
        </div>
      </div>
      <div class="flex a-column">
        <div v-for="(item,index) in floor3" :key="index">
          <div class="pic2">
            <img
              v-if="index !== 0 && index !== floor3.length-1"
              :src="item.image"
              alt
              class="w100p"
              @click="GoDetails(item)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    floor3: {
      type: Array
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {
     GoDetails(item) {
      // this.$router.push("/details");
      this.$router.push({ path: "/details", query: { id: item.goodsId } });
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