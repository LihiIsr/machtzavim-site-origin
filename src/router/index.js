  // src/router/index.js
  import { createRouter, createWebHistory } from 'vue-router';
  import Admin from '../components/Admin-Section.vue'; // Assuming you have a Home component

  const routes = [
   
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
  ];

  const router = createRouter({
    history: createWebHistory(), // Or createWebHashHistory() for hash mode
    routes,
  });

  export default router;