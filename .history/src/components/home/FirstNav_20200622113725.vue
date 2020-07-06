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
              <div @click="onSearch" v-if="flag===false && list.length===0" class="F14">搜索</div>
              <div @click="cancel" v-if="flag===true || list.length > 0 " class="F14">取消</div>
            </template>
            <template #left>
              <div @click="onCity" class="F14 m-l-5">{{city}}</div>

              <van-icon name="arrow-down" class="m-r-5 F12" />
            </template>
          </van-search>
        </form>

        <div clsass="history">
          <div v-if="flag === true">
            <div class="p-10 h-bottom">搜索历史</div>
            <div v-for="item in history" :key="item.id">{{item}}</div>
          </div>
          <div class="list" v-if="flag===false">
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
      flag: false,
      history: []
    };
  },
  methods: {
    Focus() {
      //定义一个中间变量-默认不显示flag=false，获取焦点=>flag=true显示搜索历史界面，=>flag=false搜索历史界面隐藏，显示列表界面
      this.flag = true;
      let history = localStorage.getItem(this.value);
      this.history = this.value;
      console.log(this.history);
    },
    cancel() {
      //如果没有数组或者获取焦点时，显示取消按钮
      this.flag = false; //点击取消的时候，失去焦点flag=false ,清空数组，清空搜索的内容
      this.list = [];
      this.value = "";
    },
    onSearch(val) {
      //如果存在数组(length=0)并且没有获取焦点时，显示搜索按钮
      this.$api
        .getSearch(this.value)
        .then(res => {
          // console.log(res);
          this.list = res.data.list;
          // console.log(this.list);
          this.flag = false;
          localStorage.setItem("searchValue", this.value);
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
.h-bottom {
  height: 100vh;
}
</style>
