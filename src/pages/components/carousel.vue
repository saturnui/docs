<script setup lang="ts">
import CarouselCss from './carousel/css.vue'
import CarouselBasic from './carousel/basic.vue'
import CarouselNav from './carousel/navigation.vue'
import CarouselVertical from './carousel/vertical.vue'
import CarouselTabs from './carousel/tabs.vue'
import CarouselSize from './carousel/sizes.vue'
import CarouselAuto from './carousel/auto.vue'
import CarouselSkip from './carousel/skip.vue'
import CarouselMultiple from './carousel/multiple.vue'

const sidenavItems = [
  { title: 'CSS Only', anchor: '#css' },
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Navigation', anchor: '#nav' },
  { title: 'Vertical', anchor: '#vertical' },
  { title: 'Tabs', anchor: '#tabs' },
  { title: 'Size Variants', anchor: '#size' },
  { title: 'Auto Rotate', anchor: '#auto' },
  { title: 'Skip Nav', anchor: '#skip' },
  { title: 'Multiple items', anchor: '#multiple' },
  { title: 'Properties', anchor: '#props' },
  { title: 'Slots', anchor: '#slots' },
  { title: 'Default Theme', anchor: '#theme' },
]

const props = [
  {
    name: 'className',
    type: 'string',
    defaultVal: 'wi-carousel',
    desc: 'Default class used by component',
  },
  {
    name: 'modelValue',
    type: 'number',
    defaultVal: 0,
    desc: 'Current index of the selected carousel item',
  },
  {
    name: 'vertical',
    type: 'boolean',
    defaultVal: false,
    desc: 'Transitions items vertically',
  },
  {
    name: 'sliderClass',
    type: 'string',
    defaultVal: '',
    desc: 'Styles applied to the carousel\'s slider. To make smooth transition add <code>scroll-smooth</code>',
  },
]

const slots = [
  {
    name: 'default',
    desc: 'Slot contains carousel items',
    binds: [
      {
        name: 'nextSlide(step = 1)',
        desc: 'Moves index to previous item',
      },

      {
        name: 'prevSlide(step = 1)',
        desc: 'Moves index to next item',
      },
    ],
  },

  {
    name: 'overlay',
    desc: 'Slot used for items such as navigation, indicators, etc.',
    binds: [
      {
        name: 'nextSlide(step = 1)',
        desc: 'Moves index to previous item',
      },

      {
        name: 'prevSlide(step = 1)',
        desc: 'Moves index to next item',
      },
    ],
  },
]

const events = [
  {
    name: 'update:modelValue',
    desc: 'This event is bound to <code>v-model</code> and is not subscribed to directly.',
  },
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
    <div class="doc-title">Carousel</div>
    <div
      class="doc-desc"
    >The VCarousel component is used to display large numbers of visual content and navigate through them.</div>

    <CssTitleBar id="css" title="CSS Only">
      Tailwind Component - No JavaScript. The default behavior will allow you to use a mouse,
      trackpad or mobile device to flick the slides. To control the navigation JavaScript is required.
    </CssTitleBar>
    <ExampleCard source="/carousel/css">
      <CarouselCss />
    </ExampleCard>

    <!-- Basic -->
    <VueTitleBar
      id="basic"
      title="Basic Usage"
    >This example demonstrates navigating items via external control.</VueTitleBar>
    <ExampleCard source="/carousel/basic">
      <CarouselBasic />
    </ExampleCard>

    <!-- Navigation -->
    <VueTitleBar id="nav" title="Navigation">
      The carousel provides an API to navigate items using
      <code>prevSlide</code> and
      <code>nextSlide</code> methods or
      <code>v-model</code>.
    </VueTitleBar>
    <ExampleCard source="/carousel/navigation">
      <CarouselNav />
    </ExampleCard>

    <!-- Vertical -->
    <VueTitleBar id="vertical" title="Vertical">The carousel can be navigated vertically</VueTitleBar>
    <ExampleCard source="/carousel/vertical">
      <CarouselVertical />
    </ExampleCard>

    <!-- Tabs -->
    <VueTitleBar id="tabs" title="Tabs">
      This example demonstrates using the
      <router-link to="/components/tab" class="wi-link">VTab</router-link>control
      with VCarousel.
    </VueTitleBar>
    <ExampleCard source="/carousel/tabs">
      <CarouselTabs />
    </ExampleCard>

    <!-- Size -->
    <VueTitleBar id="size" title="Size Variants">Different sized items are supported.</VueTitleBar>
    <ExampleCard source="/carousel/sizes">
      <CarouselSize />
    </ExampleCard>

    <!-- Auto -->
    <VueTitleBar id="auto" title="Auto Rotate">
      This example demonstrates rotating through the carousel items
      automatically. The rotation will pause when mouse is over carousel.
    </VueTitleBar>
    <ExampleCard source="/carousel/auto">
      <CarouselAuto />
    </ExampleCard>

    <!-- Skip -->
    <VueTitleBar
      id="skip"
      title="Skip Items"
    >This example will move forward 2 slides on next and 1 slide on previous navigation.</VueTitleBar>
    <ExampleCard source="/carousel/auto">
      <CarouselSkip />
    </ExampleCard>

    <!-- Multiple -->
    <VueTitleBar
      id="multiple"
      title="Multiple Items"
    >Multiple items can be viewed and rotated through.</VueTitleBar>
    <ExampleCard source="/carousel/multiple">
      <CarouselMultiple />
    </ExampleCard>

    <!-- Properties -->
    <VueTitleBar id="props" title="Properties"></VueTitleBar>
    <ApiCard :api="props" class="w-full" />

    <!-- Slots -->
    <VueTitleBar id="slots" title="Slots"></VueTitleBar>
    <NameDescCard :api="slots" class="w-full" />

    <!-- Events -->
    <VueTitleBar id="events" title="Events"></VueTitleBar>
    <NameDescCard :api="events" class="w-full" />

    <!-- Default Theme -->
    <CssTitleBar id="theme" title="Default Theme">The default styles for this component.</CssTitleBar>
    <StyleCard source="Carousel.css" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
