export interface IMoovieItem {
  adult: boolean
  backdrop_path: string | null // Use `null` if the value can be absent
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | null // Use `null` if the value can be absent
  release_date: string // ISO date format (YYYY-MM-DD)
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface IMooviesList {
  page: number
  results: IMoovieItem[]
  total_pages: number
  total_results: number
}

export interface IMoovieDetails {
  adult: boolean
  backdrop_path: string | null
  belongs_to_collection?: {
    id: number
    name: string
    poster_path: string | null
    backdrop_path: string | null
  }
  budget: number
  genres: {
    id: number
    name: string
  }[]
  homepage: string | null
  id: number
  imdb_id: string | null
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string | null
  popularity: number
  poster_path: string | null
  production_companies: {
    id: number
    logo_path: string | null
    name: string
    origin_country: string
  }[]
  production_countries: {
    iso_3166_1: string
    name: string
  }[]
  release_date: string
  revenue: number
  runtime: number | null
  spoken_languages: {
    english_name: string
    iso_639_1: string
    name: string
  }[]
  status: string
  tagline: string | null
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
