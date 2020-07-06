<template>
  <div claas="relative">
    <Top>
      <template v-slot:default>购物车</template>
    </Top>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div v-if="shopList.length !== 0">
          <div>
            <van-panel>
              <template #header>
                <div class="flex j-between p-tb-10">
                  <van-checkbox
                    v-if="flag===false"
                    shape="square"
                    v-model="checked"
                    class="m-l-10"
                    @click="changeAll"
                  >全选</van-checkbox>
                  <van-checkbox
                    v-if="flag===true"
                    shape="square"
                    v-model="checked"
                    class="m-l-10"
                    @click="toggleAll"
                  >反选</van-checkbox>
                  <div class="flex a-column m-r-50">
                    <div>合计{{total|fixed}}</div>
                    <div>请确认订单</div>
                  </div>
                </div>
              </template>
            </van-panel>
            <div class="m-t-10 flex j-between m-b-5">
              <div></div>
              <div>
                <span class="m-r-10">
                  <van-button size="small" type="danger" @click="delItem">删除</van-button>
                </span>
                <span class="m-r-10">
                  <van-button size="small" type="danger" @click="shoppingPayment">结算</van-button>
                </span>
              </div>
            </div>
          </div>
          <van-checkbox-group v-model="checkboxGroup" ref="checkboxGroup">
            <van-cell-group>
              <van-cell v-for="(item,index) in shopList" :key="index" clickable>
                <div class="flex a-center item relative">
                  <van-checkbox
                    :name="item.name"
                    ref="checkboxes"
                    shape="square"
                    v-model="item.check"
                    @click="checkItem(item)"
                  />
                  <div class="flex a-center m-l-10 m-b-15" @click="Godetails(item)">
                    <div class="img">
                      <img :src="item.image_path" alt class="w100p" />
                    </div>
                    <div>
                      <div class="color-red m-b-20 F16 m-l-10 name">{{item.name}}</div>
                      <div class="color-red m-l-10 F16">￥{{item.mallPrice}}</div>
                    </div>
                    <van-stepper
                      v-model="item.count"
                      theme="round"
                      button-size="22"
                      disable-input
                      class="stepper"
                      @change="changeCount(item)"
                    />
                  </div>
                </div>
              </van-cell>
            </van-cell-group>
          </van-checkbox-group>
        </div>
        <div v-if="shopList.length == 0" class="flex a-center j-center">
          <div>
            <img src="../../assets/u=3842446086,2230018171&fm=193.jpg" alt class="w100p" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import Top from "../top/Top";
import BScroll from "better-scroll";
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      id: "",
      shopList: [],
      checkboxGroup: [],
      count: "",
      checkAll: false,
      flag: false, //默认显示全选按钮
      checked: false,
      obj: {},
      list: [],
      count: "",
      mallPrice: ""
    };
  },
  methods: {
    // changeAll() {
    //   this.flag = true; //点击之后 显示反选
    //   this.$refs.checkboxGroup.toggleAll(true); //全部选中
    //   this.shopList.map(item => {
    //     item.check = !item.check;
    //   });
    // },
    changeAll() {
      this.flag = true; //点击之后 显示反选
      this.shopList.map(item => {
        if ((item.check = !item.check)) {
          this.$refs.checkboxGroup.toggleAll(true); //全部选中
        }
      });
    },
    toggleAll() {
      this.flag = false; //点击之后  显示全选
      this.$refs.checkboxGroup.toggleAll(); //全部不选中
      this.shopList.map(item => {
        item.check = false;
      });
    },
    changeItem() {
      this.checkAll = this.shopList.every(item => {
        return item.check === true;
      });
    },
    //删除
    delItem() {
      Dialog.confirm({
        title: "提示",
        message: "确定要删除嘛？"
      })
        .then(() => {
          let arr = this.shopList.filter((item, index) => {
            return item.check === true; //返回勾选中的数组
          });

          // console.log(arr);
          let arr1 = [];

          arr.map((item, index) => {
            arr1.push(item.cid);
          });
          console.log(arr1);

          this.shopList = this.shopList.filter(item => {
            return item.check === false;
          });
          this.$api
            .getDeleteShop(arr1)
            .then(res => {
              console.log(res);
              // console.log(8888);
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(() => {
          // on cancel
        });
    },
    //选择
    checkItem(item) {
      item.check = !item.check;
      // console.log(item);
      // console.log(item.check);
    },
    //结算
    shoppingPayment() {
      let arr = this.shopList.filter((item, index) => {
        return item.check === true; //返回勾选中的数组
      });
      // console.log(arr);
      if (arr.length === 0) {
        Toast("亲，还没有商品喔!");
      } else {
        this.$router.push("/shoppingPayment");
      }
    },
    //加减购物车
    changeCount(item) {
      console.log(item);
      this.$api
        .getEditCart({
          count: item.count,
          id: item.cid,
          mallPrice: item.mallPrice
        })
        .then(res => {
          console.log(res);
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
    this.id = this.$route.query.id;
    // console.log(this.id);
    // this.list.push(this.id);
    // console.log(this.list);
    this.$api
      .getShoppingCard()
      .then(res => {
        // console.log(res);
        this.shopList = res.shopList;
      })
      .catch(err => {
        console.log(err);
      });
  },

  watch: {},
  //计算合计
  computed: {
    total() {
      let sum = 0;
      this.shopList.map(item => {
        if (item.check === true) {
          sum += item.mallPrice * item.count;
          console.log(sum);
        }
      });
      return sum;
    }
  },
  //格式  两位小数
  filters: {
    fixed(val) {
      return "￥" + Number(val).toFixed(2);
    }
  }
};
</script>

<style lang="scss" scoped>
.img {
  width: 80px;
  height: 80px;
  border: 1px solid rgb(245, 245, 245);
}

.stepper {
  right: 40px;
  top: 60px;
  position: absolute;
}

.line {
  width: 100%;
  height: 5px;
  background: #fff !important;
  top: 150px;
  position: absolute;
  z-index: 9999;
}

.name {
  width: 210px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.van-checkbox-group {
  margin-bottom: 50px;
}
.wrapper {
  width: 100%;
  height: calc(100vh - 50px);
  overflow: hidden;
}
</style>
