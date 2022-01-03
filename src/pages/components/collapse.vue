<script setup lang="ts">
import CollapseHeadless from './examples/collapse/headless.vue'
import CollapseHeader from './examples/collapse/header.vue'
import CollapseGroup from './examples/collapse/group.vue'

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
    <div class="doc-title">Collapse</div>
    <div class="doc-desc">
      Shows and hides content in a collapsable transition. Items can be grouped together only
      allowing one item in the group to be visible.
    </div>

    <!-- Basic -->
    <div id="basic" class="doc-subtitle">Basic Usage</div>
    <div class="doc-detail">By default, collapse will only animate the content. Headers
      are optional.
    </div>

    <ExampleCard source="collapse/headless">
      <CollapseHeadless />
    </ExampleCard>

    <!-- Header -->
    <div id="basic" class="doc-subtitle">Header</div>
    <div class="doc-detail">Details here...</div>

    <ExampleCard source="collapse/header">
      <CollapseHeader />
    </ExampleCard>

    <!-- Group -->
    <div id="basic" class="doc-subtitle">Group</div>
    <div class="doc-detail">Details here...</div>

    <ExampleCard source="collapse/group">
      <CollapseGroup />
    </ExampleCard>

    <!-- API -->
    <div id="api" class="doc-subtitle">API</div>
    <ApiCard :api="api" class="w-full" />

    <!-- Style Guide -->
    <div id="styles" class="doc-subtitle">Style Guide</div>
    <StyleCard source="TextInput.css" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
