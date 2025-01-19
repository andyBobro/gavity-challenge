<script lang="ts">
export default {
  name: 'App',
}
</script>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseLayout from '@/ui/layout/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <RouterView />
  </BaseLayout>
</template>
