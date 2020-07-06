<template>
 <div>

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

     }
   },
   methods: {
  getRecommend(){
      this.$api.getRecommend().then(res=>{
      console.log(res)
   }).catch(err=>{
     console.log(err)
   })
  }
   },
   mounted() {
     this.getRecommend()
  //  this.$api.recommend().then(res=>{
  //     console.log(res)
  //  }).catch(err=>{
  //    console.log(err)
  //  })
   this.$api.getRecommend().then(res=>{
      console.log(res)
   }).catch(err=>{
     console.log(err)
   })

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>