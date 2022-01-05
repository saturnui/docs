<script setup lang="ts">
const slideIndex = ref(0)
const slides = [
  'bg-yellow-400',
  'bg-teal-400',
  'bg-blue-400',
  'bg-red-400',
  'bg-pink-400',
  'bg-lime-400',
  'bg-indigo-400',
]
</script>

<template>
  <VCarousel v-model="slideIndex" slider-class="scroll-smooth">
    <!-- Carousel Items -->
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="w-1/3 h-50 text-4xl text-white wi-carousel-item"
    >
      <div class="m-2 wi-center w-full h-full" :class="slide">
        <div>Slide {{ index + 1 }}</div>
      </div>
    </div>
    <template #overlay="{ prevSlide, nextSlide }">
      <div class="absolute top-0 w-full h-full">
        <!-- Navigation Prev -->
        <button
          class="absolute left-4 wi-ml bg-dark-700 wi-btn wi-btn-icon text-white"
          @click="prevSlide(3)"
        >
          <tabler-chevron-left />
        </button>

        <!-- Navigation Next -->
        <button
          class="absolute wi-mr right-4 bg-dark-700 wi-btn wi-btn-icon text-white"
          @click="nextSlide(3)"
        >
          <tabler-chevron-right />
        </button>

        <!-- Navigation Pagination -->
        <!-- <div class="absolute bottom-3 wi-bc flex gap-2">
          <button
            v-for="(slide, index) in slides"
            :key="slide"
            class="bg-black w-5 h-2 rounded-full bg-opacity-50"
            :class="{ 'bg-light-blue-300 bg-opacity-100': slideIndex === index }"
            @click="slideIndex = index"
          ></button>
        </div>-->
      </div>
    </template>
  </VCarousel>
</template>
