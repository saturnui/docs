<script setup lang="ts">
import ComponentCss from './carousel/css.vue'
import ComponentBasic from './carousel/basic.vue'

const sidenavItems = [
  { title: 'CSS Only', anchor: '#css' },
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Properties', anchor: '#props' },
  { title: 'Slots', anchor: '#slots' },
  { title: 'Default Theme', anchor: '#theme' },
]

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
    desc: 'Slot contains component items',
    binds: [
      {
        name: 'nextSlide(step = 1)',
        desc: 'Moves index to previous item',
      },

      {
        name: 'prevSlide(step = 1)',
        desc: 'Moves index to next item',
      },
    ],
  },
]

const events = [
  {
    name: 'update:modelValue',
    desc: 'This event is bound to <code>v-model</code> and is not subscribed to directly.',
  },
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
    <div class="doc-title">Component</div>
    <div class="doc-desc">Description here...</div>

    <CssTitleBar id="css" title="CSS Only">Tailwind Component - No JavaScript.</CssTitleBar>
    <ExampleCard source="/component/css">
      <ComponentCss />
    </ExampleCard>

    <!-- Basic -->
    <VueTitleBar
      id="basic"
      title="Basic Usage"
    >This example demonstrates navigating items via external control.</VueTitleBar>
    <ExampleCard source="/component/basic">
      <ComponentBasic />
    </ExampleCard>

    <!-- Properties -->
    <VueTitleBar id="props" title="Properties"></VueTitleBar>
    <ApiCard :api="props" class="w-full" />

    <!-- Slots -->
    <VueTitleBar id="slots" title="Slots"></VueTitleBar>
    <NameDescCard :api="slots" class="w-full" />

    <!-- Events -->
    <VueTitleBar id="events" title="Events"></VueTitleBar>
    <NameDescCard :api="events" class="w-full" />

    <!-- Default Theme -->
    <CssTitleBar id="theme" title="Default Theme">The default styles for this component.</CssTitleBar>
    <StyleCard source="Component.css" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
