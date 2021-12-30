<script setup lang="ts">
const val = ref([40])
const range = ref([40, 160])
const busy = ref(false)
let tooltipTimer: any

watch(range, (newVal, oldVal) => {
  clearTimeout(tooltipTimer)
  setTimeout(() => busy.value = false, 1000)
  if (!busy.value && newVal[0] !== oldVal[0]) busy.value = true
})
</script>

<template>
  <div class="grid gap-6">
    <VuwiSlider v-model="val" :min="0" :max="200" root-class="vuwi-slider" />
    
    <VuwiSlider v-model="range" :min="0" :max="200" root-class="vuwi-slider-sm" />
    
    <VuwiSlider v-model="range" :min="10" :max="190" />
    
    <VuwiSlider v-model="range" :min="20" :max="180" root-class="vuwi-slider-lg" />
    
    <VuwiSlider v-model="range" :min="10" :max="190" root-class="vuwi-slider-xl" />

    <VuwiSlider v-model="range" :min="0" :max="200" root-class="vuwi-slider-xl">
      <template #highlight>
        <div class="h-full w-full vuwi-progress-stripe vuwi-progress bg-yellow-500 rounded-full"></div>
      </template>

      <template #thumb-left>
        <transition name="fade-up">
          <div v-if="busy" class="block absolute bottom-12">
            <div
              class="slider-tooltip"
            >
              <span>{{ range[0] }}</span>
            </div>
          </div>
        </transition>
        <div v-if="busy" class="w-10 h-10 flex items-center justify-center text-white">
          <div
            class="vuwi-spinner slider-busy"
          />
        </div>
      </template>

      <template #thumb-right>
        <div
          class="w-10 h-10 flex items-center justify-center bg-yellow-600 rounded-full text-white font-bold text-sm"
        >{{ range[1] }}</div>
      </template>
    </VuwiSlider>
  </div>
</template>


<style>
.slider-tooltip {
  @apply text-center bg-black px-2 py-1 font-bold text-white text-sm rounded-lg min-w-10;
}

.slider-busy {
  @apply w-8 h-8 min-w-8 min-h-8 border-4 border-blue-400 border-r-transparent;
}
</style>
