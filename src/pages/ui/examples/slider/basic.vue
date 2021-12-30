<script setup lang="ts">
const minVal = ref(20)
const maxVal = ref(180)

const busy = ref(false)
let tooltipTimer: any

watch(minVal, () => {
  clearTimeout(tooltipTimer)
  setTimeout(() => busy.value = false, 1000)
  if (!busy.value) busy.value = true
})
</script>

<template>
  <div class="grid gap-6">
    <VuwiSlider
      v-model:min="minVal"
      v-model:max="maxVal"
      :min-val="0"
      :max-val="200"
      root-class="vuwi-slider-sm"
    ></VuwiSlider>

    <VuwiSlider v-model:min="minVal" v-model:max="maxVal" :min-val="0" :max-val="200"></VuwiSlider>

    <VuwiSlider
      v-model:min="minVal"
      v-model:max="maxVal"
      :min-val="0"
      :max-val="200"
      root-class="vuwi-slider-lg"
    ></VuwiSlider>

    <VuwiSlider
      v-model:min="minVal"
      v-model:max="maxVal"
      :min-val="0"
      :max-val="200"
      root-class="vuwi-slider-xl"
    ></VuwiSlider>

    <VuwiSlider
      v-model:min="minVal"
      v-model:max="maxVal"
      :min-val="0"
      :max-val="200"
      root-class="vuwi-slider-xl"
    >
      <template #highlight>
        <div class="h-full w-full vuwi-progress-stripe vuwi-progress bg-yellow-500 rounded-full"></div>
      </template>

      <template #thumb-left>
        <transition name="fade-up">
          <div v-if="busy" class="block absolute bottom-12">
            <div class="text-center bg-black px-2 py-1 font-bold text-white text-sm rounded-lg min-w-10">
              <span>{{ minVal }}</span>
            </div>
          </div>
        </transition>
        <div v-if="busy" class="w-10 h-10 flex items-center justify-center text-white">
          <div
            class="vuwi-spinner w-8 h-8 min-w-8 min-h-8 border-4 border-blue-400 border-r-transparent"
          />
        </div>
      </template>

      <template #thumb-right>
        <div
          class="w-10 h-10 flex items-center justify-center bg-yellow-600 rounded-full text-white font-bold text-sm"
        >
          {{ maxVal }}
        </div>
      </template>
    </VuwiSlider>
  </div>
</template>
