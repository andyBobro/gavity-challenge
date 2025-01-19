import type { BaseHTTPInstance } from '@/api/instance'
import { EMoovieEndpoint } from './endpoints'
import type { IMooviesList, IMoovieDetails } from './types'

export const createMooviesApi = (instance: BaseHTTPInstance) => {
  return {
    getPopularMoovies: async (params: Record<string, unknown> = {}) => {
      return instance.get<IMooviesList>(EMoovieEndpoint.MOOVIE_POPULAR, {
        params,
      })
    },
    getMoovieById: async (id: number) => {
      return instance.get<IMoovieDetails>(`${EMoovieEndpoint.MOOVIE}/${id}`)
    },
  }
}
