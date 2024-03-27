import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import SecondPage from '../components/SecondPage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/second',
        name: 'second',
        component: SecondPage
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
