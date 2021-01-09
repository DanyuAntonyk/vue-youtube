import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            meta: {layout: 'empty'},
            component: () => import('../views/Login.vue')
        },
        {
            path: '/',
            name: 'home',
            meta: {layout: 'main'},
            component: () => import('../views/Home.vue')
        },
        {
            path: '/categories',
            name: 'categories',
            meta: {layout: 'main'},
            component: () => import('../views/Categories.vue')
        }
        ]
})
