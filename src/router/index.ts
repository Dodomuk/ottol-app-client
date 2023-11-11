import { createRouter, createWebHistory } from 'vue-router'
import Main from '@components/Main.vue'
import ResultDetailPage from '@hybrid/lottery/ResultDetailPage.vue'
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
            path: '/resultpage',
            name: 'resultpage',
            component: ResultPage
        },
        {
            path: '/resultDetailPage',
            name: 'resultDetailPage',
            component: ResultDetailPage
        }
    ]
})

export default router
