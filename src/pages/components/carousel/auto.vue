<script setup lang="ts">
const slideIndex = ref(0)
const slides = [
  'bg-yellow-400 h-full',
  'bg-teal-400 h-full',
  'bg-blue-400  h-full',
  'bg-red-400 h-full',
  'bg-pink-400 h-full',
]
const slideClass = ref('scroll-smooth')
const { pause, resume, isActive } = useIntervalFn(() => {
  const nextIndex = (slideIndex.value + 1) % slides.length
  if (nextIndex === 0) {
    slideClass.value = ''
    nextTick(() => slideIndex.value = nextIndex)
    setTimeout(() => slideClass.value = 'scroll-smooth')
  } else {
    slideIndex.value = nextIndex
  }
}, 3000)
</script>

<template>
  <VCarousel
    v-model="slideIndex"
    :slider-class="slideClass"
    @mouseenter="pause"
    @mouseleave="resume"
  >
    <!-- Carousel Items -->
    <VCarouselItem
      v-for="(slide, index) in slides"
      :key="index"
      class="flex items-center justify-center w-full h-50 text-4xl text-white"
      :class="slide"
    >
      <div>Slide {{ index + 1 }}</div>
    </VCarouselItem>

    <template #overlay>
      <div class="absolute top-0 w-full h-full pointer-events-none">
        <!-- Navigation Pagination -->
        <div class="absolute bottom-3 wi-bc flex gap-2 pointer-events-auto">
          <button
            v-for="(slide, index) in slides"
            :key="slide"
            class="bg-black w-5 h-2 rounded-full bg-opacity-30"
            :class="{ '!bg-white bg-opacity-100': slideIndex === index }"
            @click="slideIndex = index"
          ></button>
        </div>
      </div>
      <div
        class="absolute top-2 right-2 rounded-lg wi-center wi-shade-strongest w-8 h-8 text-xs font-bold"
      >
        <tabler-player-play v-if="isActive" />
        <tabler-player-pause v-else />
      </div>
    </template>
  </VCarousel>
</template>
