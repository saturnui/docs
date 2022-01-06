<script setup lang="ts">
import MockWindow from './mock/window.vue'

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
    <VOverlay v-model="showDrawer" position="right" @swipe:end="handleSwipeEnd">
      <div class="h-full flex flex-col w-80 wi-light-dark overflow-y-auto">
        <Sidenav :data="sidenavItems" @click:link="showDrawer = false" />
      </div>
    </VOverlay>
  </teleport>

  <teleport v-if="mounted" to="#appbar-actions">
    <button
      class="xl:hidden wi-btn wi-btn-icon doc-sidenav-btn"
      @click="showDrawer = true"
    >
      <tabler-arrow-bar-to-left />
    </button>
  </teleport>

  <div class="wi-content doc-content">
    <!-- Title -->
    <div class="doc-title">Mocks</div>
    <div class="doc-desc">CSS components for showing content in a mock device.</div>

    <CssTitleBar id="css" title="Window"></CssTitleBar>
    <ExampleCard source="/mock/window/css" content-class="p-4 space-y-4">
      <MockWindow />
    </ExampleCard>

    <!-- Style -->
    <CssTitleBar id="theme" title="Window Default Theme">The default styles for this component.</CssTitleBar>
    <StyleCard source="Mock.css" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
