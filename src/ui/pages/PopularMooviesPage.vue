<script lang="ts">
export default {
  name: 'PopularMooviesPage',
}
</script>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AppIcon from '@/ui/components/shared/AppIcon/index.vue'
const { t } = useI18n()
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <h1 class="text-3xl flex items-center gap-1">
      <AppIcon name="heart" class="text-red" />
      {{ t('app.title') }}
    </h1>
  </div>
</template>
