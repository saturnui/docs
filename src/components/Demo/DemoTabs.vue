<script setup lang="ts">
const selectedTabIndex = ref(0)
const tabs = [
  { label: 'Crew' },
  { label: 'Logs' },
  { label: 'Comm' },
]

const badges = reactive([
  // { label: 'Home', url: '/demo/badge_8.png' },
  { enabled: true, label: 'Comm', url: '/demo/badge_1.png' },
  { enabled: false, label: 'Defense', url: '/demo/badge_2.png' },
  { enabled: true, label: 'Exploration', url: '/demo/badge_7.png' },
  { enabled: false, label: 'Navigation', url: '/demo/badge_5.png' },
  { enabled: true, label: 'Robotics', url: '/demo/badge_9.png' },
  { enabled: false, label: 'Crew', url: '/demo/badge_6.png' },
  // { enabled: false, label: 'Visitor Logs', url: '/demo/badge_10.png' },
  // { enabled: false, label: 'Travel Logs', url: '/demo/badge_11.png' },
])
</script>

<template>
  <div>
    <VTooltip show="focus" component="demo-tooltip" target=".tab" class="relative flex-grow">
      <template #tooltip>
        <div class="w-70 space-y-3">
          <DemoTooltip
            title="Tab Component"
            link="/components/tabs"
          >Use the tab component to organize content and hiding content that is not pertinent at the time.</DemoTooltip>
        </div>
      </template>

      <div class="sa-tab-container -space-x-1">
        <!-- Tab items -->
        <div
          v-for="(item, index) in tabs"
          :key="item.label"
          class="tab px-6 py-2 border-2 border-b-0 border-transparent rounded-t-lg duration-300 whitespace-nowrap z-1"
          :class="{ '!border-teal-400 bg-dark-100 dark:bg-dark-700 text-white font-bold': selectedTabIndex === index }"
          tabindex="0"
          @click="selectedTabIndex = index"
        >{{ item.label }}</div>
        <div class="sa-tab-border-spacer sa-border"></div>
      </div>
    </VTooltip>
    <div
      class="demo-card border-2 border-teal-400 bg-dark-100 dark:bg-dark-700"
      :class="{ 'rounded-tl-none': selectedTabIndex === 0 }"
      style="margin-top: -2px;"
    >
      <!-- <VTooltip
        show="focus"
        component="demo-tooltip"
        target=".tab-item"
        placeholder="top"
        class="relative flex-grow"
      >
        <template #tooltip>
          <div class="w-70 space-y-3">
            <DemoTooltip
              title="Carousel Component"
              link="/components/carousel"
            >Use the tab component to organize content and hiding content that is not pertinent at the time.</DemoTooltip>
          </div>
      </template>-->
      <VCarousel
        v-model="selectedTabIndex"
        slider-class="scroll-smooth"
        class="rounded-lg overflow-hidden"
      >
        <VCarouselItem class="tab-item flex justify-center items-center w-full h-full" tabindex="0">
          <div class="grid gap-6 pt-4">
            <div class="flex flex-wrap gap-4 justify-center">
              <VTooltip
                v-for="badge in badges"
                :key="badge.label"
                class="relative w-20 h-20 "
                component="demo-tooltip"
                placement="top"
                show="focus"
                target=".badge"
              >
                <template #tooltip>
                  <div class="w-70 space-y-3">
                    <DemoTooltip
                      title="Masks"
                      link="/styles/masks"
                    >Use masks to alterate the shape of images and components.</DemoTooltip>
                  </div>
                </template>
                <div
                  tabindex="0"
                  class="badge relative p-1 sa-mask-6 opacity-50"
                  :class="{ 'bg-green-500 opacity-100': badge.enabled }"
                >
                  <img :src="badge.url" class="w-18 h-18 filter drop-shadow-md" />
                </div>
              </VTooltip>
            </div>
            <div class="grid grid-cols-3 gap-4 text-sm sa-shade rounded-lg p-6">
              <VTooltip
                v-for="badge in badges"
                :key="badge.label"
                class="relative flex-grow"
                component="demo-tooltip"
                placement="top"
                show="focus"
                target="[type='checkbox']"
              >
                <template #tooltip>
                  <div class="w-70 space-y-3">
                    <DemoTooltip
                      title="Switch Component"
                      link="/components/switch"
                    >Use the switch for boolean-like properties.</DemoTooltip>
                  </div>
                </template>
                <VSwitch v-model="badge.enabled" class="sa-switch-sm">
                  <div class="ml-3">{{ badge.label }}</div>
                </VSwitch>
              </VTooltip>
            </div>
            <div class="flex justify-center">
              <VButton size="lg" class="sa-primary w-full">Apply Settings</VButton>
            </div>
          </div>
        </VCarouselItem>
        <VCarouselItem class="flex justify-center items-center w-full h-full">Hello, world 2</VCarouselItem>
        <VCarouselItem class="flex justify-center items-center w-full h-full">Hello, world 3</VCarouselItem>
      </VCarousel>
      <!-- </VTooltip> -->
    </div>
  </div>
</template>
