<template>
 <div>
<FirstNav></FirstNav>
 </div>
</template>

<script>
 import FirstNav  from'../../components/home/FirstNav'
 export default {
   name: '',
   props: {
   },
   components: {
   FirstNav
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