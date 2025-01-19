<script lang="ts">
export default { name: 'StarRating' }
interface IStarRatingProps {
  value: number
  maxStars?: number
}
</script>

<script setup lang="ts">
import AppIcon from '@/ui/components/shared/AppIcon/index.vue'
const props = withDefaults(defineProps<IStarRatingProps>(), {
  maxStars: 10,
})
</script>

<template>
  <div class="flex items-center gap-2">
    <div class="flex items-center justify-start mr-1">
      <AppIcon
        v-for="rate in props.maxStars"
        :key="rate"
        name="star"
        :class="{
          'text-yellow-600': rate <= props.value,
        }"
      />
    </div>
    <span
      class="text-white px-2 py-1 rounded-lg text-base font-bold"
      :class="{
        'bg-red-500': props.value < props.maxStars / 3,
        'bg-yellow-600':
          props.value >= props.maxStars / 3 && props.value < (props.maxStars * 2) / 3,
        'bg-green-600': props.value >= props.maxStars / 3,
      }"
    >
      {{ Math.round(props.value) }} / {{ props.maxStars }}
    </span>
  </div>
</template>
