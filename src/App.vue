<template>
   
  <header>
    <Navbar/>

  </header>
 <body>
  <router-view/>

 </body>
</template>

<script lang="coffee">
import Navbar from '@/components/Navbar.vue'
export default {
  name:'App',
  components:{
    Navbar
  }

}
</script>

<style>

</style>