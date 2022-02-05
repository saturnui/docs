<script setup lang="ts">
const val = ref(50)
const busy = ref(false)
let tooltipTimer: any

watch(val, (newVal, oldVal) => {
  clearTimeout(tooltipTimer)
  setTimeout(() => busy.value = false, 1000)
  if (!busy.value && newVal !== oldVal) busy.value = true
})
</script>

<template>
  <div class="grid gap-6">
    <VSlider v-model="val" :min="10" :max="250" step="10" class-name="sa-slider-xl">
      <template #highlight>
        <div class="h-full sa-stripe sa-animate-right sa-progress bg-yellow-500 rounded-full"></div>
      </template>

      <template #thumb-right>
        <div
          class="w-10 h-10 flex items-center justify-center bg-yellow-600 rounded-full text-white font-bold text-sm"
        >{{ val }}</div>
      </template>
    </VSlider>
  </div>
</template>

<style>
.slider-busy {
  @apply w-8 h-8 min-w-8 min-h-8 border-4 border-blue-400 border-r-transparent;
}
</style>
