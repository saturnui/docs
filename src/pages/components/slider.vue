<script setup lang="ts">
import SliderBasic from './slider/basic.vue'
import SliderCustom from './slider/custom.vue'
import SliderRange from './slider/range.vue'

const props = [
  {
    name: 'component',
    type: 'string',
    defaultVal: 'wi-slider',
    desc: 'Default class used by component',
  },
  {
    name: 'modelValue',
    type: 'number | string | number[]',
    defaultVal: 100,
    desc: 'Current value of the slider',
  },
  {
    name: 'min',
    type: 'number | string',
    defaultVal: 0,
    desc: 'Minimum allowed value',
  },
  {
    name: 'max',
    type: 'number | string',
    defaultVal: 100,
    desc: 'Maximum allowed value',
  },
  {
    name: 'step',
    type: 'number | string',
    defaultVal: 1,
    desc: 'Sets the tick interval',
  },
]

const slots = [
  {
    name: 'track',
    desc: 'Slot background layer',
  },
  {
    name: 'highlight',
    desc: 'Slot indicates the selected range',
  },
  {
    name: 'thumb-left',
    desc: 'Slot represents the left thumb when a range is displayed',
  },
  {
    name: 'thumb-right',
    desc: 'Slot represents the right thumb of the slider',
  },
]

const sidenavItems = [
  { title: 'Tailwind Component', anchor: '#css' },
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Custom', anchor: '#custom' },
  { title: 'Range', anchor: '#range' },
  { title: 'Properties', anchor: '#props' },
  { title: 'Slots', anchor: '#slots' },
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
    <div class="doc-title">Slider</div>
    <div class="doc-desc">
      The
      <code>VSlider</code> component is a better visualization of the number input.
      It is used for gathering numerical user data.
    </div>

    <CssTitleBar id="css" title="Tailwind Component"></CssTitleBar>
    <ExampleCard theme="Slider.css">
      TODO: Tailwind only example
    </ExampleCard>

    <VueTitleBar title="Vue Component"></VueTitleBar>

    <!-- Basic -->
    <VueSection id="basic" title="Basic Usage">Single value with a range betwen 0 - 100.</VueSection>
    <ExampleCard source="slider/basic" content-class="p-4 flex items-center gap-4">
      <SliderBasic />
    </ExampleCard>

    <!-- Custom -->
    <VueSection
      id="custom"
      title="Custom"
    >This example demonstrates navigating items via external control.</VueSection>
    <ExampleCard source="slider/custom">
      <SliderCustom />
    </ExampleCard>

    <!-- Range -->
    <VueSection
      id="range"
      title="Range"
    >This example demonstrates navigating items via external control.</VueSection>
    <ExampleCard source="slider/range" content-class="p-4 flex items-center gap-4">
      <SliderRange />
    </ExampleCard>

    <!-- Properties -->
    <VueSection id="props" title="Properties"></VueSection>
    <ApiCard :api="props" class="w-full" />

    <!-- Slots -->
    <VueSection id="slots" title="Slots"></VueSection>
    <NameDescCard :api="slots" class="w-full" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
