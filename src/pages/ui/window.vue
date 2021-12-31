<script setup lang="ts">
import WindowBasic from './examples/window/basic.vue'
import WindowVariations from './examples/window/variations.vue'

const sidenavItems = [
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Variations', anchor: '#variations' },
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
    <VuwiOverlay v-model="showDrawer" position="right" @swipe:end="handleSwipeEnd">
      <div class="h-full flex flex-col w-80 vuwi-card overflow-y-auto">
        <Sidenav :data="sidenavItems" @click:link="showDrawer = false" />
      </div>
    </VuwiOverlay>
  </teleport>

  <teleport v-if="mounted" to="#appbar-actions">
    <button
      class="xl:hidden vuwi-btn vuwi-btn-icon doc-sidenav-btn"
      @click="showDrawer = true"
    >
      <tabler-arrow-bar-to-left />
    </button>
  </teleport>

  <div class="vuwi-content doc-content">
    <!-- Title -->
    <div class="doc-title">Window</div>

    <!-- Basic -->
    <div id="basic" class="doc-subtitle">Basic Usage</div>
    <ExampleCard source="window/basic.vue">
      <WindowBasic />
    </ExampleCard>

    <!-- Variations -->
    <div id="variations" class="doc-subtitle">Variations</div>
    <ExampleCard source="window/variations.vue">
      <WindowVariations />
    </ExampleCard>

    <!-- Style -->
    <div id="styles" class="doc-subtitle">Style Guide</div>
    <StyleCard source="Window/VuwiWindow.css" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
