// router.js
import { createRouter, createWebHashHistory } from 'vue-router';

import NavBar from './components/NavBar.vue';
import MainContent from './components/MainContent.vue';
import FooterContent from './components/FooterContent.vue';

const routes = [
    {
      path: '/',
      component: NavBar,
    },
    {
      path: '/about',
      component: MainContent,
    },
    {
      path: '/skills',
      component: MainContent,
    },
    {
      path: '/contact',
      component: FooterContent,
    },
  ];
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  
  export default router;