import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { IMoovieDetails } from '@/api/resources/MooviesAPI/types'
import { MooviesAPI } from '@/api'

interface IMoovieState {
  moovies: Record<IMoovieDetails['id'], IMoovieDetails>
  loading: boolean
}

const STORE_ID = 'MOOVIE_STORE'

export const useMoovieStore = defineStore(STORE_ID, () => {
  const state = reactive<IMoovieState>({
    moovies: {},
    loading: false,
  })

  const moovieById = computed(() => {
    return (id: number) => state.moovies[id]
  })

  async function fetchMoovie(id: number) {
    state.loading = true
    try {
      const response = await MooviesAPI.getMoovieById(id)
      state.moovies[id] = response
      state.loading = false
    } catch (error) {
      console.error('Failed to fetch popular moovies:', error)
      state.loading = false
    }
  }

  return {
    fetchMoovie,
    moovieById,
    loading: computed(() => state.loading),
  }
})
