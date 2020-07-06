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
    
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>