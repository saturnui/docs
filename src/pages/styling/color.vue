<script setup lang="ts">
import ColorBackground from './color/background.vue'
import ColorText from './color/text.vue'

const sidenavItems = [
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Tailwind Component', anchor: '#css' },
  { title: 'Transition', anchor: '#transition' },
  { title: 'Examples', anchor: '#examples' },
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

  <div class="sa-content p-2 sm:p-8">
    <div class="doc-title">
      <div id="alert" class="text-4xl">
        <span>Colors</span>
      </div>
    </div>
    <div class="doc-desc">
      Desc here...
    </div>

    <!-- Background -->
    <div id="background" class="doc-subtitle">
      <span>Background Colors</span>
    </div>
    <ExampleCard source="/color/background">
      <ColorBackground />
    </ExampleCard>

    <!-- Text -->
    <div id="text" class="doc-subtitle">
      <span>Text Colors</span>
    </div>
    <ExampleCard source="/color/text" content-class="">
      <ColorText />
    </ExampleCard>

  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
