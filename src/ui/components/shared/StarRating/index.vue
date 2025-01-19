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
  <div class="flex items-center">
    <AppIcon
      v-for="rate in props.maxStars"
      :key="rate"
      name="star"
      :class="{
        'text-yellow-500': rate <= props.value,
      }"
    />
  </div>
</template>
