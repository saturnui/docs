<script setup lang="ts">
import PaginationCss from './pagination/css.vue'
import PaginationBasic from './pagination/basic.vue'

const props = [
  {
    name: 'component',
    type: 'string',
    defaultVal: 'vuwi',
    desc: 'Default class used by component',
  },
  {
    name: 'totalVisible',
    type: 'number',
    defaultVal: 0,
    desc: 'The number of items',
  },
  {
    name: 'modelValue',
    type: 'number',
    defaultVal: 0,
    desc: 'Currently selected page',
  },
  {
    name: 'length',
    type: 'number',
    defaultVal: 0,
    desc: 'The length of the pagination component',
  },
]

const slots = [
  {
    name: 'prev-icon',
    desc: 'The icon used to indicate navigation to the previous page',
  },
  {
    name: 'more-icon',
    desc: 'The icon used to indicate more content that cannot be displayed. The default provides a page when on that page plus an active indicator.',
  },
  {
    name: 'next-icon',
    desc: 'The icon used to indicate navigation to the next page',
  },
]

const sidenavItems = [
  { title: 'Tailwind Component', anchor: '#css' },
  { title: 'Basic Usage', anchor: '#basic' },
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
    <div class="doc-title">Pagination</div>
    <div class="doc-desc">
      The pagination component is used to separate long sets of data so that it 
      is easier for a user to consume information. Depending on the length provided, 
      the pagination component will automatically scale. To maintain the current 
      page, simply supply a <code>v-model</code> attribute.
    </div>

    <!-- Css -->
    <CssTitleBar id="css" title="Tailwind Component"></CssTitleBar>
    <ExampleCard source="pagination/css" content-class="p-4 flex justify-center" theme="Pagination.css">
      <PaginationCss />
    </ExampleCard>
    
    <VueTitleBar title="Vue Component"></VueTitleBar>

    <!-- Basic -->
    <VueSection id="basic" title="Basic Usage">
      Demonstrates the default behavior of the component with different visible lengths.
    </VueSection>
    <ExampleCard source="pagination/basic" content-class="p-4 grid gap-6">
      <PaginationBasic />
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
