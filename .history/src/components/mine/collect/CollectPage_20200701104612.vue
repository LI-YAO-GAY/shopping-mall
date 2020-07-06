<template>
  <div>
    <Top>
      <template v-slot:default>我的收藏</template>
    </Top>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div v-for="(item,index)  in list" :key="index">
          <div class="flex m-10 a-center">
            <div @click="Godetails(item)" class="flex">
              <div class="img">
                <img :src="item.image_path" alt class="w100p" />
              </div>
              <div class="m-l-10 center">
                <div class="m-b-10">{{item.name}}</div>
                <div class="color-red">￥{{item.present_price}}</div>
              </div>
            </div>
            <div class="icon" @click="del(item,index)">
              <van-icon name="close" />
            </div>
          </div>
          <div class="line" v-if="index!=list.length-1"></div>
        </div>
        <div class="flex a-center j-center m-t-10" v-if="list.length === 0">暂无收藏</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Top from "../../top/Top";
export default {
  inject: ["reload"],  //自动刷新
  name: "",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      list: [],
      listArr: [],
      id: ""
    };
  },
  methods: {
    del(item, index) {
      this.id = item.cid;
      // console.log(item.cid);
      this.$api
        .getCancelCollection({ id: this.id })
        .then(res => {
          console.log(res);
          this.$toast.success("删除成功");
          this.reload();
        })
        .catch(err => {
          console.log(err);
        });
    },
    Godetails(item) {
      // console.log(item);
      this.$router.push({ path: "/details", query: { id: item.cid } });
    }
  },
  mounted() {
    new BScroll(this.$refs.wrapper, {
      click: true
    });
    this.$api
      .getCollectionList()
      .then(res => {
        console.log(res);
        this.list = res.data.list;
      })
      .catch(err => {
        console.log(err);
      });
    // this.list = this.list.filter(item => {
    //   return this.id !== item._id;
    // });
    // localStorage.setItem("list", JSON.stringify(this.list));
    // this.$toast.success("删除成功");
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 80px;
  height: 80px;
  border: 1px solid rgb(245, 245, 245);
}
.line {
  width: 100%;
  height: 1px;
  background: rgb(245, 245, 245);
}
.icon {
  position: relative;
  top: 35px;
  left: 10px;
}
.center {
  width: 230px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.wrapper {
  height: calc(100vh - 50px);
  overflow: hidden;
  background: white;
}
</style>