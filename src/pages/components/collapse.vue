<script setup lang="ts">
import CollapseHeadless from './collapse/headless.vue'
import CollapseHeader from './collapse/header.vue'
import CollapseGroup from './collapse/group.vue'

const props = [
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

const slots = [
  {
    name: 'default',
    desc: 'Slot contains collapsable content',
    binds: [
      {
        name: 'open (default: false)',
        desc: 'Property used to open and close content area',
      },
    ],
  },

  {
    name: 'overlay',
    desc: 'Slot used for items such as navigation, indicators, etc.',
    binds: [
      {
        name: 'open (default: false)',
        desc: 'Property used to open and close content area',
      },
    ],
  },
]

const sidenavItems = [
  { title: 'Headless', anchor: '#headless' },
  { title: 'Header', anchor: '#header' },
  { title: 'Group', anchor: '#group' },
  { title: 'Properties', anchor: '#props' },
  { title: 'Slots', anchor: '#slots' },
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
    <div class="doc-title">Collapse</div>
    <div class="doc-desc">
      Shows and hides content in a collapsable transition. Items can be grouped together only
      allowing one item in the group to be visible.
    </div>

    <!-- Default Theme -->
    <CssTitleBar id="theme" title="Tailwind Component"></CssTitleBar>
    <ExampleCard theme="Collapse.css">
      <!-- <CollapseHeadless /> -->
      TODO: Tailwind Component Example
    </ExampleCard>

    <VueTitleBar title="Vue Component"></VueTitleBar>

    <!-- Basic -->
    <VueSection id="headless" title="Headless">
      By default, collapse will only animate the content. Headers
      are optional.
    </VueSection>
    <ExampleCard source="collapse/headless">
      <CollapseHeadless />
    </ExampleCard>

    <!-- Header -->
    <VueSection id="header" title="Header">Adds a header to open and close the content.</VueSection>
    <ExampleCard source="collapse/header">
      <CollapseHeader />
    </ExampleCard>

    <!-- Group -->
    <VueSection id="group" title="Group">
      Only allow a single collapse to display by using the
      <code>group</code> property.
    </VueSection>
    <ExampleCard source="collapse/group">
      <CollapseGroup />
    </ExampleCard>

    <!-- Properties -->
    <VueSection id="props" title="Properties"></VueSection>
    <ApiCard :api="props" class="w-full" />

    <!-- Slots -->
    <VueSection id="slots" title="Slots"></VueSection>
    <NameDescCard :api="slots" class="w-full" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
