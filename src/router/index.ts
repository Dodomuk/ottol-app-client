import { createRouter, createWebHistory } from 'vue-router'
import Main from '@components/Main.vue'
import ListUp from '@hybrid/lottery/listup/index.vue'
import ResultPage from '@hybrid/lottery/ResultPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/listup',
            name: 'listup',
            component: ListUp
        },
        {
            path: '/resultpage',
            name: 'resultpage',
            component: ResultPage
        }
    ]
})

export default router
