<script setup lang="ts">
import ComponentCss from './line/css.vue'
import ComponentBasic from './line/basic.vue'
import ComponentVariants from './line/variants.vue'

const props = [
  {
    name: 'component',
    type: 'string',
    defaultVal: 'sa-line',
    desc: 'Default class used by component',
  },
]

const slots = [
  {
    name: 'default',
    desc: 'Slot contains the content such as a button or label.',
  },
]

const sidenavItems = [
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Using Slots', anchor: '#variants' },
  { title: 'Slot', anchor: '#slot' },
  { title: 'Default Theme', anchor: '#theme' },
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
    <div class="doc-title">Line</div>
    <div
      class="doc-desc"
    >Line provides a line break. It also supports an optional slot for inserting a label or another component.</div>

    <CssTitleBar id="css" title="Tailwind Component"></CssTitleBar>
    <ExampleCard source="/line/css" content-class="px-4 py-6" theme="Line.css">
      <ComponentCss />
    </ExampleCard>

    <VueTitleBar title="Vue Component"></VueTitleBar>

    <!-- Basic -->
    <VueSection id="basic" title="Basic Usage" />
    <ExampleCard source="line/basic" content-class="px-4 py-6">
      <ComponentBasic />
    </ExampleCard>

    <!-- Slot -->
    <VueSection id="variants" title="Variants">
      With the slot you can insert any element such as a
      <code>label</code> or
      <code>button</code>.
    </VueSection>
    <ExampleCard source="line/variants" content-class="grid gap-6 px-4 py-6 gap-4">
      <ComponentVariants />
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
