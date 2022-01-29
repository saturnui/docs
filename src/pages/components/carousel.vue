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
  { title: 'Tailwind Component', anchor: '#css' },
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
]

const props = [
  {
    name: 'component',
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
    <VButton icon class="xl:hidden doc-sidenav-btn" @click="showDrawer = true">
      <tabler-arrow-bar-to-left />
    </VButton>
  </teleport>

  <div class="wi-content doc-content">
    <!-- Header -->
    <div class="doc-title">Carousel</div>
    <div
      class="doc-desc"
    >The VCarousel component is used to display large numbers of visual content and navigate through them.</div>

    <CssTitleBar id="css" title="Tailwind Component">
      The default behavior will allow you to use a mouse,
      trackpad or mobile device to flick the slides. To control the navigation JavaScript is required.
    </CssTitleBar>
    <ExampleCard source="/carousel/css" theme="Carousel.css">
      <CarouselCss />
    </ExampleCard>

    <VueTitleBar title="Vue Component"></VueTitleBar>

    <!-- Basic -->
    <VueSection
      id="basic"
      title="Basic Usage"
    >This example demonstrates navigating items via external control.</VueSection>
    <ExampleCard source="/carousel/basic">
      <CarouselBasic />
    </ExampleCard>

    <!-- Navigation -->
    <VueSection id="nav" title="Navigation">
      The carousel provides an API to navigate items using
      <code>prevSlide</code> and
      <code>nextSlide</code> methods or
      <code>v-model</code>.
    </VueSection>
    <ExampleCard source="/carousel/navigation">
      <CarouselNav />
    </ExampleCard>

    <!-- Vertical -->
    <VueSection id="vertical" title="Vertical">The carousel can be navigated vertically</VueSection>
    <ExampleCard source="/carousel/vertical">
      <CarouselVertical />
    </ExampleCard>

    <!-- Tabs -->
    <VueSection id="tabs" title="Tabs">
      This example demonstrates using the
      <router-link to="/components/tab" class="wi-link">VTab</router-link> control
      with VCarousel.
    </VueSection>
    <ExampleCard source="/carousel/tabs">
      <CarouselTabs />
    </ExampleCard>

    <!-- Size -->
    <VueSection id="size" title="Size Variants">Different sized items are supported.</VueSection>
    <ExampleCard source="/carousel/sizes">
      <CarouselSize />
    </ExampleCard>

    <!-- Auto -->
    <VueSection id="auto" title="Auto Rotate">
      This example demonstrates rotating through the carousel items
      automatically. The rotation will pause when mouse is over carousel.
    </VueSection>
    <ExampleCard source="/carousel/auto">
      <CarouselAuto />
    </ExampleCard>

    <!-- Skip -->
    <VueSection
      id="skip"
      title="Skip Items"
    >This example will move forward 2 slides on next and 1 slide on previous navigation.</VueSection>
    <ExampleCard source="/carousel/auto">
      <CarouselSkip />
    </ExampleCard>

    <!-- Multiple -->
    <VueSection
      id="multiple"
      title="Multiple Items"
    >Multiple items can be viewed and rotated through.</VueSection>
    <ExampleCard source="/carousel/multiple">
      <CarouselMultiple />
    </ExampleCard>

    <!-- Properties -->
    <VueSection id="props" title="Properties"></VueSection>
    <ApiCard :api="props" class="w-full" />

    <!-- Slots -->
    <VueSection id="slots" title="Slots"></VueSection>
    <NameDescCard :api="slots" class="w-full" />

    <!-- Events -->
    <VueSection id="events" title="Events"></VueSection>
    <NameDescCard :api="events" class="w-full" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
