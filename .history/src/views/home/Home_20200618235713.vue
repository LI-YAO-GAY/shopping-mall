<template>
 <div class="bg-333">
<FirstNav></FirstNav>
<Banner :images='images'></Banner>
<Second :category='category'></Second>
<Advert :advertesPicture='advertesPicture'></Advert>
<Recommend :recommend='recommend'></Recommend>
<Building :floor1='floor1' :floor2='floor2'  :floor3='floor3'></Building>
 </div>
</template>

<script>
 import FirstNav  from'../../components/home/FirstNav'
 import Banner  from'../../components/home/Banner'
 import Second  from'../../components/home/Second'
 import Advert  from'../../components/home/Advert'
 import Recommend  from'../../components/home/Recommend'
 import Building  from'../../components/home/Building'
 export default {
   name: '',
   props: {
   },
   components: {
   FirstNav,Banner,Second,Advert,Recommend,Building
   },
   data () {
     return {
     images:[],
     category:[],
     advertesPicture:{},
     recommend:[],
     floor1:[],
     floor2:[],
     floor3:[]
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
      this.recommend=res.data.recommend 
      this.floor1=res.data.floor1
      this.floor2=res.data.floor2
      this.floor3=res.data.floor3
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