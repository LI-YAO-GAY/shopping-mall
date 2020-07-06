<template>
 <div>
 <div>
  <div class="back flex a-center j-center color-fff relative" @click="goBackFn"><van-icon name="arrow-left" /></div>
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

</style>