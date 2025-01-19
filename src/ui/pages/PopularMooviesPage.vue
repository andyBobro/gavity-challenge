<script lang="ts">
export default {
  name: 'PopularMooviesPage',
}
</script>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import MoovieGridCard from '@/ui/components/moovie/MoovieGridCard/index.vue'
import MoovieGridCardSkeleton from '@/ui/components/moovie/MoovieGridCardSkeleton/index.vue'
import MooviePagination from '@/ui/components/moovie/MooviePagination/index.vue'
import { usePopularMooviesStore } from '@/store'
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ERouteName } from '@/router'

const { t } = useI18n()
const router = useRouter()
const route = useRoute()
const popularMooviesPageStore = usePopularMooviesStore()

const page = computed(() => {
  return Number(route.params.pageId)
})

onMounted(() => {
  popularMooviesPageStore.fetchPopularMoovies({
    page: page.value,
  })
})

watch(
  () => page.value,
  (newPage) => {
    console.log('new page')

    popularMooviesPageStore.fetchPopularMoovies({ page: newPage })
  },
)

function handlePagination(page: number) {
  router.push({ name: ERouteName.POPULAR_MOVIES, params: { pageId: page } })
}
</script>

<template>
  <h1 class="text-3xl font-bold mb-4">{{ t('page.popular.title') }}</h1>
  <div class="grid grid-cols-4 gap-2 pt-8">
    <template v-if="!popularMooviesPageStore.loading && popularMooviesPageStore.wasLoadedOnce">
      <MoovieGridCard
        v-for="movie in popularMooviesPageStore.moovies"
        :key="movie.id"
        :item="movie"
      />
    </template>
    <template v-else>
      <MoovieGridCardSkeleton v-for="i in 20" :key="i" />
    </template>
  </div>
  <MooviePagination
    class="mt-4"
    :modelValue="popularMooviesPageStore.currentPage"
    :totalPages="popularMooviesPageStore.totalPages"
    @update:modelValue="handlePagination"
  />
</template>
