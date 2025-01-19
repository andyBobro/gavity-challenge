import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { IMooviesList } from '@/api/resources/MooviesAPI/types'
import { MooviesAPI } from '@/api'
import { removeDuplicateMooviesByParams } from '@/utils'

export const STORE_ID = 'POPULAR_MOOVIES_STORE'

export const usePopularMooviesStore = defineStore(STORE_ID, () => {
  const moovies = ref<IMooviesList['results']>([])
  const currentPage = ref(1)
  const totalPages = ref(0)
  const wasLoadedOnce = ref(false)
  const loading = ref(false)

  const fetchPopularMoovies = async (params: Record<string, unknown> = {}) => {
    try {
      console.log(params)

      const response = await MooviesAPI.getPopularMoovies(params)

      moovies.value = removeDuplicateMooviesByParams(response.results, 'id')
      totalPages.value = response.total_pages
      currentPage.value = response.page
      wasLoadedOnce.value = true
    } catch (error) {
      console.error('Failed to fetch popular moovies:', error)
    }
  }

  return {
    moovies: computed(() => moovies.value),
    currentPage: computed(() => currentPage.value),
    totalPages: computed(() => totalPages.value),
    wasLoadedOnce: computed(() => wasLoadedOnce.value),
    loading: computed(() => loading.value),
    fetchPopularMoovies,
  }
})
