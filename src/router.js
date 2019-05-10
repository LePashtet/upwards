import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/adminpanel/:id',
      name: 'admin',
      component: () => import('./views/admin.vue'),
    },
    {
      path: '/entrance/:id',
      name: 'entrance',
      component: () => import('./views/entrance_page.vue'),
    },
    {
      path: '/entrance/log_in/confirm',
      name: 'confirmation',
      component: () => import('./views/confirmation.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('./views/entrance_page.vue'),
    // },
    {
      path: '/event',
      name: 'event',
      component: () => import('./views/Events.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: () => import('./views/welcome.vue'),
    },
    {
      path: '/forum',
      name: 'forum',
      component: () => import('./views/Forum.vue'),
    },
    {
      path: '/forum/ask',
      name: 'forum',
      component: () => import('./views/Forum.vue'),
    },
    {
      path: '/myaccount',
      name: 'profile',
      component: () => import('./views/Profile.vue'),
    },
    {
      path: '/myaccount/settings/:id',
      name: 'profile_settings',
      component: () => import('./views/Profile_Settings.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./components/Forum/forum_view.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
