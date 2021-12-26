<script setup lang="ts">
import LineBasic from './examples/line/basic.vue'
import LineSlot from './examples/line/slot.vue'
import LineSlot2 from './examples/line/slot2.vue'

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
  { title: 'Slot', anchor: '#slot' },
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
    <VuwiOverlay v-model="showDrawer" position="right" @swipe:end="handleSwipeEnd">
      <div class="h-full flex flex-col w-80 vuwi-card overflow-y-auto">
        <Sidenav :data="sidenavItems" @click:link="showDrawer = false" />
      </div>
    </VuwiOverlay>
  </teleport>

  <teleport v-if="mounted" to="#appbar-actions">
    <button class="xl:hidden vuwi-btn vuwi-btn-icon doc-sidenav-btn" @click="showDrawer = true">
      <tabler-arrow-bar-to-left />
    </button>
  </teleport>

  <div class="vuwi-content doc-content">
    <!-- Header -->
    <div class="doc-title">Line</div>
    <div class="doc-desc">
      Line provides a line break. It also supports an optional slot for inserting a label or another component.
    </div>

    <!-- Basic -->
    <div id="basic" class="doc-subtitle">Basic Usage</div>
    <!-- <div class="doc-detail">
      Details here...
    </div> -->

    <ExampleCard source="line/basic.vue">
      <LineBasic />
    </ExampleCard>

    <!-- Slot -->
    <div id="slot" class="doc-subtitle">Slots</div>
    <div class="doc-detail">
      With the slot you can insert any element such as a label.
    </div>

    <ExampleCard source="line/slot.vue" title="Slot with label">
      <LineSlot />
    </ExampleCard>

    <ExampleCard source="line/slot2.vue" title="Slot with component">
      <LineSlot2 />
    </ExampleCard>

    <!-- API -->
    <div id="api" class="doc-subtitle">API</div>
    <ApiCard :api="api" class="w-full" />

    <!-- Style Guide -->
    <div id="styles" class="doc-subtitle">Style Guide</div>
    <StyleCard source="Line/VuwiLine.css" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: vuwi
</route>
