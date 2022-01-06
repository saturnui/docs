<script setup lang="ts">
import CollapseHeadless from './collapse/headless.vue'
import CollapseHeader from './collapse/header.vue'
import CollapseGroup from './collapse/group.vue'

const api = [
  {
    name: 'className',
    type: 'string',
    defaultVal: 'wi-collapse',
    desc: 'Default class used by component',
  },
  {
    name: 'group',
    type: 'string',
    defaultVal: '',
    desc: 'Groups collapses so they work in tandem only display one collapse at a time',
  },
  {
    name: 'modelValue',
    type: 'Boolean',
    defaultVal: false,
    desc: 'Opens and closes a collapse',
  },
  {
    name: 'slide',
    type: 'string',
    defaultVal: 'down',
    desc: 'Direction which content should be transition when opened',
  },
]

const sidenavItems = [
  { title: 'Headless', anchor: '#headless' },
  { title: 'Header', anchor: '#header' },
  { title: 'Group', anchor: '#group' },
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
    <VueTitleBar id="headless" title="Headless">
      By default, collapse will only animate the content. Headers
      are optional.
    </VueTitleBar>
    <ExampleCard source="collapse/headless">
      <CollapseHeadless />
    </ExampleCard>

    <!-- Header -->
    <VueTitleBar id="header" title="Header">Adds a header to open and close the content.</VueTitleBar>
    <ExampleCard source="collapse/header">
      <CollapseHeader />
    </ExampleCard>

    <!-- Group -->
    <VueTitleBar id="group" title="Group">
      Only allow a single collapse to display by using the
      <code>group</code> property.
    </VueTitleBar>
    <ExampleCard source="collapse/group">
      <CollapseGroup />
    </ExampleCard>

    <!-- Properties -->
    <VueTitleBar id="props" title="Properties"></VueTitleBar>
    <ApiCard :api="api" class="w-full" />

    <!-- Default Theme -->
    <CssTitleBar id="theme" title="Default Theme"></CssTitleBar>
    <StyleCard source="Collapse.css" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
