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
  <VCarousel ref="carousel" v-model="slideIndex" slider-class="h-50 scroll-smooth">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="flex items-center justify-center w-full text-4xl text-white wi-carousel-item"
      :class="slide"
    >
      <div>Slide {{ index + 1 }}</div>
    </div>
  </VCarousel>
  <div class="pt-4 flex justify-center gap-2">
    <VButton class="border" @click="slideIndex--">Prev</VButton>
    <VButton class="border" @click="slideIndex++">Next</VButton>
  </div>
</template>
