<script lang="ts">
export default {
  name: 'AppIcon',
}

interface IAppIconProps {
  name: string
}
</script>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps<IAppIconProps>()

const icon = defineAsyncComponent(() => import(`../../../../assets/icons/icon_${props.name}.svg`))
</script>

<template>
  <component :is="icon" v-bind="$attrs" class="svg-icon" />
</template>

<style scoped>
.svg-icon {
  max-width: 1em;
  height: 1em;
}
</style>
