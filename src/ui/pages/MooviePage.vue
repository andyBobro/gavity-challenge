<script lang="ts">
export default {
  name: 'MooviePage',
}
</script>

<script setup lang="ts">
import { useMoovieStore } from '@/store'
import StarRating from '@ui/components/shared/StarRating/index.vue'
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const route = useRoute()
const { t } = useI18n()
const moovieStore = useMoovieStore()

const id = computed(() => {
  return Number(route.params.moovieId)
})

const currentMoovie = computed(() => {
  return moovieStore.moovieById(id.value)
})

onMounted(async () => {
  if (moovieStore.moovieById(id.value)) {
    moovieStore.fetchMoovie(id.value)

    return
  }

  await moovieStore.fetchMoovie(id.value)
})
</script>

<template>
  <div v-if="currentMoovie">
    <h1 class="text-3xl font-bold mb-4">{{ currentMoovie.title }}</h1>

    <div class="flex gap-2 flex-wrap my-2">
      <span
        v-for="genre in currentMoovie.genres"
        :key="genre.id"
        class="border border-gray-200 rounded-md px-2 py-1 bg-white"
      >
        {{ genre.name }}
      </span>
    </div>

    <div class="flex text-lg justify-between flex-wrap mt-auto">
      <StarRating class="text-md" :value="currentMoovie.vote_average" />
    </div>

    <p class="text-md">
      <b>{{ t('page.moovie.overview') }}</b
      >: {{ currentMoovie.overview }}
    </p>
  </div>
</template>
