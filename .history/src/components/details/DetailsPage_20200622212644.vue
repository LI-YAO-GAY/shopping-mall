<template>
 <div>
 <div class="main relative flex j-center">
  <div class="back flex a-center j-center color-fff relative" @click="goBackFn"><van-icon name="arrow-left" /></div>
  haha
 </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
     id:''
     }
   },
   methods: {
      goBackFn() {
      this.$router.go(-1);
    },
   getGoodsDetails(){
     this.$api.getGoodsDetails(this.id).then(res=>{
       console.log(res);
     }).catch(err=>{
       console.log(err);
     })
   }
   },
   mounted() {
    this.id = this.$route.query.id
    this.getGoodsDetails()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.main {
  width: 100%;
  height: 100vh;
  background-size: cover;
}
.back{
  background: rgba(118,117,119,0.9);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  right:170px;
  top:10px;
}
</style>