import { createRouter, createWebHistory } from 'vue-router';
import Reviews from '../views/ReviewsView.vue';
import Transactions from '../views/TransactionsView.vue';
import Ads from '../views/AdsView.vue';
import Exit from '../views/ExitView.vue';
import Profile from '../views/ProfileView.vue';
import Home from '../views/HomeView.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Transactions
  },
  {
    path: '/ads',
    name: 'Ads',
    component: Ads
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: Reviews
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/exit',
    name: 'Exit',
    component: Exit
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
