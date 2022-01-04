<script setup lang="ts">
import ButtonDefault from './button/default.vue'
import ButtonIcon from './button/icon.vue'
import ButtonOutline from './button/outline.vue'
import ButtonPill from './button/pill.vue'
import ButtonSolid from './button/solid.vue'
import ButtonMisc from './button/misc.vue'

const sidenavItems = [
  { title: 'Quick Reference', to: '/pages/form' },
  {
    title: 'Basic Usage',
    links: [{ title: 'Auto', to: '/examples/form' }, { title: 'Fixed', to: '/examples/protected' }],
  },
  {
    title: 'Apply conditionally',
    links: [{ title: 'Hover, focus, and other states', to: '/examples/form' }, { title: 'Breakouts and other media queries', to: '/examples/protected' }],
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
      <div class="h-full flex flex-col w-80 wi-light-dark overflow-y-auto">
        <Sidenav :data="sidenavItems" />
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
    <div class="space-y-4">
      <div class="doc-title">Button</div>
    </div>
    <div class="doc-subtitle">Default</div>
    <ExampleCard source="/button/default">
      <ButtonDefault />
    </ExampleCard>
    
    <div class="doc-subtitle">Solid</div>
    <ExampleCard source="/button/solid">
      <ButtonSolid />
    </ExampleCard>
    
    <div class="doc-subtitle">Outline</div>
    <ExampleCard source="/button/outline">
      <ButtonOutline />
    </ExampleCard>
    
    <div class="doc-subtitle">Pill</div>
    <ExampleCard source="/button/pill">
      <ButtonPill />
    </ExampleCard>
    
    <div class="doc-subtitle">Icon</div>
    <ExampleCard source="/button/icon">
      <ButtonIcon />
    </ExampleCard>
    
    <div class="doc-subtitle">Misc</div>
    <ExampleCard source="/button/misc">
      <ButtonMisc />
    </ExampleCard>

    <!-- Theme -->
    <div id="theme" class="doc-subtitle">Default Theme</div>
    <div class="doc-detail">The default styles for this component.</div>
    <StyleCard source="Button.css" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
