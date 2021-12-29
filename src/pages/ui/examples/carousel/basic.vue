<script setup lang="ts">
const slideIndex = ref(0)
const slides = [
  'bg-yellow-600 h-25',
  'bg-teal-600 h-25',
  'bg-blue-600  h-50',
  'bg-red-600 h-45',
  // 'bg-gray-600 h-25',
  // 'bg-yellow-600 h-25',
  // 'bg-teal-600 h-25',
  'bg-blue-600 h-25',
  'bg-red-600 h-40',
  'bg-gray-600 h-65',
]
</script>

<template>
  <div class="relative">
    <VuwiCarousel v-model="slideIndex" vertical slider-class="h-75">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="flex items-center justify-center w-full text-4xl text-white vuwi-carousel-item"
        :class="slide"
      >{{ index + 1 }}</div>
      <template #overlay="{ prevSlide, nextSlide }">
        <div class="absolute top-0 w-full h-full">
          <button
            class="absolute -left-4 vuwi-ml bg-dark-700 vuwi-btn vuwi-btn-icon text-white"
            @click="prevSlide(2)"
          >
            <tabler-chevron-left />
          </button>
          <div
            class="flex items-center justify-center text-white p-4 bg-gray-700 w-8 h-8 text-xs font-bold"
          >{{ slideIndex + 1 }}</div>
          <button
            class="absolute vuwi-mr -right-4 bg-dark-700 vuwi-btn vuwi-btn-icon text-white"
            @click="nextSlide(2)"
          >
            <tabler-chevron-right />
          </button>
        </div>
      </template>
    </VuwiCarousel>

    <div class="vuwi-tab-container mt-10">
      <div
        v-for="(item, index) in slides"
        :key="index"
        class="vuwi-tab-container-border vuwi-border"
        :class="{ 'vuwi-tab-border-active': slideIndex === index }"
        @click="slideIndex = index"
      >
        <div class="vuwi-tab">
          <span class="font-medium text-sm">Slide {{ index + 1 }}</span>
        </div>
      </div>
      <div class="vuwi-tab-border-spacer vuwi-border"></div>
    </div>
    <div class="border vuwi-border p-4">
      <VuwiCarousel v-model="slideIndex">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="flex items-center justify-center w-full !h-50 text-4xl text-white vuwi-carousel-item"
          :class="slide"
        >{{ index + 1 }}</div>
        <template #overlay="{ prevSlide, nextSlide }">
          <div class="absolute top-0 w-full h-full">
            <button
              class="absolute -left-4 vuwi-ml bg-dark-700 vuwi-btn vuwi-btn-icon text-white"
              @click="prevSlide(1)"
            >
              <tabler-chevron-left />
            </button>
            <div
              class="flex items-center justify-center text-white p-4 bg-gray-700 w-8 h-8 text-xs font-bold"
            >{{ slideIndex + 1 }}</div>
            <button
              class="absolute vuwi-mr -right-4 bg-dark-700 vuwi-btn vuwi-btn-icon text-white"
              @click="nextSlide(1)"
            >
              <tabler-chevron-right />
            </button>
          </div>
        </template>
      </VuwiCarousel>
    </div>
  </div>
</template>
