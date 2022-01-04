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
  <VCarousel v-model="slideIndex" vertical slider-class="h-75">
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
          @click="prevSlide(2)"
        >
          <tabler-chevron-left />
        </button>
        <div
          class="flex items-center justify-center text-white p-4 bg-gray-700 w-8 h-8 text-xs font-bold"
        >{{ slideIndex + 1 }}</div>
        <button
          class="absolute wi-mr right-4 bg-dark-700 wi-btn wi-btn-icon text-white"
          @click="nextSlide(2)"
        >
          <tabler-chevron-right />
        </button>
      </div>
    </template>
  </VCarousel>

  <div class="wi-tab-container mt-10">
    <div
      v-for="(item, index) in slides"
      :key="index"
      class="wi-tab-container-border wi-border"
      :class="{ 'wi-tab-border-active': slideIndex === index }"
      @click="slideIndex = index"
    >
      <div class="wi-tab">
        <span class="font-medium text-sm">Slide {{ index + 1 }}</span>
      </div>
    </div>
    <div class="wi-tab-border-spacer wi-border"></div>
  </div>
  <div class="border wi-border p-4">
    <VCarousel v-model="slideIndex">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="flex items-center justify-center w-full !h-50 text-4xl text-white wi-carousel-item"
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
          <div
            class="flex items-center justify-center text-white p-4 bg-gray-700 w-8 h-8 text-xs font-bold"
          >{{ slideIndex + 1 }}</div>
          <div class="absolute bottom-3 wi-bc flex gap-2">
            <button
              v-for="(slide, index) in slides"
              :key="slide"
              class="bg-black w-5 h-2 rounded-full bg-opacity-50"
              :class="{ 'bg-light-blue-300 bg-opacity-100': slideIndex === index }"
              @click="slideIndex = index"
            ></button>
          </div>
          <button
            class="absolute wi-mr right-4 bg-dark-700 wi-btn wi-btn-icon text-white"
            @click="nextSlide(1)"
          >
            <tabler-chevron-right />
          </button>
        </div>
      </template>
    </VCarousel>
  </div>
</template>
