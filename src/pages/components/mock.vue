<script setup lang="ts">
import MockWindow from './mock/window.vue'

const sidenavItems = [
  { title: 'Window', anchor: '#window' },
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
    <!-- Title -->
    <div class="doc-title">Mocks</div>
    <div class="doc-desc">Tailwind components for showing content in a mock device.</div>

    <CssTitleBar id="css" title="Tailwind Components"></CssTitleBar>

    <VueSection id="window" title="Window"></VueSection>
    <ExampleCard source="/mock/window/css" content-class="p-4 space-y-4" theme="Mock.css">
      <MockWindow />
    </ExampleCard>

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
