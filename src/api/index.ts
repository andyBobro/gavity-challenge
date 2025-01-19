import { MOOVIE_API_TOKEN, MOOVIE_API_URL } from '@/utils'
import { BaseHTTPInstance } from './instance'
import { createMooviesApi } from './resources'

export const MooviesAPI = createMooviesApi(new BaseHTTPInstance(MOOVIE_API_URL, MOOVIE_API_TOKEN))
