<template>
 <div>
<FirstNav></FirstNav>
<Banner :images='images'></Banner>
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
     images:[],
     category:[]
     }
   },
   methods: {
  getRecommend(){
      this.$api.getRecommend().then(res=>{
      console.log(res)
      this.images=res.data.slides   
      // console.log(this.images);
      this.category=res.data.category
   }).catch(err=>{
     console.log(err)
   })
  }
   },
   mounted() {
   this.getRecommend()
  //  this.$api.getRecommend().then(res=>{
  //     console.log(res)
  //     this.image=res.data.slides
  //  }).catch(err=>{
  //    console.log(err)
  //  })

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>