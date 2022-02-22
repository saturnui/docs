<script setup lang="ts">
const props = defineProps({
  theme: String,
})
const slideIndex = ref(0)

const urls = computed(() => {
  if (props.theme === 'blueprint') {
    return [
      '/demo/alien-planet-drawing.jpg',
      '/demo/alien-planet-drawing.jpg',
      '/demo/alien-planet-drawing.jpg',
      '/demo/alien-planet-drawing.jpg',
      '/demo/alien-planet-drawing.jpg',
    ]
  }
  return [
    'https://media.istockphoto.com/vectors/vector-illustration-on-the-topic-of-outer-space-interstellar-travels-vector-id1152991300?k=20&m=1152991300&s=612x612&w=0&h=N9FS1VEHOvPAtvUAe-YIAbopvIKAl7yNcX1UkSnWxmc=',
    'https://graphiccloud.net/wp-content/uploads/2021/07/Free-Galaxy-Space-Illustration.jpg',
    'https://cdn.dribbble.com/users/15687/screenshots/11110219/media/94ca8f4cf8ebf867e6cdebc5d8966750.png?compress=1&resize=400x300&vertical=top',
    'https://mir-s3-cdn-cf.behance.net/project_modules/fs/c6578b84636997.5d63b6ac9ea2c.jpg',
    'https://img.freepik.com/free-vector/earth-view-night-from-alien-planet-neon-space_33099-1876.jpg?size=626&ext=jpg',
  ]
})
</script>

<template>
  <VCarousel v-model="slideIndex" slider-class="scroll-smooth rounded-2xl" class="sa-card">
    <!-- Carousel Items -->
    <VCarouselItem
      v-for="(url, index) in urls"
      :key="index"
      class="flex justify-center items-center w-full h-full"
    >
      <img :src="url" class="w-full h-90 object-cover" />
    </VCarouselItem>
    <template #overlay="{ prevSlide, nextSlide }">
      <div class="absolute top-0 w-full h-full">
        <!-- Navigation Prev -->
        <VButton icon class="absolute !left-4 sa-ml gallery-nav-btn" @click="prevSlide(1)">
          <tabler-chevron-left />
        </VButton>

        <!-- Navigation Next -->
        <VButton icon class="absolute sa-mr !right-4 gallery-nav-btn" @click="nextSlide(1)">
          <tabler-chevron-right />
        </VButton>

        <div class="absolute sa-br mb-4 mr-4">
          <VTooltip show="focus">
            <template #tooltip>
              <div class="w-70 space-y-3">
                <DemoTooltip
                  title="Carousel Component"
                  link="/components/carousel"
                >Use the carousel for displaying images and content on tabs.</DemoTooltip>
              </div>
            </template>
            <VButton icon>
              <tabler-info-circle class="text-white w-8 h-8" />
            </VButton>
          </VTooltip>
        </div>

        <!-- Navigation Pagination -->
        <div class="absolute !bottom-3 sa-bc flex gap-2">
          <button
            v-for="(url, index) in urls"
            :key="url"
            class="gallery-page-btn"
            :class="{ 'active': slideIndex === index }"
            @click="slideIndex = index"
          ></button>
        </div>
      </div>
    </template>
  </VCarousel>
</template>

<style>
.dark .gallery-page-btn  {
  @apply bg-black w-5 h-2 rounded-full bg-opacity-80;
}

.dark .gallery-page-btn.active  {
  @apply !bg-teal-400 bg-opacity-100;
}

.dark .gallery-nav-btn {
  @apply bg-dark-800 text-white text-xl;
}

.blueprint .gallery-page-btn {
  @apply bg-white w-5 h-2 rounded-full bg-opacity-30;
}

.blueprint .gallery-page-btn.active {
  @apply !bg-white bg-opacity-100;
}

.blueprint .gallery-nav-btn {
  @apply border-3 text-white;
}
</style>
