<template>
  <aside class="menu is-hidden-touch is-fixed-top has-background-primary has-text-secondary">
          <p class="menu-label">
            <router-link :to="{name:'index', hash:'#accueil'}">
              <img src="@/assets/Logo_Portfolio.png" alt="">
            </router-link>
          </p>
          <ul class="menu-list">
            <li>
              <router-link class="has-text-secondary is-size-5" :to="{name:'index', hash:'#accueil'}">
              Accueil
            </router-link>
            </li>
            <li>
              <router-link class="has-text-secondary is-size-5" :to="{name:'index', hash:'#a_propos'}">
              A Propos
            </router-link>
            </li>
            <li>
            <router-link class="has-text-secondary is-size-5" :to="{name:'index', hash:'#formations'}">
              Mes Formations
            </router-link>
            </li>
            <li>
            <router-link class="has-text-secondary is-size-5" :to="{name:'index', hash:'#competences'}">
              Mes Compétences
            </router-link>
            </li>
            <li>
              <router-link class="has-text-secondary is-size-5" :to="{name:'index', hash:'#portfolio'}">
              Mon Portfolio
            </router-link>
            </li>
            <li>
              <router-link class="has-text-secondary is-size-5" :to="{name:'index', hash:'#contact'}">
              Me Contacter
            </router-link>
            </li>
            <a class="has-text-secondary is-size-5" target="_blank" href="https://www.linkedin.com/in/jessy-provenzal-9a511a214/">LinkedIn</a>
            <a class="has-text-secondary is-size-5" target="_blank" href="https://github.com/PoseidonEUW">GitHub</a>
          </ul>
        </aside>
</template>

<script>
export default {

}
</script>

<style>

</style>