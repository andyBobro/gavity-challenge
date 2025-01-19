<script lang="ts">
export default {
  name: 'MoovieGridCardSkeleton',
}
</script>

<script setup lang="ts"></script>

<template>
  <div class="flex pulse flex-col gap-2 p-2 bg-white shadow-sm shadow-gray-200">
    <h4 class="text-lg w-32 bg-gray-100 rounded-md">{{ '&nbsp;' }}</h4>
    <p class="text-md w-24 bg-gray-100 rounded-md">{{ '&nbsp;' }}</p>
    <div class="w-full flex bg-gray-100 justify-between flex-wrap mt-auto bg">{{ '&nbsp;' }}</div>
  </div>
</template>
