import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import About from '@/components/About';
import Details from '@/components/Details';
Vue.use(Router)

export default new Router({
  mode: 'history', // Removes the hashbang.
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    // NEW 
    {
      path: '/about',
      component: About
    },
    {
      path: '/details/:id/:day',
      component: Details
    }
  ]
})
