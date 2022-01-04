<script setup lang="ts">
import OverlayBasic from './overlay/basic.vue'

const api = [
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
      <div class="h-full flex flex-col w-80 wi-light-dark overflow-y-auto border-l wi-border">
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
    <div class="doc-title">Overlay</div>
    <div class="doc-desc">
      The overlay component is used to provide emphasis on a particular element 
      or parts of it. It signals to the user of a state change within the application 
      and can be used for creating loaders, dialogs and more.
    </div>

    <!-- Basic -->
    <div id="basic" class="doc-subtitle">Basic Usage</div>
    <div class="doc-detail">
      The example below shows different features available in the overlay.
    </div>

    <ExampleCard source="overlay/basic.vue" class="doc-padding-none" content-class="">
      <OverlayBasic />
    </ExampleCard>

    <!-- API -->
    <div id="api" class="doc-subtitle">API</div>
    <ApiCard :api="api" class="w-full" />

    <!-- Style Guide -->
    <div id="styles" class="doc-subtitle">Style Guide</div>
    <StyleCard source="Overlay/VuwiOverlay.css" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
