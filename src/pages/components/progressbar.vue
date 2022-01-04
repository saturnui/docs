<script setup lang="ts">
import ProgressBarBasic from './progress/bar/basic.vue'

const percent = ref(35)
const animate = ref(false)
let timer: any

watch(animate, (v: boolean) => {
  clearInterval(timer)
  if (v) {
    timer = setInterval(() => {
      if (percent.value >= 100) percent.value = 0
      else percent.value += 1
    }, 100)
  }
})

const api = [
  {
    name: 'percent',
    type: 'number',
    defaultVal: 0,
    desc: 'Amount of the bar to display',
  },
]

const sidenavItems = [
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'API', anchor: '#api' },
  { title: 'Style Guide', anchor: '#styles' },
]

const showDrawer = ref(false)
const handleSwipeEnd = (data: { direction: string }) => {
  if (data.direction === 'RIGHT') showDrawer.value = false
}

const mounted = ref(false)
onMounted(async () => {
  mounted.value = true
})
</script>

<template>
  <teleport v-if="mounted" to="#sidenav">
    <Sidenav :data="sidenavItems" />
  </teleport>

  <teleport v-if="mounted" to="#sidemenu">
    <VOverlay v-model="showDrawer" position="right" @swipe:end="handleSwipeEnd">
      <div class="h-full flex flex-col w-80 wi-light-dark overflow-y-auto">
        <Sidenav :data="sidenavItems" @click:link="showDrawer = false" />
      </div>
    </VOverlay>
  </teleport>

  <teleport v-if="mounted" to="#appbar-actions">
    <button class="xl:hidden wi-btn wi-btn-icon doc-sidenav-btn" @click="showDrawer = true">
      <tabler-arrow-bar-to-left />
    </button>
  </teleport>

  <div class="wi-content doc-content">
    <!-- Header -->
    <div class="doc-title">Progress Bar</div>
    <div class="doc-desc">Displays progression in a bar view</div>

    <!-- Basic -->
    <div id="basic" class="doc-subtitle">Basic Usage</div>
    <div
      class="doc-detail"
    >These examples demonstrate only a few different ways to style the progress circle</div>

    <ExampleCard source="progress/bar/basic.vue" content-class="">
      <div class="p-2 wi-highlight">
        <VSwitch v-model="animate" class="wi-switch-sm">
          <span class="pl-2">Animate</span>
        </VSwitch>
      </div>
      <div class="p-4">
        <ProgressBarBasic :percent="percent" />
      </div>
    </ExampleCard>

    <!-- API -->
    <div id="api" class="doc-subtitle">API</div>
    <ApiCard :api="api" class="w-full" />

    <!-- Style Guide -->
    <div id="styles" class="doc-subtitle">Style Guide</div>
    <StyleCard source="Progress/VuwiProgressBar.css" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
