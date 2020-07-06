<template>
 <div>
<FirstNav></FirstNav>
<Banner :images='images'></Banner>
<Second :category='category'></Second>
<Third :advertesPicture='advertesPicture'></Third>
 </div>
</template>

<script>
 import FirstNav  from'../../components/home/FirstNav'
 import Banner  from'../../components/home/Banner'
 import Second  from'../../components/home/Second'
 import Third  from'../../components/home/Third'
 export default {
   name: '',
   props: {
   },
   components: {
   FirstNav,Banner,Second,Third
   },
   data () {
     return {
     images:[],
     category:[],
     advertesPicture:{}
     }
   },
   methods: {
  getRecommend(){
      this.$api.getRecommend().then(res=>{
      console.log(res)
      this.images=res.data.slides   
      // console.log(this.images);
      //console.log(this.category);
      this.category=res.data.category
      this.advertesPicture=res.data.advertesPicture 
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