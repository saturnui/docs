<script setup lang="ts">
import SkeletonCss from './skeleton/css.vue'
import SkeletonListItem from './skeleton/listitem.vue'
import SkeletonDecorated from './skeleton/decorated.vue'

const api = [
  {
    name: 'component',
    type: 'string',
    defaultVal: 'vuwi',
    desc: 'Default class used by component',
  },
]

const sidenavItems = [
  { title: 'List Item', anchor: '#listitem' },
  { title: 'Decorated', anchor: '#decorated' },
  { title: 'Properties', anchor: '#props' },
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
    <div class="doc-title">Skeletons</div>
    <div
      class="doc-desc"
    >Skeletons can be used as boilerplate designs when creating mockups or while data is being loaded onto the screen.</div>

    <CssTitleBar id="css" title="Tailwind Component">
      The means to create your own skelton components is provided by Tailwind CSS. You can learn more here 
      <a href="https://tailwindcss.com/docs/animation#pulse" class="wi-link">https://tailwindcss.com/docs/animation#pulse</a>.
    </CssTitleBar>
    <ExampleCard source="/skeleton/css">
      <SkeletonCss />
    </ExampleCard>

    <VueTitleBar id="css" title="Vue Component"></VueTitleBar>
    <!-- List Item -->
    <VueSection id="listitem" title="List Item">
      Use as a multiline list item
    </VueSection>
    <ExampleCard source="skeleton/listitem">
      <SkeletonListItem />
    </ExampleCard>

    <!-- Decorated -->
    <div id="decorated" class="doc-subtitle">Decorated</div>
    <div
      class="doc-detail"
    >This demonstrates how to add a border, shadow and pulse to any Skeleton component</div>

    <ExampleCard source="skeleton/decorated">
      <SkeletonDecorated />
    </ExampleCard>

    <!-- API -->
    <div id="api" class="doc-subtitle">API</div>
    <ApiCard :api="api" class="w-full" />

    <!-- Style Guide -->
    <div id="styles" class="doc-subtitle">Style Guide</div>
    <StyleCard source="TextInput.css" />

    <PageNav />
  </div>
</template>
