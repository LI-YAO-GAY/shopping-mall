<template>
  <div>
    <Top>
      <template v-slot:default>评价中心</template>
    </Top>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
      <div>
        <img src="../../../assets/pingjia.jpg" alt class="w100p" />
      </div>
      <div class="flex j-center">
        <div class="nav relative checkWeight">
          <van-tabs v-model="activeName">
            <van-tab title="待评价" name="a" @click="beforeEvalute">
              <div v-for="(item,index) in TobeList" :key="index">
                <div class="flex relative items m-10">
                  <div class="img" @click=" Godetails(item)">
                    <img :src="item.image_path" alt class="w100p" />
                  </div>
                  <div  @click=" Godetails(item)">{{item.name}}</div>
                  <div
                    class="flex a-center color-red border F12 absolute"
                    @click="dryingsSheet(item)"
                  >
                    <van-icon name="more" class="m-lr-5" />
                    <span class="m-r-5">评论晒单</span>
                  </div>
                </div>
              </div>
            </van-tab>
            <van-tab title="已评价" name="b" @click="afterEvalute">
              <div v-for="(item,index) in AlreadyList" :key="index">
                <div class="flex relative items m-10">
                  <div class="img">
                    <img :src="item.image_path" alt class="w100p" />
                  </div>
                  <div>{{item.name}}</div>
                  <div class="flex a-center color-red border F12 absolute">
                    <van-icon name="more" class="m-lr-5" />
                    <span class="m-r-5">评论晒单</span>
                  </div>
                </div>
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </van-pull-refresh>
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
      isLoading: false,
      TobeList: [],
      AlreadyList: [],
      isComment: "",
      activeName: "a"
    };
  },
  methods: {
    beforeEvalute() {},
    afterEvalute() {},
    Godetails(item) {
      console.log(item);
      this.$router.push({ path: "/details", query: { id: item.id } });
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    dryingsSheet(item) {
      // console.log(item);
      this.$router.push({ path: "/dryingsSheet", query: { item } });
    }
  },
  mounted() {
    //未评价
    this.$api
      .getTobeEvaluated()
      .then(res => {
        // console.log(res);
        this.TobeList = res.data.list;
        this.TobeList.map(item => {
          this.isComment = item.isComment;
        });
        // console.log(this.list);
        // console.log(this.isComment);
      })
      .catch(err => {
        console.log(err);
      });
    //已评价
    this.$api
      .getAlreadyEvaluated()
      .then(res => {
        console.log(res);
        this.AlreadyList = res.data.list;
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.nav {
  height: 50px;
  width: 90%;
  border-radius: 5px;
  box-shadow: 0 3px 5px #ccc;
  top: -10px;
}
.line {
  width: 80px;
  height: 3px;
  background: rgb(255, 68, 68);
  border-radius: 1px;
  bottom: 0px;
}
.img {
  width: 80px;
  height: 80px;
}
.border {
  border-radius: 10px;
  border: 1px solid red;
  height: 20px;
  top: 50px;
  right: 10px;
}
.items {
  border-bottom: 1px solid rgb(242, 242, 242);
}
.bottom {
  height: 100%;
}
.van-pull-refresh {
  height: calc(100vh - 50px);
}
</style>