<script setup lang="ts">
import AlertCss from './examples/alert/css.vue'
import AlertBasic from './examples/alert/basic.vue'
import AlertTransition from './examples/alert/transition.vue'
import AlertExamples from './examples/alert/examples.vue'

// const showAlert = ref(false)
// const text = 'I\'m an alert that informs you of stuff'

const sidenavItems = [
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Transition', anchor: '#transition' },
  { title: 'Examples', anchor: '#examples' },
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
    <button
      class="xl:hidden wi-btn wi-btn-icon hover:bg-primary hover:text-white"
      @click="showDrawer = true"
    >
      <tabler-arrow-bar-to-left />
    </button>
  </teleport>

  <div class="wi-content p-2 sm:p-8">
    <div class="doc-title">
      <div id="alert" class="text-4xl">
        <span>Alert</span>
      </div>
    </div>
    <!-- CSS Usage -->
    <div id="basic" class="doc-subtitle">
      <span>CSS Only</span>
    </div>
    <ExampleCard source="/alert/css">
      <AlertCss />
    </ExampleCard>

    <!-- Basic Usage -->
    <div id="basic" class="doc-subtitle">
      <span>Basic Usage</span>
    </div>
    <ExampleCard source="/alert/basic">
      <AlertBasic />
    </ExampleCard>
    <!-- Transition -->
    <div id="transition" class="doc-subtitle">
      <span>Transition</span>
    </div>
    <ExampleCard source="/alert/transition" content-class="h-30">
      <AlertTransition />
    </ExampleCard>
    <!-- Examples -->
    <div id="examples" class="doc-subtitle">
      <span>Examples</span>
    </div>
    <ExampleCard source="/alert/examples">
      <AlertExamples />
    </ExampleCard>

    <div id="styles" class="doc-subtitle">
      <span>Base Theme</span>
    </div>
    <StyleCard source="components/Alert.css" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
