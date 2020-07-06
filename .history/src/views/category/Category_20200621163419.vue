<template>
 <div>
<CategoryPage></CategoryPage>
 </div>
</template>

<script>
import CategoryPage from '../../components/category/CategoryPage'
 export default {
   name: 'Category',
   props: {
   },
   components: {
CategoryPage
   },
   data () {
     return {
     category:[]
     }
   },
   methods: {

   },
   mounted() {
   },
   watch: {

   },
   computed: {
    category(){
      return this.$store.state.category
    }
   }
 }
</script>

<style scoped lang='scss'>

</style>