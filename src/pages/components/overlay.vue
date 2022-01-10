<script setup lang="ts">
import OverlayBasic from './overlay/basic.vue'
import VueSection from '~/components/ExampleTitleBar/VueSection.vue'

const props = [
  {
    name: 'theme',
    type: 'string',
    defaultVal: 'vuwi',
    desc: 'Used as the prefix for all Vuwi CSS classes.',
  },
  {
    name: 'modelValue',
    type: 'boolean',
    defaultVal: false,
    desc: 'Shows / hides overlay and its contents.',
  },
  {
    name: 'position',
    type: 'string',
    defaultVal: 'center',
    desc: 'Position of content. Accepted values are "center", "left", "right", "top", "bottom"',
  },
  {
    name: 'modal',
    type: 'boolean',
    defaultVal: false,
    desc: 'Prevents closing the overlay outside of content area.',
  },
  {
    name: 'blocking',
    type: 'boolean',
    defaultVal: true,
    desc: 'Prevents user interaction with underlying content when overlay is active.',
  },
  {
    name: 'disableScrollTarget',
    type: 'string',
    defaultVal: 'body',
    desc: 'Disables scroll target when overlay if active. Accepted values are "body", "parent" or a custom selector',
  },
]

const sidenavItems = [
  { title: 'Basic Usage', anchor: '#basic' },
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
      <div class="h-full flex flex-col w-80 wi-light-dark overflow-y-auto border-l wi-border">
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
    <div class="doc-title">Overlay</div>
    <div class="doc-desc">
      The <code>VOverlay</code> component is used to provide emphasis on a particular element 
      or parts of it. It signals to the user of a state change within the application 
      and can be used for creating loaders, dialogs and more.
    </div>

    <!-- Style Guide -->
    <CssTitleBar id="theme" title="Tailwind Component">
    </CssTitleBar>
    <ExampleCard theme="Overlay.css">
      TODO: Examples
    </ExampleCard>

    <VueTitleBar title="Vue Component"></VueTitleBar>

    <!-- Basic -->
    <VueSection id="basic" title="Basic Usage">
      The example below shows different features available in the overlay.
    </VueSection>
    <ExampleCard source="overlay/basic" class="doc-padding-none" content-class="">
      <OverlayBasic />
    </ExampleCard>

    <!-- API -->
    <VueSection id="props" title="Properties">
      The example below shows different features available in the overlay.
    </VueSection>
    <ApiCard :api="props" class="w-full" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
