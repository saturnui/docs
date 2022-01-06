<script setup lang="ts">
import ComponentCss from './line/css.vue'
import ComponentBasic from './line/basic.vue'
import ComponentLabel from './line/label.vue'
import ComponentButton from './line/button.vue'

const props = [
  {
    name: 'className',
    type: 'string',
    defaultVal: 'wi-component',
    desc: 'Default class used by component',
  },
  {
    name: 'modelValue',
    type: 'number',
    defaultVal: 0,
    desc: 'Current index of the selected component item',
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
  { title: 'Variants', anchor: '#variants' },
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
    <button class="xl:hidden wi-btn wi-btn-icon doc-sidenav-btn" @click="showDrawer = true">
      <tabler-arrow-bar-to-left />
    </button>
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
    <ExampleCard source="line/basic.vue" content-class="px-4 py-6">
      <ComponentBasic />
    </ExampleCard>

    <!-- Slot -->
    <VueTitleBar id="variants" title="Variants">
      With the slot you can insert any element such as a
      <code>label</code> or
      <code>button</code>.
    </VueTitleBar>

    <ExampleCard source="line/label.vue" title="Slot with label" content-class="px-4 py-6">
      <ComponentLabel />
    </ExampleCard>

    <ExampleCard source="line/button.vue" title="Slot with component" content-class="px-4 py-6">
      <ComponentButton />
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
