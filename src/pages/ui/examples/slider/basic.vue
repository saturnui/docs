<script setup lang="ts">
const minVal = ref(20)
const maxVal = ref(180)
</script>

<template>
  <div class="grid gap-4">
    <VuwiSlider
      v-model:min="minVal"
      v-model:max="maxVal"
      :min-val="0"
      :max-val="200"
      class="w-full"
    ></VuwiSlider>

    <VuwiSlider
      v-model:min="minVal"
      v-model:max="maxVal"
      :min-val="0"
      :max-val="200"
      root-class="vuwi-slider-lg"
      class="w-full"
    ></VuwiSlider>

    <div>{{ minVal }} - {{ maxVal }}</div>
    <div>{{ minVal }} - {{ maxVal }}</div>
    <div>{{ minVal }} - {{ maxVal }}</div>
  </div>
</template>
