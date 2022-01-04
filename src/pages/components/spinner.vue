<script setup lang="ts">
import SpinnerBasic from './spinner/basic.vue'
import SpinnerVariants from './spinner/variants.vue'
import SpinnerProgressCircle from './spinner/progresscircle.vue'

const sidenavItems = [
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'ProgressCircle', anchor: '#progresscircle' },
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
    <div class="doc-title">Spinner</div>
    <div class="doc-desc">
      Vuwi provides classes that can spin using CSS animate. In addition there is a very light-weight class that
      will show a css only spinner for simple usage. If you need a more complex spinner, then you can combine
      Vuwi spin classes with the
      <router-link to="/components/progresscircle" class="doc-link">VuwiProgressCircle</router-link>component.
    </div>

    <!-- Basic -->
    <div id="basic" class="doc-subtitle">Basic Usage</div>
    <div
      class="doc-detail"
    >The following demonstrates how to use the CSS only version of the spinner to change its appearance.</div>

    <ExampleCard source="spinner/basic">
      <SpinnerBasic />
    </ExampleCard>

    <!-- Variants -->
    <div id="variants" class="doc-subtitle">Variants</div>
    <div
      class="doc-detail"
    >Here are some examples of style changes you can make to change the appearance</div>

    <ExampleCard source="spinner/variants">
      <SpinnerVariants />
    </ExampleCard>

    <div id="progresscircle" class="doc-subtitle">ProgressCircle</div>
    <div class="doc-detail">
      You can also use the
      <router-link to="/components/progresscircle" class="doc-link">VuwiProgressCircle</router-link> in conjunction with the spinner animations to achieve custom effects.
    </div>

    <ExampleCard source="spinner/progresscircle">
      <SpinnerProgressCircle />
    </ExampleCard>

    <!-- Style Guide -->
    <div id="styles" class="doc-subtitle">Style Guide</div>
    <StyleCard source="Spinner/VuwiSpinner.css" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
