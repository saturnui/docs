<script setup lang="ts">
import ProgressCircleBasic from './examples/progress/circle/basic.vue'
import ProgressCircleVariants from './examples/progress/circle/variants.vue'

const percent = ref(35)
const animate = ref(false)
let timer: any

watch(animate, (v: boolean) => {
  clearInterval(timer)
  if (v) {
    timer = setInterval(() => {
      if (percent.value >= 100) percent.value = 0
      else percent.value += 1
    }, 20)
  }
})

const api = [
  {
    name: 'theme',
    type: 'string',
    defaultVal: 'vuwi',
    desc: 'Used as the prefix for all Vuwi CSS classes.',
  },
  {
    name: 'size',
    type: 'number',
    defaultVal: 5,
    desc: 'Height and width of progress circle',
  },
  {
    name: 'color',
    type: 'string',
    defaultVal: 'border-primary',
    desc: 'Color of ring / wedge',
  },
  {
    name: 'width',
    type: 'number',
    defaultVal: 5,
    desc: 'Size of ring',
  },
  {
    name: 'percent',
    type: 'number',
    defaultVal: 0,
    desc: 'Amount of the ring / wedge to display',
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
    <VuwiOverlay v-model="showDrawer" position="right" @swipe:end="handleSwipeEnd">
      <div class="h-full flex flex-col w-80 vuwi-card overflow-y-auto">
        <Sidenav :data="sidenavItems" @click:link="showDrawer = false" />
      </div>
    </VuwiOverlay>
  </teleport>

  <teleport v-if="mounted" to="#appbar-actions">
    <button class="xl:hidden vuwi-btn vuwi-btn-icon doc-sidenav-btn" @click="showDrawer = true">
      <tabler-arrow-bar-to-left />
    </button>
  </teleport>

  <div class="vuwi-content doc-content">
    <!-- Header -->
    <div class="doc-title">Progress Circle</div>
    <div class="doc-desc">Displays progression in a circular view</div>

    <!-- Basic -->
    <div id="basic" class="doc-subtitle">Basic Usage</div>
    <div
      class="doc-detail"
    >These examples demonstrate only a few different ways to style the progress circle.</div>

    <ExampleCard source="progress/circle/basic.vue" class="doc-padding-none">
      <div class="p-2 vuwi-highlight">
        <VuwiSwitch v-model="animate" class="vuwi-switch-sm">
          <span class="pl-2">Animate</span>
        </VuwiSwitch>
      </div>
      <div class="p-4">
        <ProgressCircleBasic :percent="percent" />
      </div>
    </ExampleCard>

    <!-- Variants -->
    <div id="basic" class="doc-subtitle">Variants</div>
    <div
      class="doc-detail"
    >Demonstrates different sizes and widths.</div>

    <ExampleCard source="progress/circle/basic.vue" class="doc-padding-none">
      <div class="p-2 vuwi-highlight">
        <VuwiSwitch v-model="animate" class="vuwi-switch-sm">
          <span class="pl-2">Animate</span>
        </VuwiSwitch>
      </div>
      <div class="p-4">
        <ProgressCircleVariants :percent="percent" />
      </div>
    </ExampleCard>

    <!-- API -->
    <div id="api" class="doc-subtitle">API</div>
    <ApiCard :api="api" class="w-full" />

    <!-- Style Guide -->
    <div id="styles" class="doc-subtitle">Style Guide</div>
    <StyleCard source="Progress/VuwiProgressCircle.css" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: vuwi
</route>
