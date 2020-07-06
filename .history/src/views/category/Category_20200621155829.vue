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
   this.category = this.$route.query.JSON.parse(category)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>