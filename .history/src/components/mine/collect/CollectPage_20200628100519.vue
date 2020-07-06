<template>
  <div>
    <Top>
      <template v-slot:default>我的收藏</template>
    </Top>
    <div>
      <div v-for="(item,index)  in list" :key="index">
        <div class="flex m-10 a-center">
          <div class="img">
            <img :src="item.image_path" alt class="w100p" />
          </div>
          <div class="m-l-10 center">
            <div class="m-b-10">{{item.name}}</div>
            <div class="color-red">￥{{item.present_price}}</div>
          </div>
          <div class="icon" @click="del"><van-icon name="close"/></div>
        </div>
        <div class="line" v-if="index!=list.length-1"></div>
      </div>
    </div>
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
      list: []
    };
  },
  methods: {
    del(){
       this.$api
        .getCancelCollection({ id: this.id })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    // this.$api.getIsCollection(id).then(res=>{
    //   console.log(res);
    // }).catch(err=>{
    //   console.log(err);
    // })
    this.id = this.$route.query.id;
    this.$api
      .getCollectionList()
      .then(res => {
        console.log(res);
        this.list = res.data.list;
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
.icon{
  position: relative;
  top:35px;
  left:10px;
}
.center{
  width: 230px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>