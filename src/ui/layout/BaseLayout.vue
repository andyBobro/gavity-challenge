<script lang="ts">
export default {
  name: 'BaseLayout',
}
</script>

<script setup lang="ts">
import AppHeader from '@ui/components/layout/AppHeader/index.vue'
import AppContent from '@ui/components/layout/AppContent/index.vue'
</script>

<template>
  <main class="flex flex-col min-h-screen">
    <AppHeader />
    <AppContent>
      <RouterView />
    </AppContent>
  </main>
</template>
