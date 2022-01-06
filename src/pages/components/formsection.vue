<script setup lang="ts">
import FormSectionCss from './formsection/css.vue'
import FormSectionBasic from './formsection/basic.vue'

const props = [
  {
    name: 'className',
    type: 'string',
    defaultVal: 'wi-formsection',
    desc: 'Default class used by component',
  },
  {
    name: 'title',
    type: 'string',
    defaultVal: '',
    desc: 'Form section title',
  },
  {
    name: 'desc',
    type: 'string',
    defaultVal: '',
    desc: 'Form section description',
  },
]

const sidenavItems = [
  { title: 'CSS Only', anchor: '#css' },
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Properties', anchor: '#props' },
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
    <div class="doc-title">Form Section</div>
    <div class="doc-desc">
      An opinionated Tailwind component for laying out form content.
    </div>

    <!-- Css Only -->
    <CssTitleBar id="css" title="CSS Only">Tailwind Component - No JavaScript.</CssTitleBar>
    <ExampleCard source="formsection/css">
      <FormSectionCss />
    </ExampleCard>

    <!-- Basic -->
    <VueTitleBar id="basic" title="Basic Usage"></VueTitleBar>
    <ExampleCard source="formsection/basic">
      <FormSectionBasic />
    </ExampleCard>

    <!-- Properties -->
    <VueTitleBar id="props" title="Properties"></VueTitleBar>
    <ApiCard :api="props" class="w-full" />

    <!-- Default Theme -->
    <CssTitleBar id="theme" title="Default Theme"></CssTitleBar>
    <StyleCard source="FormSection.css" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
