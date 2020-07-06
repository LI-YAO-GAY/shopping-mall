<template>
  <div claas="relative">
    <Top>
      <template v-slot:default>购物车</template>
    </Top>
    <div class="wrapper" ref="wrapper">
      <div class="content">
     </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import Top from "../top/Top";
import BScroll from "better-scroll";
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
    changeAll() {
      this.flag = true; //点击之后 显示反选
      this.$refs.checkboxGroup.toggleAll(true); //全部选中
      this.shopList.map(item => {
        item.check = !item.check;
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
            return item.check === true;
          });

          // console.log(arr);
          let arr1 = [];

          arr.map((item, index) => {
            arr1.push(item.cid);
          });
          console.log(arr1);

          this.shopList = this.shopList.filter(function(item) {
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
      this.$router.push("/shoppingPayment");
    },
    //
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
