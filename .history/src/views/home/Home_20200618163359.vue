<template>
 <div>
<HomePage></HomePage>
 </div>
</template>

<script>
 import HomePage  from'../../components/home/HomePage'
 export default {
   name: '',
   props: {
   },
   components: {
   HomePage
   },
   data () {
     return {

     }
   },
   methods: {
  // getRecommend(){
  //     this.$api.getRecommend().then(res=>{
  //     console.log(res)
  //  }).catch(err=>{
  //    console.log(err)
  //  })
  // }
   },
   mounted() {
    //  this.getRecommend()
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