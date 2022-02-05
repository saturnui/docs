<script setup lang="ts">
import DialogBasic from './dialog/basic.vue'
import DialogCss from './dialog/css.vue'
import DialogOverlay from './dialog/overlay.vue'

const props = [
  {
    name: 'component',
    type: 'string',
    defaultVal: 'sa-dialog',
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
  { title: 'Tailwind Component', anchor: '#css' },
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Overlay', anchor: '#overlay' },
  { title: 'Properties', anchor: '#props' },
  { title: 'Slots', anchor: '#slots' },
  { title: 'Events', anchor: '#events' },
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
      <div class="h-full flex flex-col w-80 sa-light-dark overflow-y-auto">
        <Sidenav :data="sidenavItems" @click:link="showDrawer = false" />
      </div>
    </VOverlay>
  </teleport>

  <teleport v-if="mounted" to="#appbar-actions">
    <VButton icon class="xl:hidden doc-sidenav-btn" @click="showDrawer = true">
      <tabler-arrow-bar-to-left />
    </VButton>
  </teleport>

  <div class="sa-content doc-content">
    <!-- Header -->
    <div class="doc-title">Dialog</div>
    <div class="doc-desc">
      Dialog can be used in conjunction to
      <router-link to="/components/overlay" class="sa-link">Overlay</router-link> to display
      content in the form of a dialog
    </div>

    <!-- CSS -->
    <CssTitleBar id="css" title="Tailwind Component"></CssTitleBar>
    <ExampleCard source="dialog/css" content-class="p-4 flex justify-center bg-dark-100" theme="TextInput.css">
      <DialogCss />
    </ExampleCard>

    <VueTitleBar title="Vue Component"></VueTitleBar>

    <!-- Basic Usage -->
    <VueSection id="basic" title="Basic Usage">
      TODO: Description here...
    </VueSection>
    <ExampleCard source="dialog/basic" content-class="p-4 flex justify-center bg-dark-100">
      <DialogBasic />
    </ExampleCard>

    <!-- Overlay -->
    <VueSection id="overlay" title="Overlay">
      Show using dialog with <code>VOverlay</code> to create a modal window.
    </VueSection>
    <ExampleCard source="dialog/overlay" content-class="flex justify-center bg-dark-100 h-70">
      <DialogOverlay />
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
