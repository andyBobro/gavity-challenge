<script lang="ts">
export default {
  name: 'AppHeaderPopup',
}
</script>

<script setup lang="ts">
import AppIcon from '@ui/components/shared/AppIcon/index.vue'
import AppButton from '@ui/components/control/AppButton/index.vue'
import { Chart, Line } from 'vue3-charts'
import { computed, onMounted, reactive, ref } from 'vue'
import { useDiscoverMoviesStore } from '@/store'

const discoverMoviesStore = useDiscoverMoviesStore()
const open = ref(false)
const allReleases = reactive<Record<string, number>>({})

const { offsetWidth } = document.body

const today = new Date()
const startDate = new Date()
startDate.setDate(today.getDate() - 90)
const baseParams = {
  'primary_release_date.gte': startDate.toISOString().split('T')[0],
  'primary_release_date.lte': today.toISOString().split('T')[0],
  aggregate_by: 'primary_release_date',
  sort_by: 'primary_release_date.desc',
}

const chartData = computed(() => {
  return Object.entries(allReleases).map(([date, count]) => ({
    release_date: date,
    viewers: count,
  }))
})

onMounted(async () => {
  await discoverMoviesStore.load({
    page: discoverMoviesStore.currentPage,
    ...baseParams,
  })

  const pages = discoverMoviesStore.totalPages
  for (let i = 1 + 1; i <= pages; i++) {
    const data = await discoverMoviesStore.load({
      page: i,
      ...baseParams,
    })

    const stats =
      data &&
      data.reduce(
        (acc, movie) => {
          acc[movie.release_date] = (acc[movie.release_date] || 0) + 1

          return acc
        },
        {} as Record<string, number>,
      )

    Object.entries(stats as Record<string, number>).forEach(([date, count]) => {
      allReleases[date] = (allReleases[date] || 0) + count
    })
  }
})
</script>

<template>
  <div class="relative">
    <AppButton @click="open = !open">
      <AppIcon name="chart" />
    </AppButton>

    <div
      class="fixed top-12 left-2 right-2 p-2 bg-white border border-gray-300 rounded-md mt-3 shadow-lg shadow-gray-300"
      :class="{
        'opacity-0 pointer-events-none invisible': !open,
      }"
    >
      <Chart :size="{ width: offsetWidth - 32, height: 400 }" class="w-full" :data="chartData">
        <template #layers>
          <Line
            :dataKeys="['release_date', 'viewers']"
            type="monotone"
            :lineStyle="{
              stroke: '#9f7aea',
            }"
          />
        </template>
      </Chart>
    </div>
  </div>
</template>
