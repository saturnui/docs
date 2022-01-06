<script setup lang="ts">
const api = [
  {
    name: 'theme',
    type: 'string',
    defaultVal: 'vuwi',
    desc: 'Used as the prefix for all Vuwi CSS classes.',
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
    <button class="xl:hidden wi-btn wi-btn-icon doc-sidenav-btn" @click="showDrawer = true">
      <tabler-arrow-bar-to-left />
    </button>
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

    <!-- Basic -->
    <div id="basic" class="doc-subtitle">Basic Usage</div>
    <div class="doc-detail">
      Details here...
    </div>

    <ExampleCard source="textinput/basic" height="h-100" />

    <!-- API -->
    <div id="api" class="doc-subtitle">API</div>
    <ApiCard :api="api" class="w-full" />

    <!-- Style Guide -->
    <div id="styles" class="doc-subtitle">Style Guide</div>
    <StyleCard source="TextInput.css" />
  </div>
</template>
