<template>
  <div>
    <div>商品推荐</div>
    <div class="tab" ref="tab">
    <div class="tab_content flex" ref="tabcontent">
      <div class="tab_item" v-for="item in recommend" :key="item.id" ref="tabitem" :gameinfo="item">
        <div class="flex a-column Kbox">
          <div>
            <img :src="item.image" class="images" />
          </div>
          <div class="goodsName">{{item.goodsName}}</div>
          <span>{{item.mallPrice}}</span>
          <span>{{item.Price}}</span>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "",
  props: {
    recommend: {
      type: Array
    }
  },
  components: {},
  data() {
    return {
      selected:'game',
      activeIndex:'game',
    };
  },
  create(){
    this.$nextTick(()=>{
      this.InitTabScroll()
    })
  },
  methods: {
    InitTabScroll(){
      let width= this.recommend.length*100;
      this.$refs.tabcontent.style.width = width+'px'
       this.$nextTick(()=>{
      if(!this.scroll){
        this.scroll = new BScroll(this.$refs.tab,{
          startX:0,
          click:true,
          scrollX:true,
          scrollY:false,//忽略竖直方向的滚动
          eventPassthrough:'vertical'
        })
      }else{
        this.scroll.refresh()
      }
    })
    }
  },
  mounted() {

  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.tab{
  width: 100%;
  white-space: nowrap;
  height: 100px;
}
.tab_content{
  height: 100px;
}
.tab_item{
  display:inline-block;
}
.Kbox{
  border: 1px solid #ccc;
}
.images{
  width: 100px;
  height: 100px;
}
.goodsName{
  overflow: hidden;
}
</style>