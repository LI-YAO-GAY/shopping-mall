<template>
 <div>
  <van-nav-bar
  title="购物车"
/><div>
  
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

   },
   mounted() {
   this.id = this.$route.query.id
   console.log(this.id);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>