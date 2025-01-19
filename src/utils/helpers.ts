import type { IMoovieItem, IMooviesList } from '@/api'

export function removeDuplicateMooviesByParams(
  moovies: IMooviesList['results'],
  param: keyof IMoovieItem,
) {
  const storage = new Set<IMoovieItem[keyof IMoovieItem]>()

  return moovies.filter((moovie) => {
    return storage.has(moovie[param]) ? false : storage.add(moovie[param])
  })
}
