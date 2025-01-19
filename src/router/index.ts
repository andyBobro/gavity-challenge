import { createRouter, createWebHistory } from 'vue-router'
import PopularMooviesPage from '@/ui/pages/PopularMooviesPage.vue'
import { ERouteName } from './types'
import BaseLayout from '@/ui/layout/BaseLayout.vue'

export * from './types'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ERouteName.ROOT,
      component: BaseLayout,
      redirect: { name: ERouteName.POPULAR_MOVIES, params: { pageId: 1 } },
      children: [
        {
          path: 'popular/:pageId',
          name: ERouteName.POPULAR_MOVIES,
          component: PopularMooviesPage,
        },
        {
          path: 'moovie/:moovieId',
          name: ERouteName.MOOVIE_DETAILS,
          component: () => import('@/ui/pages/MooviePage.vue'),
        },
      ],
    },
    {
      path: '/:catchAll(.*)',
      redirect: { name: ERouteName.ROOT },
    },
  ],
})

export default router
