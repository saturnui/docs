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
  <VCarousel v-model="slideIndex" slider-class="scroll-smooth">
    <!-- Carousel Items -->
    <VCarouselItem
      v-for="(slide, index) in slides"
      :key="index"
      class="flex items-center justify-center w-full h-50 text-4xl text-white"
      :class="slide"
    >
      <div>Slide {{ index + 1 }}</div>
    </VCarouselItem>
    <template #overlay="{ prevSlide, nextSlide }">
      <div class="absolute top-0 w-full h-full">
        <!-- Navigation Prev -->
        <VButton icon class="absolute left-4 wi-ml bg-dark-700 text-white" @click="prevSlide(1)">
          <tabler-chevron-left />
        </VButton>

        <!-- Navigation Next -->
        <VButton icon class="absolute wi-mr right-4 bg-dark-700 text-white" @click="nextSlide(1)">
          <tabler-chevron-right />
        </VButton>

        <!-- Navigation Pagination -->
        <div class="absolute bottom-3 wi-bc flex gap-2">
          <button
            v-for="(slide, index) in slides"
            :key="slide"
            class="bg-black w-5 h-2 rounded-full bg-opacity-30"
            :class="{ '!bg-white bg-opacity-100': slideIndex === index }"
            @click="slideIndex = index"
          ></button>
        </div>
      </div>
    </template>
  </VCarousel>
</template>
