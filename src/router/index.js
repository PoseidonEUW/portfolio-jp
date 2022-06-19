import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition){
      return savedPosition;
    }
    else if (to.hash)
    {
      const options = {
        top: document.querySelector(to.hash).offsetTop,
        behavior: 'smooth',
      };
      window.scrollTo(options)
   
    }
    else{
      return {x:0,y:0};
    }
  }
})

export default router
