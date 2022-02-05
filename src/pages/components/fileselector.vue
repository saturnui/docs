<script setup lang="ts">
import FileSelectorBasic from './fileselector/basic.vue'
import FileSelectorVariation from './fileselector/variation.vue'
import FileSelectorMultiple from './fileselector/multiple.vue'

const props = [
  {
    name: 'multiple',
    type: 'boolean',
    defaultVal: false,
    desc: 'Indicates selection can contain multiple files',
  },
  {
    name: 'accepts',
    type: 'arrat',
    defaultVal: [],
    desc: 'Indicates which file extensions are allowed for selection',
  },
]

const slots = [
  {
    name: 'default',
    desc: 'Slot contains Tailwind component used to visually represent this component.',
  },
]

const sidenavItems = [
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Variation', anchor: '#variation' },
  { title: 'Multiple Files', anchor: '#multiple' },
  { title: 'Properties', anchor: '#props' },
  { title: 'Slots', anchor: '#slots' },
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
    <div class="doc-title">File Selector</div>
    <div class="doc-desc">
      The
      <code>VFileSelector</code> component is a specialized input that
      provides a headless UI for selecting one or more files. The
      <router-link to="/components/image" class="sa-link">Image</router-link> component is used to display the
      <code>File</code> objects.
    </div>

    <VueTitleBar title="Vue Component"></VueTitleBar>

    <!-- Basic Usage -->
    <VueSection
      id="basic"
      title="Basic Usage"
    >This example demonstrates using a button and label to show the file to be uploaded.</VueSection>
    <ExampleCard source="fileselector/basic">
      <FileSelectorBasic />
    </ExampleCard>

    <!-- Variation -->
    <VueSection
      id="variation"
      title="Variation"
    >Demonstrates a more custom look for uploading an image.</VueSection>
    <ExampleCard
      source="fileselector/variation"
      content-class="flex items-center justify-center p-4 gap-4"
    >
      <FileSelectorVariation />
    </ExampleCard>

    <!-- Multiple -->
    <VueSection
      id="multiple"
      title="Multiple Files"
    >Demonstrates allowing multiple files to be selected.</VueSection>
    <ExampleCard source="fileselector/multiple" content-class="p-4 grid gap-2">
      <FileSelectorMultiple />
    </ExampleCard>

    <!-- Properties -->
    <VueSection id="props" title="Properties" />
    <ApiCard :api="props" class="w-full" />

    <!-- Slots -->
    <VueSection id="slots" title="Slots"></VueSection>
    <NameDescCard :api="slots" class="w-full" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
