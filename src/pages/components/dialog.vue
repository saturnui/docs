<script setup lang="ts">
import DialogBasic from './dialog/basic.vue'
import DialogCss from './dialog/css.vue'
import DialogOverlay from './dialog/overlay.vue'

const props = [
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
  { title: 'CSS Only', anchor: '#css' },
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Overlay', anchor: '#overlay' },
  { title: 'Properties', anchor: '#props' },
  { title: 'Slots', anchor: '#slots' },
  { title: 'Events', anchor: '#events' },
  { title: 'Default Theme', anchor: '#theme' },
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
      <router-link to="/components/overlay" class="wi-link">Overlay</router-link> to display
      content in the form of a dialog
    </div>

    <!-- CSS -->
    <VueTitleBar id="css" title="CSS Only">
      Tailwind Component - No JavaScript.
    </VueTitleBar>
    <ExampleCard source="dialog/css" content-class="p-4 flex justify-center bg-dark-100">
      <DialogCss />
    </ExampleCard>

    <!-- Basic Usage -->
    <VueTitleBar id="basic" title="Basic Usage">
      Description here...
    </VueTitleBar>
    <ExampleCard source="dialog/basic" content-class="p-4 flex justify-center bg-dark-100">
      <DialogBasic />
    </ExampleCard>

    <!-- Overlay -->
    <VueTitleBar id="overlay" title="Overlay">
      Show using dialog with <code>VOverlay</code> to create a modal window.
    </VueTitleBar>
    <ExampleCard source="dialog/overlay" content-class="flex justify-center bg-dark-100 h-70">
      <DialogOverlay />
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
    <CssTitleBar id="theme" title="Default Theme">
      The default styles for this component.
    </CssTitleBar>
    <StyleCard source="TextInput.css" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
