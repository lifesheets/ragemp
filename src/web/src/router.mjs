
// IMPORTS

import { createRouter, createWebHistory } from "vue-router";

import Auth from './components/Auth/Auth.vue';

// CODE

const routes = [
    {
        path: '/',
        component: Auth
    },

    {
        path: '/auth',
        component: Auth
    },
    {
        path: "/:catchAll(.*)",
        component: Auth,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;