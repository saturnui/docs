<script setup lang="ts">
import ResizerWidth from './resizers/width.vue'
import ResizerHeight from './resizers/height.vue'
import ResizerFreeform from './resizers/freeform.vue'
import ResizerIframe from './resizers/iframe.vue'

const sidenavItems = [
  { title: 'Width', anchor: '#width' },
  { title: 'Height', anchor: '#height' },
  { title: 'Freeform', anchor: '#freeform' },
  { title: 'Iframe', anchor: '#iframe' },
]

const props = [
  {
    name: 'component',
    type: 'string',
    defaultVal: 'wi-component',
    desc: 'Default class used by component',
  },
  {
    name: 'modelValue',
    type: 'number',
    defaultVal: 0,
    desc: 'Current index of the selected component item',
  },
]

const slots = [
  {
    name: 'default',
    desc: 'Slot contains component items',
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
    <div class="doc-title">Resizer</div>
    <div class="doc-desc -mb-10">Resizes a target element, also supports resizing <span class="font-mono">iframe</span> elements.</div>

    <VueTitleBar title="Vue Component"></VueTitleBar>

    <!-- Basic -->
    <VueSection id="width" title="Width">
      This example demonstrates resizing the target's width. The min and max is driven by CSS such as
      <span class="font-mono">min-w-50</span> and
      <span class="font-mono">max-w-full</span> as portrayed in this example.
    </VueSection>
    <ExampleCard source="/resizers/width" content-class="p-0">
      <ResizerWidth />
    </ExampleCard>

    <VueSection
      id="height"
      title="Height"
    >
      This example demonstrates resizing the target's height The min and max is driven by CSS such as
      <span class="font-mono">min-h-30</span> and
      <span class="font-mono">max-h-full</span> as portrayed in this example.
    </VueSection>
    <ExampleCard source="/resizers/height" content-class="p-0">
      <ResizerHeight />
    </ExampleCard>

    <VueSection
      id="freeform"
      title="Freeform"
    >This example demonstrates resizing the target's height and width.</VueSection>
    <ExampleCard source="/resizers/freeform" content-class="p-0">
      <ResizerFreeform />
    </ExampleCard>

    <VueSection
      id="iframe"
      title="Iframe"
    >This example demonstrates resizing an iframe.</VueSection>
    <ExampleCard source="/resizers/iframe" content-class="p-0">
      <ResizerIframe />
    </ExampleCard>

    <!-- Properties -->
    <!-- <VueSection id="props" title="Properties"></VueSection>
    <ApiCard :api="props" class="w-full" />-->

    <!-- Slots -->
    <!-- <VueSection id="slots" title="Slots"></VueSection>
    <NameDescCard :api="slots" class="w-full" />-->

    <!-- Events -->
    <!-- <VueSection id="events" title="Events"></VueSection>
    <NameDescCard :api="events" class="w-full" />-->

    <!-- Default Theme -->
    <!-- <CssTitleBar id="theme" title="Default Theme">The default styles for this component.</CssTitleBar>
    <StyleCard source="Component.css" />-->

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
