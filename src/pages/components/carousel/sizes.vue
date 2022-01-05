<script setup lang="ts">
const slideIndex = ref(0)
const slides = [
  'bg-yellow-400 h-25',
  'bg-teal-400 h-25',
  'bg-blue-400  h-50',
  'bg-red-400 h-45',
  'bg-pink-400 h-25',
  'bg-lime-400 h-40',
  'bg-indigo-400 h-65',
]
</script>

<template>
  <VCarousel v-model="slideIndex" vertical slider-class="h-75 scroll-smooth">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="flex items-center justify-center w-full text-4xl text-white wi-carousel-item"
      :class="slide"
    >Slide {{ index + 1 }}</div>
    <template #overlay="{ prevSlide, nextSlide }">
      <div class="absolute top-0 w-full h-full">
        <button
          class="absolute left-4 wi-ml bg-dark-700 wi-btn wi-btn-icon text-white"
          @click="prevSlide(1)"
        >
          <tabler-chevron-left />
        </button>
        <button
          class="absolute wi-mr right-4 bg-dark-700 wi-btn wi-btn-icon text-white"
          @click="nextSlide(2)"
        >
          <tabler-chevron-right />
        </button>
      </div>
    </template>
  </VCarousel>
</template>
