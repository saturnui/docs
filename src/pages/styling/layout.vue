<script setup lang="ts">
import LayoutPositions from '../components/examples/layout/positions.vue'
import LayoutCols321 from '../components/examples/layout/col-3-2-1.vue'
import LayoutCols31 from '../components/examples/layout/col-3-1.vue'
import LayoutCols3 from '../components/examples/layout/col-3.vue'
import LayoutCols21 from '../components/examples/layout/col-2-1.vue'
import LayoutCols2 from '../components/examples/layout/col-2.vue'
import LayoutCols1 from '../components/examples/layout/col-1.vue'
import LayoutRow from '../components/examples/layout/row.vue'

const sidenavItems = [
  { title: 'Positioning', anchor: '#positoning' },
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
    <div class="doc-title">Layout</div>
    <div class="doc-desc">
      Vuwi provides some classes for common layout configurations.
    </div>

    <!-- Positioning -->
    <div id="positoning" class="doc-subtitle">Positioning</div>
    <div class="doc-detail">
      Some style to provide common layout positons.
    </div>

    <ExampleCard source="layout/positions.vue" class="doc-padding-none">
      <LayoutPositions />
    </ExampleCard>

    <!-- Columns and Rows -->
    <div id="positoning" class="doc-subtitle">Columns and Rows</div>
    <div class="doc-detail">
      A set of classes for managing common column and row layouts.
    </div>

    <ExampleCard source="layout/col-3-2-1.vue" class="doc-padding-none" title=".wi-col-3-2-1">
      <LayoutCols321 />
    </ExampleCard>

    <ExampleCard source="layout/col-3-1.vue" class="doc-padding-none" title=".wi-col-3-1">
      <LayoutCols31 />
    </ExampleCard>

    <ExampleCard source="layout/col-3.vue" class="doc-padding-none" title=".wi-col-3">
      <LayoutCols3 />
    </ExampleCard>

    <ExampleCard source="layout/col-2-1.vue" class="doc-padding-none" title=".wi-col-2-1">
      <LayoutCols21 />
    </ExampleCard>

    <ExampleCard source="layout/col-2.vue" class="doc-padding-none" title=".wi-col-2">
      <LayoutCols2 />
    </ExampleCard>

    <ExampleCard source="layout/col-1.vue" class="doc-padding-none" title=".wi-col-1">
      <LayoutCols1 />
    </ExampleCard>

    <ExampleCard source="layout/row.vue" class="doc-padding-none" title=".wi-row">
      <LayoutRow />
    </ExampleCard>

    <!-- Style Guide -->
    <div id="styles" class="doc-subtitle">Style Guide</div>
    <StyleCard source="TextInput/VuwiTextInput.css" />
  </div>
</template>

<style>
.pos-label {
  @apply absolute border border-purple-500 bg-purple-500 text-purple-700 dark:text-white bg-opacity-20 rounded-full px-3 py-1 font-mono text-sm;
}

.layout-box {
  @apply border border-purple-500 bg-purple-500 bg-opacity-20 text-purple-700 dark:text-white h-8 flex items-center justify-center font-bold;
}

.layout-box2 {
  @apply border border-green-500 bg-green-500 bg-opacity-20 text-green-700 dark:text-white h-8 flex items-center justify-center font-bold;
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
