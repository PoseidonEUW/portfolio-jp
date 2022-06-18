<template>
<section class="hero is-primary is-large">
  
  <!-- Hero head: will stick at the top -->
  <div class="hero-head has-text-secondary">
    <header class="navbar is-fixed-top-desktop">
      <!-- <div class="container"> -->
        <div class="navbar-brand">
          <div class="navbar-item">
            <router-link :to="{name:'index', hash:'#accueil'}">
              <img src="@/assets/Logo_Portfolio.png" alt="">
            </router-link>
          </div>
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="showMobilemenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu is-size-4-desktop" :class="active ? 'is-active' : ''">
          <div class="navbar-end is-flex is-flex-direction-column is-justify-content-flex-start">
            <router-link class="navbar-item" :to="{name:'index', hash:'#accueil'}">
              Accueil
            </router-link>
            <router-link class="navbar-item" :to="{name:'index', hash:'#a_propos'}">
              A Propos
            </router-link>
            <router-link class="navbar-item" :to="{name:'index', hash:'#formations'}">
              Mes Formations
            </router-link>
            <router-link class="navbar-item" :to="{name:'index', hash:'#competences'}">
              Mes Compétences
            </router-link>
            <a class="navbar-item">
              Mon Portfolio
            </a>
            <a class="navbar-item">
              Me Contacter
            </a>
          </div>
        </div>
      <!-- </div> -->
    </header>
  </div>
  
</section>
</template>

<script lang="coffee">

export default {
    name:"Navbar"
    data: ()->
      active:false,
    methods:
      showMobilemenu: ()->
        @active = !@active


    beforeMount: ()->
}
</script>

<style lang="scss">


</style>