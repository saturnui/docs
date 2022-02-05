<script setup lang="ts">
import TooltipBasic from './tooltip/basic.vue'
import TooltipStatic from './tooltip/static.vue'
import TooltipVariations from './tooltip/variations.vue'

const api = [
  {
    name: 'component',
    type: 'string',
    defaultVal: 'sa-tooltip',
    desc: 'Used as the prefix for all Vuwi CSS classes',
  },
  {
    name: 'placement',
    type: 'string',
    defaultVal: 'bottom',
    desc: 'Options are "top", "left", "right" and "bottom"',
  },
  {
    name: 'delayShow',
    type: 'string',
    defaultVal: 300,
    desc: 'Time in milliseconds before tooltip shows',
  },
  {
    name: 'delayHide',
    type: 'string',
    defaultVal: 2000,
    desc: 'Time in milliseconds before tooltip hides',
  },
  {
    name: 'show',
    type: '"auto" | true',
    defaultVal: 'auto',
    desc: 'Force show tooltip',
  },
]

const sidenavItems = [
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Static', anchor: '#static' },
  { title: 'Variations', anchor: '#variations' },
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
    <div class="doc-title">Tooltip</div>
    <div class="doc-desc">
      Tooltip uses the library
      <a
        href="https://popper.js.org/"
        target="_blank"
        class="py-1 sa-link"
      >@popperjs/core</a>.
    </div>

    <!-- Basic -->
    <div id="basic" class="doc-subtitle">Basic Usage</div>
    <ExampleCard source="tooltip/basic" height="h-100">
      <TooltipBasic />
    </ExampleCard>

    <!-- Static -->
    <div id="static" class="doc-subtitle">Static</div>
    <div class="doc-detail">Tooltips can be shown on demand.</div>
    <ExampleCard source="tooltip/static" height="h-100">
      <TooltipStatic />
    </ExampleCard>

    <!-- Variations -->
    <div id="variations" class="doc-subtitle">Variations</div>
    <div class="doc-detail">Tooltips can be completely customomized with any style / content.</div>
    <ExampleCard source="tooltip/variations" height="h-100">
      <TooltipVariations />
    </ExampleCard>

    <!-- API -->
    <div id="api" class="doc-subtitle">API</div>
    <ApiCard :api="api" class="w-full" />

    <!-- Style Guide -->
    <div id="styles" class="doc-subtitle">Style Guide</div>
    <StyleCard source="Tooltip/VuwiTooltip.css" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
