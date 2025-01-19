<script lang="ts">
export default {
  name: 'MooviePagination',
}
</script>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Props {
  modelValue: number
  totalPages: number
  visibleRange?: number
}

const props = withDefaults(defineProps<Props>(), {
  visibleRange: 5,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const currentPage = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newValue) => {
    currentPage.value = newValue
  },
)

const visiblePages = computed(() => {
  const halfRange = Math.floor(props.visibleRange / 2)
  let start = Math.max(currentPage.value - halfRange, 1)
  const end = Math.min(start + props.visibleRange - 1, props.totalPages)

  if (end - start + 1 < props.visibleRange) {
    start = Math.max(end - props.visibleRange + 1, 1)
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
})

function goToPage(page: number) {
  if (page >= 1 && page <= props.totalPages) {
    emit('update:modelValue', page)
  }
}
</script>

<template>
  <nav class="flex items-center justify-center space-x-2">
    <button
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="px-4 py-2 rounded-md border bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50"
    >
      {{ t('shared.prev') }}
    </button>

    <button
      v-for="page in visiblePages"
      :key="page"
      @click="goToPage(page)"
      :class="[
        'px-4 py-2 rounded-md border',
        currentPage === page
          ? 'bg-blue-500 text-white'
          : 'bg-white text-gray-600 hover:bg-gray-100',
      ]"
    >
      {{ page }}
    </button>

    <button
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="px-4 py-2 rounded-md border bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50"
    >
      {{ t('shared.next') }}
    </button>
  </nav>
</template>
