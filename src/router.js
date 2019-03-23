import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/entrance/:id',
      name: 'registration',
      component: () => import('./views/entrance_page.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/entrance_page.vue'),
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('./views/Events.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
