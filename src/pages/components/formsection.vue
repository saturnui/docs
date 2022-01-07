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
  { title: 'Tailwind Component', anchor: '#css' },
  { title: 'Basic Usage', anchor: '#basic' },
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
    <div class="doc-title">Form Section</div>
    <div class="doc-desc">
      An opinionated Tailwind component for laying out form content.
    </div>

    <!-- Tailwind Component -->
    <CssTitleBar id="css" title="Tailwind Component"></CssTitleBar>
    <ExampleCard source="formsection/css" theme="FormSection.css">
      <FormSectionCss />
    </ExampleCard>

    <VueTitleBar title="Vue Component"></VueTitleBar>

    <!-- Basic -->
    <VueSection id="basic" title="Basic Usage"></VueSection>
    <ExampleCard source="formsection/basic">
      <FormSectionBasic />
    </ExampleCard>

    <!-- Properties -->
    <VueSection id="props" title="Properties"></VueSection>
    <ApiCard :api="props" class="w-full" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
