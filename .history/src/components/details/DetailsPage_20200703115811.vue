<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh"></van-pull-refresh>
    <div class="wrapper" ref="wrapper">
      <div class="main flex a-column">
        <div class="relative">
          <div>
            <van-swipe :autoplay="3000" initial-swipe="0" :stop-propagation="false">
              <van-swipe-item>
                <img :src="obj.image" alt class="w100p" />
              </van-swipe-item>
              <van-swipe-item>
                <img :src="obj.image_path" alt class="w100p" />
              </van-swipe-item>
            </van-swipe>
          </div>
          <div class="back flex a-center j-center color-fff absolute" @click="goBackFn">
            <van-icon name="arrow-left" />
          </div>
        </div>
        <div class="F18 p-t-10 p-l-10 name">{{obj.name}}</div>
        <div class="color-red m-l-10 m-tb-10">￥{{obj.orl_price}}</div>
        <div class="flex j-between font F14 p-lr-10 p-tb-10">
          <div>运费：{{obj.__v}}</div>
          <div>剩余：{{obj.amount}}</div>
          <div>
            <div class="flex a-center collect" v-if="flag === false">
              收藏:
              <van-icon name="like-o" @click="collect" />
            </div>
            <div class="flex a-center collect" v-if="flag === true">
              取消收藏:
              <van-icon name="like" @click="CancelCollect" :class="{'red' : flag===true}" />
            </div>
          </div>
        </div>
        <div class="flex j-between shop m-t-20 p-10">
          <div class="flex a-center">
            <van-icon name="shop-o" size="20px" />
            <div class="F14 m-l-10">有赞的店</div>
            <div class="official color-fff F14 m-l-10">官方</div>
          </div>
          <div class="flex a-center">
            <div class="F14">进入店铺</div>
            <van-icon name="arrow" size="20px" />
          </div>
        </div>
        <div class="flex goods j-around">
          <div class="checkWeight m-b-10">
            <van-tabs v-model="activeName">
              <van-tab title="商品详情" name="a" @click="detail"></van-tab>
              <van-tab title="商品评论" name="b"></van-tab>
            </van-tabs>
          </div>
        </div>
        <div v-html="obj.detail" v-if="activeName === 'a'"></div>
        <div v-if="activeName === 'b'">
          <div>
            <div v-for="(item3,index3) in evaluateItem" :key="index3">
              <van-card class="relative">
                <template #thumb>
                  <van-image
                    round
                    width="3rem"
                    height="3rem"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                    class="m-t-10"
                  />
                </template>
                <template #title>
                  <div class="flex a-center j-between m-t-20">
                    <div class="F16 m-l-10" v-if="item3.anonymous===true">匿名用户:</div>
                    <div class="F16 m-l-10" v-if="item3.anonymous===false">小白</div>
                    <div class="F14 m-l-10">{{item3.comment_time}}</div>
                  </div>
                </template>
                <template #desc>
                  <van-rate
                    v-model="item3.rate"
                    :size="10"
                    color="#ee0a24"
                    void-icon="star"
                    void-color="#eee"
                    class="m-l-10 m-t-20"
                  />
                </template>
                <template #footer>
                  <div class="F14 t-align-l w-o-t MsgContent">评价内容:{{item3.content}}</div>
                </template>
              </van-card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="shop-o" text="购物车" @click="check" :badge="shopList.length" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onAddCartClicked" />
      <van-goods-action-button type="danger" text="立即购买" @click="buyNow" />
    </van-goods-action>
    <van-popup v-model="show" closeable position="bottom" close-icon="close">
      <div class="content">
        <div class="flex">
          <div class="shett-img m-t-10 m-l-10">
            <img :src="obj.image" alt class="w100p popup-img" />
          </div>
          <div>
            <div class="m-t-40 m-l-10">{{obj.name}}</div>
            <div class="color-red m-tb-5 m-l-10">￥{{obj.orl_price}}</div>
          </div>
        </div>
        <div class="flex a-center second m-t-20">
          <div>
            <div class="m-l-10 m-tb-10">购买数量:</div>
            <div class="F14 color-999 m-l-10 m-b-10">
              剩余:{{obj.amount}}件
              <span class="color-red F14 m-l-10">每人限购50件</span>
            </div>
          </div>
          <div class="m-l-40">
            <van-stepper v-model="count" min="1" max="50" @change="changeCount" />
          </div>
        </div>
        <div class="Buy p-tb-10 flex j-center color-fff m-t-40" @click="onBuyClicked">立即购买</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { Toast } from "vant";
