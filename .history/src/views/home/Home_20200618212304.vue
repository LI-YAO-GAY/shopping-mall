<template>
 <div>
<FirstNav></FirstNav>
<Banner :images='images'></Banner>
<Second :category='category'></Second>
 </div>
</template>

<script>
 import FirstNav  from'../../components/home/FirstNav'
 import Banner  from'../../components/home/Banner'
 import Second  from'../../components/home/Second'
 export default {
   name: '',
   props: {
   },
   components: {
   FirstNav,Banner,Second
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
      console.log(this.category);
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