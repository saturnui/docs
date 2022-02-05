<script setup lang="ts">
const slideIndex = ref(0)
const slides = [
  'bg-yellow-400 h-full',
  'bg-teal-400 h-full',
  'bg-blue-400  h-full',
  'bg-red-400 h-full',
  'bg-pink-400 h-full',
]
</script>

<template>
  <VTab>
    <div
      v-for="(_, index) in slides"
      :key="index"
      class="sa-tab-container-border sa-border"
      :class="{ 'sa-tab-border-active': slideIndex === index }"
      @click="slideIndex = index"
    >
      <div class="sa-tab">
        <span class="font-medium text-sm">Slide {{ index + 1 }}</span>
      </div>
    </div>
    <div class="sa-tab-border-spacer sa-border"></div>
  </VTab>
  <VCarousel v-model="slideIndex" class="mt-1">
    <VCarouselItem
      v-for="(slide, index) in slides"
      :key="index"
      class="flex items-center justify-center w-full h-50 text-4xl text-white"
      :class="slide"
    >
      <div>Slide {{ index + 1 }}</div>
    </VCarouselItem>
  </VCarousel>
</template>
