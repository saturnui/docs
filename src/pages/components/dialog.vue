<script setup lang="ts">
import DialogBasic from './dialog/basic.vue'
import DialogCss from './dialog/css.vue'
import DialogOverlay from './dialog/overlay.vue'

const api = [
  {
    name: 'className',
    type: 'string',
    defaultVal: 'wi-dialog',
    desc: 'Default class used by component',
  },
]

const slots = [
  {
    name: 'default',
    desc: 'This slot is for content',
  },

  {
    name: 'title',
    desc: 'Slot to place title, icon etc.',
  },
  {
    name: 'actions',
    desc: 'Slot to place buttons',
  },
]

const events = [
  {
    name: 'close',
    desc: 'Fired when close button is clicked',
  },

]

const sidenavItems = [
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'CSS Only', anchor: '#css' },
  { title: 'Overlay', anchor: '#overlay' },
  { title: 'Properties', anchor: '#props' },
  { title: 'Events', anchor: '#events' },
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
    <div class="doc-title">Dialog</div>
    <div class="doc-desc">
      Dialog can be used in conjunction to
      <router-link to="/components/overlay" class="text-primary wi-btn-link">Overlay</router-link> to display
      content in the form of a dialog
    </div>

    <!-- Basic Usage -->
    <div id="basic" class="doc-subtitle">Basic Usage</div>
    <div class="doc-detail">Show using all the available slots</div>

    <ExampleCard source="dialog/basic" content-class="p-4 flex justify-center bg-dark-100">
      <DialogBasic />
    </ExampleCard>

    <!-- CSS -->
    <div id="css" class="doc-subtitle">CSS Only</div>
    <div class="doc-detail">Only uses styles provided by Vuwi and Tailwind. No JavaScript.</div>

    <ExampleCard source="dialog/css" content-class="p-4 flex justify-center bg-dark-100">
      <DialogCss />
    </ExampleCard>

    <!-- Overlay -->
    <div id="overlay" class="doc-subtitle">Overlay</div>
    <div class="doc-detail">Show using dialog with overlay to create a modal window.</div>

    <ExampleCard source="dialog/css" content-class="flex justify-center bg-dark-100 h-70">
      <DialogOverlay />
    </ExampleCard>

    <!-- Properties -->
    <div id="props" class="doc-subtitle">Properties</div>
    <ApiCard :api="api" class="w-full" />

    <!-- Slots -->
    <div id="slots" class="doc-subtitle">Slots</div>
    <NameDescCard :api="slots" class="w-full" />

    <!-- Events -->
    <div id="events" class="doc-subtitle">Events</div>
    <NameDescCard :api="events" class="w-full" />

    <!-- Style Guide -->
    <div id="styles" class="doc-subtitle">Style Guide</div>
    <StyleCard source="TextInput.css" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
