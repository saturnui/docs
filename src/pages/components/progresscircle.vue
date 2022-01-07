<script setup lang="ts">
import ProgressCircleCss from './progress/circle/css.vue'
import ProgressCircleBasic from './progress/circle/basic.vue'
import ProgressCircleVariants from './progress/circle/variants.vue'

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

const props = [
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
  { title: 'Tailwind Component', anchor: '#css' },
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Customized', anchor: '#custom' },
  { title: 'Properties', anchor: '#props' },
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
    <VButton icon class="xl:hidden doc-sidenav-btn" @click="showDrawer = true">
      <tabler-arrow-bar-to-left />
    </VButton>
  </teleport>

  <div class="wi-content doc-content">
    <!-- Header -->
    <div class="doc-title">Progress Circle</div>
    <div class="doc-desc">Displays progression in a circular view</div>

    <!-- CSS Usage -->
    <CssTitleBar id="css" title="Tailwind Component"></CssTitleBar>
    <ExampleCard source="/progress/circle/css" theme="ProgressCircle.css" content-class="p-4 flex flex-wrap gap-8 items-center justify-center">
      <ProgressCircleCss />
    </ExampleCard>

    <VueTitleBar title="Vue Component"></VueTitleBar>

    <!-- Basic -->
    <div id="basic" class="doc-subtitle">Basic Usage</div>
    <div
      class="doc-detail"
    >These examples demonstrate only a few different ways to style the progress circle.</div>

    <ExampleCard source="progress/circle/basic" content-class="">
      <div class="p-2 wi-highlight">
        <VSwitch v-model="animate" class="wi-switch-sm">
          <span class="pl-2">Animate</span>
        </VSwitch>
      </div>
      <div class="p-4">
        <ProgressCircleBasic :percent="percent" />
      </div>
    </ExampleCard>

    <!-- Variants -->
    <div id="custom" class="doc-subtitle">Customized</div>
    <div
      class="doc-detail"
    >Demonstrates different sizes and widths.</div>

    <ExampleCard source="progress/circle/variants" content-class="">
      <div class="p-2 wi-highlight">
        <VSwitch v-model="animate" class="wi-switch-sm">
          <span class="pl-2">Animate</span>
        </VSwitch>
      </div>
      <div class="p-4">
        <ProgressCircleVariants :percent="percent" />
      </div>
    </ExampleCard>

    <!-- API -->
    <div id="props" class="doc-subtitle">Properties</div>
    <ApiCard :api="props" class="w-full" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
