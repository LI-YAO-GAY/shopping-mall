<template>
 <div>
 <div class="main">
  <div class="content">
   <div class="F20">登录/注册</div>
   <van-field
    v-model="value1"
    left-icon="user-o"
    clearable
    placeholder="USERNAME"
  />
   <van-field
    v-model="value1"
    left-icon="user-o"
    clearable
    placeholder="USERNAME"
  />
  </div>
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
.main{
  width: 100%;
  height: 400px;
  background: url('../../assets/timg.jpg') no-repeat;
}
.content{
  width: 90%;
  background: #fff;
}
</style>