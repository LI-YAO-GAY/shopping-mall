<template>
 <div>
<FirstNav></FirstNav>
<Banner></Banner>
 </div>
</template>

<script>
 import FirstNav  from'../../components/home/FirstNav'
 import Banner  from'../../components/home/Banner'
 export default {
   name: '',
   props: {
   },
   components: {
   FirstNav,Banner
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