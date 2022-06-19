<template>
   
  <header>
    <Navbar/>

  </header>
 <body>
  <div class="columns">
    <div class="column has-background-primary">
      <router-view/>
    </div>
       <Menu/>
  </div>
  

 </body>
</template>

<script lang="coffee">
import Navbar from '@/components/Navbar.vue'
import Menu from '@/components/Menu.vue'
export default {
  name:'App',
  components:{
    Navbar,
    Menu
  }

}
</script>

<style>
.menu {
  position: sticky;
  display: inline-block;
  vertical-align: top;
  max-height: 100vh;
  overflow-y: auto;
  width: 200px;
  top: 0;
  bottom: 0;
  padding: 30px;
}
</style>