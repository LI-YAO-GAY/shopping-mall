<template>
  <div>
    <div class="main flex a-center j-around p-tb-10">
      <div class="main_left">
        <form action="/">
          <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            background="#F2F2F2"
            @search="onSearch"
            @focus="Focus"
          >
            <template #action>
              <div @click="onSearch" class="m-l-10">搜索</div>
            </template>
            <template #left>
              <div @click="onCity">{{city}}</div>

              <van-icon name="arrow-down" class="m-r-20" />
            </template>
          </van-search>
        </form>

        <div  clsass="history">
        <div v-if="flag === true">
          <div class="p-10">搜索历史</div>
        </div>
        <div class="list">
          <div v-for="(item,index) in list" :key="index">
            <div class="list-item p-tb-10 bg-fff p-l-10">{{item.name}}</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      city: "",
      list: [],
      flag: false
    };
  },
  methods: {
    Focus() {
      this.flag = true;
    },
    onSearch(val) {
      this.$api
        .getSearch(this.value)
        .then(res => {
          console.log(res);
          this.list = res.data.list;
          console.log(this.list);
          localStorage.setItem("searchValue", JSON.stringify(this.value));
        })
        .catch(err => {
          console.log(err);
        });
      // Toast(val);
    },
    onCity(val) {
      Toast(val);
    },
    getSomeCity() {
      let _this = this;
      AMap.plugin("AMap.Geolocation", function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: "RB"
        });

        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);

        function onComplete(data) {
          // data是具体的定位信息
          _this.city = data.addressComponent.city;
          console.log(data);
        }

        function onError(data) {
          // 定位出错
        }
      });
    }
  },
  mounted() {
    this.getSomeCity();
  },
  watch: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  background: #f2f2f2;
  position: fixed;
  top: 0;
  z-index: 999;
  .main_left {
    width: 100%;
  }
  .main_right {
    width: 75px;
    border: 1px solid red;
    height: 20px;
  }
}
.van-search__content {
  background: #fff;
}
.van-search {
  padding: 0;
}
.list {
  width: 100%;
}
.list-item {
  width: 100%;
  border-bottom: 1px solid #ccc;
}
.history {
  height: 100vh;
  background: #fff;
}
</style>
