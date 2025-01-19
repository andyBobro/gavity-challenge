export enum EMoovieEndpoint {
  MOOVIE = '/movie',
  MOOVIE_POPULAR = '/movie/popular',
  DISCOVER = '/discover',
  DISCOVER_MOVIES = `${EMoovieEndpoint.DISCOVER}/movie`,
}
