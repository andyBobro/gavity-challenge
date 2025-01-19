<script lang="ts">
import { type IMoovieItem } from '@/api/resources/MooviesAPI/types'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { ERouteName } from '@/router'

export default {
  name: 'MoovieGridCard',
}

interface IMoovieGridCardProps {
  item: IMoovieItem
}
</script>

<script setup lang="ts">
import AppStarRating from '@ui/components/shared/AppStarRating/index.vue'
const props = defineProps<IMoovieGridCardProps>()

const { t } = useI18n()
</script>

<template>
  <RouterLink
    :to="{
      name: ERouteName.MOOVIE_DETAILS,
      params: { moovieId: props.item.id },
    }"
    class="flex flex-col gap-2 p-2 bg-white shadow-sm shadow-gray-200"
  >
    <h4 class="text-lg font-bold">{{ props.item.title }}</h4>
    <p class="text-md">{{ props.item.release_date }}</p>
    <div class="flex justify-between flex-wrap mt-auto">
      <AppStarRating class="text-md" :value="props.item.vote_average" />
      <small class="text-sm">({{ t('shared.total') }}: {{ props.item.vote_count }}) </small>
    </div>
  </RouterLink>
</template>
