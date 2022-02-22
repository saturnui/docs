<script setup lang="ts">
const selectedTabIndex = ref(0)
const tabs = [
  { label: 'Crew' },
  { label: 'Logs' },
  { label: 'Comm' },
]

const badges = reactive([
  // { label: 'Home', url: '/demo/badge_8.png' },
  { enabled: true, label: 'Comm', url: '/demo/badge_1_white.png' },
  { enabled: false, label: 'Defense', url: '/demo/badge_2_white.png' },
  { enabled: true, label: 'Exploration', url: '/demo/badge_7_white.png' },
  { enabled: false, label: 'Navigation', url: '/demo/badge_5_white.png' },
  { enabled: true, label: 'Robotics', url: '/demo/badge_9_white.png' },
  { enabled: false, label: 'Crew', url: '/demo/badge_6_white.png' },
  // { enabled: false, label: 'Visitor Logs', url: '/demo/badge_10.png' },
  // { enabled: false, label: 'Travel Logs', url: '/demo/badge_11.png' },
])
</script>

<template>
  <div>
    <VTooltip show="focus" placement="top" target=".tab" class="relative flex-grow">
      <template #tooltip>
        <div class="w-70 space-y-3">
          <DemoTooltip
            title="Tab Component"
            link="/components/tabs"
          >Use the tab component to organize content and hiding content that is not pertinent at the time.</DemoTooltip>
        </div>
      </template>

      <div class="sa-tab-container">
        <!-- Tab items -->
        <div
          v-for="(item, index) in tabs"
          :key="item.label"
          class="tab px-6 py-2 border-3 border-b-0 border-transparent rounded-t-lg duration-300 whitespace-nowrap z-1"
          :class="{ '!border-white sa-bg text-white font-bold': selectedTabIndex === index }"
          tabindex="0"
          @click="selectedTabIndex = index"
        >{{ item.label }}</div>
        <div class="sa-tab-border-spacer sa-border"></div>
      </div>
    </VTooltip>
    <VCarousel
      v-model="selectedTabIndex"
      slider-class="scroll-smooth"
      class="sa-card p-4 overflow-hidden"
      :class="{ '!rounded-tl-none': selectedTabIndex === 0 }"
    >
      <VCarouselItem
        v-for="i in 3"
        :key="i"
        class="tab-item flex justify-center items-center w-full h-full"
        tabindex="0"
      >
        <div class="grid gap-6 pt-4">
          <div class="flex flex-wrap gap-4 justify-center">
            <VTooltip
              v-for="badge in badges"
              :key="badge.label"
              class="relative w-20 h-20"
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
                :class="{ 'bg-white opacity-100': badge.enabled }"
              >
                <img :src="badge.url" class="w-18 h-18 filter drop-shadow-md" />
              </div>
            </VTooltip>
          </div>
          <div class="grid grid-cols-3 gap-4 text-sm border-2 border-white rounded-lg p-6">
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
            <VButton size="lg" class="bg-white text-blue-500 w-full">Apply Settings</VButton>
          </div>
        </div>
      </VCarouselItem>
      <!-- <VCarouselItem class="flex justify-center items-center w-full h-full">Hello, world 2</VCarouselItem>
      <VCarouselItem class="flex justify-center items-center w-full h-full">Hello, world 3</VCarouselItem>-->
    </VCarousel>
    <!-- </VTooltip> -->
  </div>
</template>
