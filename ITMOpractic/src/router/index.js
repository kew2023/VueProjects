import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import PersonalAccount from '@/views/PersonalAccountView.vue';
import BasketView from '@/views/BasketView.vue';


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
  {
    path: '/Basket',
    name: 'Basket',
    component: BasketView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
