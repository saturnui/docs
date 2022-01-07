<script setup lang="ts">
import DropzoneBasic from './dropzone/basic.vue'

const slots = [
  {
    name: 'default',
    desc: 'This slot is for content',
    binds: [
      { name: 'active', desc: 'Indicator if the drop zone is active and can accept the drop.' },
      { name: 'files', desc: 'A list of <code>File</code> objects in the drop zone.' },
    ],
  },
]

const events = [
  {
    name: 'change',
    desc: 'Emitted when files are dropped into the drop area.',
  },
]

const sidenavItems = [
  { title: 'Basic Usage', anchor: '#basic' },
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
    <div class="doc-title">Dropzone</div>
    <div class="doc-desc">
      The <code>VDropzone</code> is a headless component that provides an area that accepts files. 
      No Tailwind component is provided as this can be completely customized.
    </div>

    <VueTitleBar title="Vue Component"></VueTitleBar>

    <!-- Basic -->
    <VueSection id="basic" title="Basic Usage">
      The drop zone only retains the latest files that have been dropped. This example demonstrates how
      to retain recently dropped files until they are cleared. The <router-link to="/components/image" class="wi-link">Image</router-link>
      component is used to display the <code>File</code> objects.
    </VueSection>
    <ExampleCard source="textinput/basic.vue" content-class="">
      <DropzoneBasic />
    </ExampleCard>

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
