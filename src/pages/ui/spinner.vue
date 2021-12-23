<script setup lang="ts">
import SpinnerBasic from './examples/spinner/basic.vue'
import SpinnerVariants from './examples/spinner/variants.vue'
import SpinnerProgressCircle from './examples/spinner/progresscircle.vue'

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
    <VuwiOverlay v-model="showDrawer" position="right" @swipe:end="handleSwipeEnd">
      <div class="h-full flex flex-col w-80 vuwi-card overflow-y-auto">
        <Sidenav :data="sidenavItems" @click:link="showDrawer = false" />
      </div>
    </VuwiOverlay>
  </teleport>

  <teleport v-if="mounted" to="#appbar-actions">
    <button class="xl:hidden vuwi-btn vuwi-btn-icon doc-sidenav-btn" @click="showDrawer = true">
      <tabler-arrow-bar-to-left />
    </button>
  </teleport>

  <div class="vuwi-content doc-content">
    <!-- Header -->
    <div class="doc-title">Spinner</div>
    <div class="doc-desc">
      Vuwi provides classes that can spin using CSS animate. In addition there is a very light-weight class that
      will show a css only spinner for simple usage. If you need a more complex spinner, then you can combine
      Vuwi spin classes with the
      <router-link to="/ui/progresscircle" class="doc-link">VuwiProgressCircle</router-link>component.
    </div>

    <!-- Basic -->
    <div id="basic" class="doc-subtitle">Basic Usage</div>
    <div
      class="doc-detail"
    >The following demonstrates how to use the CSS only version of the spinner to change its appearance.</div>

    <ExampleCard source="spinner/basic.vue">
      <div class="doc-card-content">
        <SpinnerBasic />
      </div>
    </ExampleCard>

    <!-- Variants -->
    <div id="variants" class="doc-subtitle">Variants</div>
    <div
      class="doc-detail"
    >Here are some examples of style changes you can make to change the appearance</div>

    <ExampleCard source="spinner/variants.vue">
      <div class="doc-card-content">
        <SpinnerVariants />
      </div>
    </ExampleCard>

    <div id="progresscircle" class="doc-subtitle">ProgressCircle</div>
    <div class="doc-detail">
      You can also use the
      <router-link to="/ui/progresscircle" class="doc-link">VuwiProgressCircle</router-link> in conjunction with the spinner animations to achieve custom effects.
    </div>

    <ExampleCard source="spinner/progresscircle.vue">
      <div class="doc-card-content">
        <SpinnerProgressCircle />
      </div>
    </ExampleCard>

    <!-- Style Guide -->
    <div id="styles" class="doc-subtitle">Style Guide</div>
    <StyleCard source="Spinner/VuwiSpinner.css" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: vuwi
</route>
