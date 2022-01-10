<script setup lang="ts">
import ImageBasic from './image/basic.vue'

const props = [
  {
    name: 'width',
    type: 'string | number',
    defaultVal: 48,
    desc: 'Used when a <code>File</code> is the src to convert image max width size',
  },
  {
    name: 'height',
    type: 'string | number',
    defaultVal: 48,
    desc: 'Used when a <code>File</code> is the src to convert image max width size',
  },
  {
    name: 'src',
    type: 'File | string',
    defaultVal: 48,
    desc: 'Source can be a string with the same support as an <code>img</code> tag or a <code>File</code> is passed in, it will be converted to a data url.',
  },
]

const events = [
  {
    name: 'change',
    desc: 'Returns a url or data url when the source changes.',
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
    <div class="doc-title">Image</div>
    <div class="doc-desc">
      This <code>VImage</code> component is a headless UI component that can display <code>File</code> images of types <code>image/jpeg</code>, <code>image/png</code>, 
      <code>image/gif</code> and <code>image/svg+xml</code>. This component can be used in combination
      with the <router-link to="/components/fileselector" class="wi-link">File Selector</router-link> or 
      <router-link to="/components/dropzone" class="wi-link">Drop Zone</router-link> components.
    </div>

    <VueTitleBar title="Vue Component"></VueTitleBar>

    <!-- Basic -->
    <VueSection id="basic" title="Basic Usage">
      This example uses the image component to show a selected file.
    </VueSection>
    <ExampleCard source="textinput/basic" content-class="p-4 flex flex-col items-center gap-4">
      <ImageBasic />
    </ExampleCard>

    <!-- Properties -->
    <VueSection id="props" title="Properties"></VueSection>
    <ApiCard :api="props" class="w-full" />

    <!-- Events -->
    <VueSection id="events" title="Events"></VueSection>
    <NameDescCard :api="events" class="w-full" />
  </div>
</template>
