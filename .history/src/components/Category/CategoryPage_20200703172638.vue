<template>
  <div>
  <Top>
      <template v-slot:default>商品分类</template>
    </Top>
    <div class="flex main-bottom j-between">
      <div class="flex a-column left a-center">
        <van-sidebar v-model="activeKey">
          <div v-for="(item,index) in categorydata" :key="index">
            <van-sidebar-item
              :title="item.mallCategoryName"
              @click="OnChange(item,index)"
              :class="{'white' : aIndex === index }"
            />
          </div>
        </van-sidebar>
      </div>

      <div class="flex right">
        <div v-if="categorydata.length>0">
          <van-tabs
            v-model="active"
            sticky
            :ellipsis="false"
            @click="onClick "
            class="check_font_weight"
          >
            <van-tab
              v-for="(item1,index1) in categorydata[aIndex].bxMallSubDto"
              :key="index1"
              :title="item1.mallSubName"
              ellipsis="false"
            >
              <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
                <div>
                  <div v-for="(item3,index3) in dataList" :key="index3">
                    <div class="flex line" @click="Godetails(item3)">
                      <div class="m-l-10 img m-tb-10">
                        <img :src="item3.image" class="w100p" />
                      </div>
                      <div class="m-tb-10">
                        <div class="m-b-20 m-l-10 name">{{item3.name}}</div>
                        <span class="color-red m-lr-10">￥{{item3.orl_price}}</span>
                        <span class="F14 zprice color-ccc">{{item3.present_price}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </van-pull-refresh>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Top from "../top/Top"
export default {
  name: "",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      activeKey: "",
      active: "",
      aIndex: "",
      categorydata: [],
      dataList: [],
      id: "",
      num: 0,
      flag: false,
      isLoading: false
    };
  },
  methods: {
    //right_top
    onClick(name, title) {
      console.log(name); //下标
      console.log(title); //标题
      let id = this.categorydata[this.aIndex].bxMallSubDto[name].mallSubId;
      this.$api
        .getClassification(id)
        .then(res => {
          console.log(res);
          this.dataList = res.dataList;
        })
        .catch(err => {
          console.log(err);
        });
    },

    //left
    OnChange(item, index) {
      this.activeKey = 0;
      this.active = 0;
      this.aIndex = index;
      let id = this.categorydata[index].bxMallSubDto[0].mallSubId;
      this.$api
        .getClassification(id)
        .then(res => {
          console.log(res);
          this.dataList = res.dataList;
        })
        .catch(err => {
          console.log(err);
        });
    },
    autoGetData() {
      //这里的第一个if就是判断它是否是从首页点击过来，
      //如果是从首页过来的那么它发请求就要改变他的这个categorydata[this.aIndex]，这里就用首页传过来的数据
      if (!this.$route.query.index) {
        this.aIndex = 0;
        let id = this.categorydata[0].bxMallSubDto[0].mallSubId;
        this.$api
          .getClassification(id)
          .then(res => {
            console.log(res);
            this.dataList = res.dataList;
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        let id = this.categorydata[this.aIndex].bxMallSubDto[0].mallSubId;
        this.$api
          .getClassification(id)
          .then(res => {
            console.log(res);
            this.dataList = res.dataList;
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    Godetails(item3) {
      // console.log(item3);
      this.$router.push({ path: "/details", query: { id: item3.id } });
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }
  },
  mounted() {
    this.categorydata = JSON.parse(localStorage.getItem("categorydata"));
    this.aIndex = this.$route.query.index;
    console.log(this.aIndex);
    // console.log(this.categorydata);
    this.autoGetData();
    // new BScroll(this.$refs.wrapper, {
    //   click: true
    // });
  },
  watch: {},
  computed: {
    // CategoryData() {
    //   return this.$store.state.CategoryData;
    // }
  }
};
</script>

<style scoped lang="scss" >
.category {
  border-bottom: 1px solid rgb(246, 246, 246);
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0px;
}
.left {
  height: 100vh;
  position: fixed;
  left: 0px;
  border-top: 1px solid rgb(246, 246, 246);
}
.right {
  background: rgb(255, 255, 255);
  margin-left: 85px;
  width: calc(100vw - 85px);
}
.img {
  width: 80px;
  height: 80px;
  border: 1px solid rgb(246, 246, 246);
}

.zprice {
  text-decoration: line-through;
}
.name {
  width: 160px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ipt {
  border: none;
  width: 100px;
  border-bottom: 1px solid rgb(246, 246, 246);
  background: rgb(241, 248, 255);
  padding: 10px 0 10px 0;
}
.white {
  background: #ffffff;
}
.van-tabs {
  margin-bottom: 50px;
}
.van-sidebar-item {
  padding: 12px;
}
</style>
