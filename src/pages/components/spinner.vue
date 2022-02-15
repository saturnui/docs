<script setup lang="ts">
import SpinnerBasic from './spinner/basic.vue'
import SpinnerVariants from './spinner/variants.vue'
import SpinnerProgressCircle from './spinner/progresscircle.vue'

const sidenavItems = [
  { title: 'Tailwind Component', anchor: '#css' },
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Customizations', anchor: '#custom' },
  { title: 'Progress Circle', anchor: '#progresscircle' },
]

const props = [
  {
    name: 'component',
    type: 'string',
    defaultVal: 'sa-spinner',
    desc: 'Default class used by component',
  },
]

const slots = [
  {
    name: 'default',
    desc: 'Slot contains component such as icon, text, etc.',
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
    <div class="doc-title">Spinner</div>
    <div class="doc-desc">
      Saturn provides classes that can spin using CSS animate. In addition there is a very light-weight class that
      will show a Tailwind Component spinner for simple usage. If you need a more complex spinner, then you can combine
      Saturn spin classes with the
      <router-link to="/components/progresscircle" class="sa-link">VProgressCircle</router-link>component.
    </div>

    <CssTitleBar id="css" title="Tailwind Component"></CssTitleBar>
    <ExampleCard source="/component/css" theme="Spinner.css">
      <!-- <ComponentCss /> -->
      TODO: Tailwind
    </ExampleCard>

    <VueTitleBar title="Vue Component"></VueTitleBar>

    <!-- Basic -->
    <VueSection id="basic" title="Basic Usage">The following demonstrates the default spinner.</VueSection>
    <ExampleCard source="spinner/basic">
      <SpinnerBasic />
    </ExampleCard>

    <!-- Customization -->
    <VueSection
      id="custom"
      title="Customizations"
    >Here are some examples of style changes you can make to change the appearance.</VueSection>
    <ExampleCard source="spinner/variants">
      <SpinnerVariants />
    </ExampleCard>

    <!-- Progress Circle -->
    <VueSection id="progresscircle" title="Progress Circle">
      These examples use the
      <router-link to="/components/progresscircle" class="sa-link">VProgressCircle</router-link>in conjunction with the
      <code>animate-spin</code> to provide some unique animations.
    </VueSection>
    <ExampleCard source="spinner/progresscircle">
      <SpinnerProgressCircle />
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
