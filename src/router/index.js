import {createRouter, createWebHashHistory} from 'vue-router'
import DefaultLayout from '@/views/pages/layout/default.vue'
import Solutions from '@/views/pages/solution/index.vue'
import SolutionDetail from '../views/SolutionDetail.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: DefaultLayout,
            children: [
                {
                    path: '',
                    redirect: '/solutions'
                },
                {
                    path: 'solutions',
                    name: 'solutions',
                    component: Solutions
                },
                {
                    path: 'solutions/:id',
                    name: 'solution-detail',
                    component: SolutionDetail
                }
            ]
        }
    ]
})

export default router
