<template>
  <div>
    <van-nav-bar title="购物车" />
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
      <div class="m-t-10 flex j-between">
        <div></div>
        <div>
          <span class="m-r-10">
            <van-button size="small" type="danger" @click="delItem">删除</van-button>
          </span>
          <span class="m-r-10">
            <van-button size="small" type="danger">结算</van-button>
          </span>
        </div>
      </div>
    </div>

  
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id: "",
      shopList: [],
      checkboxGroup: [],
      count: "",
      checkAll: false,
      flag: false, //默认显示全选按钮
      checked: false
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
    delItem() {},
    //选择
    checkItem(item) {
      item.check = !item.check;
      // console.log(item);
      // console.log(item.check);
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    // console.log(this.id);
    this.$api
      .getShoppingCard(this.id)
      .then(res => {
        console.log(res);
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

<style scoped lang='scss'>
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
.border {
  border-bottom: 1px solid #fff !important;
}
</style>