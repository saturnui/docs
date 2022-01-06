<script setup lang="ts">
import ComponentCss from './line/css.vue'
import ComponentBasic from './line/basic.vue'
import ComponentVariants from './line/variants.vue'

const props = [
  {
    name: 'className',
    type: 'string',
    defaultVal: 'wi-line',
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
    <div class="doc-title">Line</div>
    <div
      class="doc-desc"
    >Line provides a line break. It also supports an optional slot for inserting a label or another component.</div>

    <CssTitleBar id="css" title="CSS Only">Tailwind Component - No JavaScript.</CssTitleBar>
    <ExampleCard source="/line/css" content-class="px-4 py-6">
      <ComponentCss />
    </ExampleCard>

    <!-- Basic -->
    <VueTitleBar id="basic" title="Basic Usage" />
    <ExampleCard source="line/basic" content-class="px-4 py-6">
      <ComponentBasic />
    </ExampleCard>

    <!-- Slot -->
    <VueTitleBar id="variants" title="Variants">
      With the slot you can insert any element such as a
      <code>label</code> or
      <code>button</code>.
    </VueTitleBar>

    <ExampleCard source="line/label" content-class="grid gap-6 px-4 py-6 gap-4">
      <ComponentVariants />
    </ExampleCard>

    <!-- Properties -->
    <VueTitleBar id="props" title="Properties"></VueTitleBar>
    <ApiCard :api="props" class="w-full" />

    <!-- Slots -->
    <VueTitleBar id="slots" title="Slots"></VueTitleBar>
    <NameDescCard :api="slots" class="w-full" />

    <!-- Style Guide -->
    <CssTitleBar id="theme" title="Default Theme">
      The default styles for this component.
    </CssTitleBar>
    <StyleCard source="Line.css" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
