<script setup lang="ts">
import ButtonDefault from './examples/button/default.vue'
import ButtonIcon from './examples/button/icon.vue'
import ButtonOutline from './examples/button/outline.vue'
import ButtonPill from './examples/button/pill.vue'
import ButtonSolid from './examples/button/solid.vue'
import ButtonMisc from './examples/button/misc.vue'

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
    <VuwiOverlay v-model="showDrawer" position="right" @swipe:end="handleSwipeEnd">
      <div class="h-full flex flex-col w-80 vuwi-card overflow-y-auto">
        <Sidenav :data="sidenavItems" />
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
    <div class="space-y-4">
      <div class="doc-title">Button</div>
    </div>
    <div class="doc-subtitle">Default</div>
    <ExampleCard source="button/default.vue">
      <ButtonDefault />
    </ExampleCard>
    <div class="doc-subtitle">Solid</div>
    <ExampleCard source="button/solid.vue">
      <ButtonSolid />
    </ExampleCard>
    <div class="doc-subtitle">Outline</div>
    <ExampleCard source="button/outline.vue">
      <ButtonOutline />
    </ExampleCard>
    <div class="doc-subtitle">Pill</div>
    <ExampleCard source="button/pill.vue">
      <ButtonPill />
    </ExampleCard>
    <div class="doc-subtitle">Icon</div>
    <ExampleCard source="button/icon.vue">
      <ButtonIcon />
    </ExampleCard>
    <div class="doc-subtitle">Misc</div>
    <ExampleCard source="button/misc.vue">
      <ButtonMisc />
    </ExampleCard>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
