import type { BaseHTTPInstance } from '@/api/instance'
import { EMoovieEndpoint } from './endpoints'
import type { IMoovieDetails } from './types'

export const createMooviesApi = (instance: BaseHTTPInstance) => {
  return {
    getPopularMoovies: async () => {
      return instance.get<IMoovieDetails[]>(EMoovieEndpoint.MOOVIE_POPULAR)
    },
    getMoovieById: async (id: number) => {
      return instance.get<IMoovieDetails>(EMoovieEndpoint.MOOVIE, { params: { id } })
    },
  }
}
