<script setup lang="ts">
import AlertBasic from './examples/alert/basic.vue'
import AlertTransition from './examples/alert/transition.vue'
import AlertExamples from './examples/alert/examples.vue'

const showAlert = ref(false)
const text = 'I\'m an alert that informs you of stuff'

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
    <VuwiOverlay v-model="showDrawer" position="right" @swipe:end="handleSwipeEnd">
      <div class="h-full flex flex-col w-80 vuwi-card overflow-y-auto">
        <Sidenav :data="sidenavItems" @click:link="showDrawer = false" />
      </div>
    </VuwiOverlay>
  </teleport>

  <teleport v-if="mounted" to="#appbar-actions">
    <button
      class="xl:hidden vuwi-btn vuwi-btn-icon hover:bg-primary hover:text-white"
      @click="showDrawer = true"
    >
      <tabler-arrow-bar-to-left />
    </button>
  </teleport>

  <div class="vuwi-content p-2 sm:p-8">
    <div class="doc-title">
      <div id="alert" class="text-4xl">
        <span>Alert</span>
      </div>
    </div>
    <!-- Basic Usage -->
    <div id="basic" class="doc-subtitle">
      <span>Basic Usage</span>
    </div>
    <ExampleCard source="alert/basic.vue">
      <AlertBasic :text="text" />
    </ExampleCard>
    <!-- Transition -->
    <div id="transition" class="doc-subtitle">
      <span>Transition</span>
    </div>
    <ExampleCard source="alert/transition.vue">
      <div class="flex items-center">
        <div>Shows an alert using Vue transition</div>
        <div class="flex-grow"></div>
        <VuwiSwitch v-model="showAlert">
          <template #left>
            <span class="mr-3 text-sm">Show Alert</span>
          </template>
        </VuwiSwitch>
      </div>
      <AlertTransition :text="text" :show-alert="showAlert" @close="showAlert = false" />
    </ExampleCard>
    <!-- Examples -->
    <div id="examples" class="doc-subtitle">
      <span>Examples</span>
    </div>
    <ExampleCard source="alert/examples.vue">
      <AlertExamples :text="text" />
    </ExampleCard>
    <div id="styles" class="doc-subtitle">
      <span>Style Guide</span>
    </div>
    <StyleCard source="Alert/VuwiAlert.css" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: vuwi
</route>
