  // src/router/index.js
  import { createRouter, createWebHistory } from 'vue-router';
  import Admin from '../components/pages/adminPage';
  import profPage from '../components/pages/profPage.vue';
  import articlesPage from '../components/pages/articlesPage.vue';
  import ourHeshPage from '../components/pages/ourHeshPage.vue';
  import homePage from '../components/pages/homePage.vue'

  const routes = [
     {
      path: '/',
      name: 'Home',
      component: homePage,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/professors',
      name: 'Prof',
      component: profPage,
    },
    {
      path: '/articles',
      name: 'Articles',
      component: articlesPage,
    },
     {
      path: '/heshtalmuyot',
      name: 'Heshtalmuyot',
      component: ourHeshPage,
    },
    
  ];

  const router = createRouter({
    history: createWebHistory(), // Or createWebHashHistory() for hash mode
    routes,
  });

  export default router;