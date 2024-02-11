import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import PersonalAccount from '@/views/PersonalAccountView.vue';



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/personalAccount',
    name: 'PersonalAccount',
    component: PersonalAccount
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
