<script setup lang="ts">
const minThumb = ref(0)
const maxThumb = ref(0)
const minValue = ref(100)
const maxValue = ref(900)
const min = ref(0)
const max = ref(1000)
const step = 10
// const showLeftTooltip = ref(false)
// const showRightTooltip = ref(false)

const handleMinInput = () => {
  minValue.value = Math.min(minValue.value, maxValue.value)
  minThumb.value = ((minValue.value - min.value) / (max.value - min.value)) * 100
}

const handleMaxInput = () => {
  maxValue.value = Math.max(maxValue.value, minValue.value)
  maxThumb.value = ((maxValue.value - min.value) / (max.value - min.value)) * 100
}

// watch(minValue, (val) => {
//   show
// })

onMounted(() => {
  handleMinInput()
  handleMaxInput()
})

</script>

<template>
  <div class="relative w-full h-10">
    <input
      v-model="minValue"
      type="range"
      :step="step"
      :min="min"
      :max="max"
      class="absolute pointer-events-none appearance-none z-1 w-full h-full opacity-0 cursor-pointer"
      @input="handleMinInput"
    />

    <input
      v-model="maxValue"
      type="range"
      :step="step"
      :min="min"
      :max="max"
      class="absolute pointer-events-none appearance-none z-1 w-full h-full opacity-0 cursor-pointer"
      @input="handleMaxInput"
    />

    <div class="relative h-full">
      <!-- Track -->
      <div class="absolute left-0 w-full h-full top-0 flex items-center">
        <!-- SLOT for tracker -->
        <div class="rounded-full bg-gray-100 dark:bg-gray-700 h-4 w-full"></div>
      </div>

      <div class="absolute top-0 h-full left-5 right-5">
        <div
          class="absolute top-0 bottom-0 flex items-center"
          :style="`left: ${minThumb}%; right: calc(100% - ${maxThumb}%)`"
        >
          <!-- SLOT for hightlight -->
          <div
            class="rounded-md bg-green-500 vuwi-progress-stripeXXXX vuwi-progressXXXX w-full h-4"
          ></div>
        </div>
      </div>

      <!-- LEFT -->
      <!-- 40px is the size of the thumb -->
      <div class="absolute mt-5 ml-5" style="width: calc(100% - 40px)">
        <div class="absolute" :style="`left: ${minThumb}%`">
          <div class="absolute group vuwi-mc h-10 w-10 bg-amber-400 rounded-full vuwi-mc">
            <div class="block absolute bottom-12 text-center vuwi-bc bg-black px-2 py-1 font-bold text-sm rounded-lg min-w-10">{{ minValue }}</div>
          </div>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="absolute mt-5 ml-5" style="width: calc(100% - 40px)">
        <div
          class="absolute vuwi-mc h-10 w-10 bg-amber-400 rounded-full"
          :style="`left: ${maxThumb}%`"
        >
          <div class="block absolute bottom-12 text-center vuwi-bc bg-black px-2 py-1 font-bold text-sm rounded-lg min-w-10">{{ maxValue }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
input[type="range"]::-webkit-slider-thumb {
  pointer-events: all;
  width: 24px;
  height: 24px;
  -webkit-appearance: none;
}

/* https://www.cssportal.com/style-input-range/ */
input[type="range"] {
  -webkit-appearance: none;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: #ff96ab;
}

input[type="range"]::-webkit-slider-thumb {
  @apply h-full w-10;
  background: #ffff00;
  cursor: pointer;
}
</style>
