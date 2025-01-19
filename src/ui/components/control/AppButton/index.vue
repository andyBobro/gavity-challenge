<script lang="ts">
export default {
  name: 'AppButton',
}
</script>

<script setup lang="ts"></script>

<template>
  <button
    class="px-2 py-1 rounded-md border border-gray-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
  >
    <slot />
  </button>
</template>
