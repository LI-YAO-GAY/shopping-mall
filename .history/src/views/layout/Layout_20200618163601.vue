<template>
 <div>
 <router-view></router-view>
 <BottomNav></BottomNav>
 </div>
</template>

<script>
import BottomNav from '../../components/layout/BottomNav'
 export default {
   name: '',
   props: {
   },
   components: {
   BottomNav
   },
   data () {
     return {

     }
   },
   methods: {

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