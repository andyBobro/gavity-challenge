import { createRouter, createWebHistory } from 'vue-router'
import PopularMooviesPage from '@/ui/pages/PopularMooviesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PopularMooviesPage',
      component: PopularMooviesPage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/ui/pages/MooviePage.vue'),
    },
  ],
})

export default router
