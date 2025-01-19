import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { MooviesAPI, type IMooviesList } from '@/api'
import { removeDuplicateMooviesByParams } from '@/utils'

export interface MovieData {
  date: string
  count: number
}

const STORE_ID = 'DISCOVER_MOOVIES_STORE'

export const useDiscoverMoviesStore = defineStore(STORE_ID, () => {
  const moovies = ref<IMooviesList['results']>([])
  const currentPage = ref(1)
  const totalPages = ref(0)
  const wasLoadedOnce = ref(false)
  const loading = ref(false)

  async function load(params: Record<string, unknown> = {}) {
    try {
      const response = await MooviesAPI.getDiscoverMoovie(params)
      const data = removeDuplicateMooviesByParams(response.results, 'id')

      moovies.value = data
      totalPages.value = response.total_pages
      currentPage.value = response.page
      wasLoadedOnce.value = true

      return data
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
    load,
  }
})
