<script lang="ts">
export default {
  name: 'AppHeader',
}
</script>

<script setup lang="ts">
import { ERouteName } from '@/router'
import { useI18n } from 'vue-i18n'
import AppHeaderPopup from '@ui/components/shared/AppHeaderPopup/index.vue'

const { t } = useI18n()
</script>

<template>
  <header class="h-12 px-4 flex items-center gap-6 bg-white">
    <div class="text-2xl">
      {{ t('app.title') }}
    </div>

    <nav class="flex items-center justify-between flex-grow shrink-0 gap-4">
      <ul class="flex items-center gap-4 flex-grow shrink-0">
        <li>
          <router-link
            :to="{
              name: ERouteName.POPULAR_MOVIES,
              params: { pageId: 1 },
            }"
          >
            {{ t('nav.popular') }}
          </router-link>
        </li>
        <li>
          <AppHeaderPopup />
        </li>
      </ul>
    </nav>
  </header>
</template>
