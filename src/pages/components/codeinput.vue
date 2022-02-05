<script setup lang="ts">
import CodeCss from './codeinput/css.vue'
import CodeBasic from './codeinput/basic.vue'

const props = [
  {
    name: 'component',
    type: 'string',
    defaultVal: 'sa-codeinput',
    desc: 'Default class used by component',
  },
  {
    name: 'modelValue',
    type: 'string',
    defaultVal: '',
    desc: 'Value of the code input',
  },
  {
    name: 'pattern',
    type: 'string',
    defaultVal: 'XXX-XXX',
    desc: 'The pattern which the code will display as input and separators.',
  },
  {
    name: 'inputClass',
    type: 'string',
    defaultVal: '',
    desc: 'The style of the input',
  },
]

const sidenavItems = [
  { title: 'Basic Usage', anchor: '#basic' },
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
    <div class="doc-title">Code Input</div>
    <div class="doc-desc">
      The <code>VCodeInput</code> component is useful for items where an entry code is used such as two-factor authentication,
      forgotten passwords, coupons, etc. The mask can be setup with any number of alpha and
      numeric values as well as seperators.
    </div>

    <!-- CSS -->
    <CssTitleBar id="css" title="Tailwind Component"></CssTitleBar>
    <ExampleCard source="/codeinput/css" theme="CodeInput.css">
      <CodeCss />
    </ExampleCard>

    <VueTitleBar title="Vue Component"></VueTitleBar>

    <!-- Basic -->
    <VueSection id="css" title="Basic Usage">
      Demonstrates the default behavior of the code input.
    </VueSection>
    <ExampleCard source="/codeinput/basic" content-class="p-4 flex items-center gap-4">
      <CodeBasic />
    </ExampleCard>

    <!-- Basic -->
    <VueSection id="props" title="Properties"></VueSection>
    <ApiCard :api="props" class="w-full" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