export default {
  inject: ["reload"], //自动刷新
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id: "",
      obj: {},
      goods: {},
      flag: false,
      num: 0,
      isLoading: false,
      goodsXP: [
        {
          name: "商品详情"
        },
        {
          name: "商品评论"
        }
      ],
      show: false,
      count: "",
      shopList: [],
      activeName: "a",
      evaluateList: [],
      evaluateItem: [],
      _id: ""
    };
  },
  methods: {
    goBackFn() {
      this.$router.go(-1);
    },
    //商品详情
    getGoodsDetails() {
      this.$api
        .getGoodsDetails(this.id)
        .then(res => {
          // console.log(res.goods.goodsOne);
          this.obj = res.goods.goodsOne;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //收藏
    collect() {
      this.flag = true;
      this.$api
        .getCollection(this.obj)
        .then(res => {
          //上面已经定义了所以直接Obj
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      // this.$checkLogin();
    },
    //取消收藏
    CancelCollect() {
      this.flag = false;
      this.$api
        .getCancelCollection({
          id: this.id
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    detail() {},
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    //没登录跳到购物车的方法
    addshop() {
      this.$router.push("/shoppingCarts");
    },
    //调用没登录跳到购物车的方法
    check() {
      this.$checkLogin(this.addshop);
    },
    //调用没登录跳到详情页的方法
    details() {
      this.$router.push("/details");
    },
    //加入购物车
    onAddCartClicked() {
      this.$checkLogin(this.details);
      this.$api
        .getAddShop(this.id)
        .then(res => {
          console.log(res);
          // console.log(this.id);
          this.reload();
        })
        .catch(err => {
          console.log(err);
        });
      Toast({
        icon: "success",
        message: "添加成功，亲请去购物车查看"
      });
    },
    //立即购买
    buyNow() {
      let user = localStorage.getItem("user");
      if (user === null) {
        this.show = false;
        this.$checkLogin();
      } else {
        this.show = true;
      }
      // this.$checkLogin(this.shoppingPayment);
    },
    //立即购买--点击确定
    onBuyClicked() {
      this.show = false;
      this.$set(this.obj, "count", this.count);
      let arr1 = [];
      arr1.push(this.obj);
      this.$router.push({
        path: "/shoppingPayment",
        query: { arr1, idDirect: true }
      });
      // console.log(this.obj);
      // console.log(this.count);
      localStorage.setItem("details", JSON.stringify(arr1));
      Toast({
        icon: "success",
        message: "立即购买"
      });
    },
    //跳到结算页面的方法
    shoppingPayment() {
      this.$router.push("/shoppingPayment");
    },
    //增减商品数量
    changeCount() {
      this.$api
        .getEditCart({
          count: this.count,
          id: this.id,
          mallPrice: this.mallPrice
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    new BScroll(this.$refs.wrapper, {
      click: true
    });
    this.id = this.$route.query.id;
    this.getGoodsDetails();

    this.$addbrowseList(this.id); //在main.js封装后 调用本地储存请求

    this.$api
      .getIsCollection({
        id: this.id
      })
      .then(res => {
        if (res.isCollection === 0) {
          this.flag = false;
        } else {
          this.flag = true;
        }
      })
      .catch(err => {
        console.log(err);
      });

    this.$api
      .getShoppingCard()
      .then(res => {
        // console.log(res);
        this.shopList = res.shopList;
      })
      .catch(err => {
        console.log(err);
      });
    this.evaluateList = JSON.parse(localStorage.getItem("lookDetails"));
    // console.log(this.evaluateList);
    // this.evaluateList.map(item1 => {
    //   // console.log(item1.cid);
    //   this._id = item1.cid;
    // });
    // // console.log( this.id);
    // if ((this._id = this.id)) {
    //   this.evaluateItem = this.evaluateList;
    // }
    this.evaluateItem = this.evaluateList.filter(item => {
      // console.log(item1.cid);
      return this.id!==item.cid;
      // this._id = item1.cid;
    });
    console.log(this.evaluateItem);
  },
  watch: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  background-size: cover;
}

.wrapper {
  width: 100%;
  height: calc(100vh - 54px);
  overflow: hidden;
}

.back {
  background: rgba(118, 117, 119, 0.9);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  left: 10px;
  top: 10px;
}

.font {
  color: rgb(175, 178, 194);
  border: 1px solid rgb(249, 249, 249);
}

.name {
  border-top: 1px solid rgb(249, 249, 249);
}

.shop {
  border: 1px solid rgb(249, 249, 249);
}

.official {
  background: rgb(255, 68, 68);
  border-radius: 5px;
  padding: 2px;
}

.van-goods-action {
  border-top: 1px solid rgb(249, 249, 249);
}

.red {
  color: red;
}

.collect {
  width: 80px;
}

.shett-img {
  width: 100px;
  height: 100px;
}

.Buy {
  background: rgb(255, 68, 68);
}

.second {
  border-top: 1px solid rgb(249, 249, 249);
  border-bottom: 1px solid rgb(249, 249, 249);
}

.popup-img {
  border: 1px solid rgb(249, 249, 249);
}
.van-card__thumb {
  width: 64px;
  height: 64px;
}
</style>
