<script setup lang="ts">
import ButtonCss from './button/css.vue'
import ButtonDefault from './button/default.vue'
import ButtonIcon from './button/icon.vue'
import ButtonOutline from './button/outline.vue'
import ButtonPill from './button/pill.vue'
import ButtonSizes from './button/size.vue'
import ButtonSolid from './button/solid.vue'

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

    <CssTitleBar id="css" title="CSS Only">
      Tailwind Component - No JavaScript.
    </CssTitleBar>
    <ExampleCard source="/button/css" content-class="p-4 flex flex-wrap justify-center items-center gap-4">
      <ButtonCss />
    </ExampleCard>

    <VueTitleBar id="default" title="Default">
      Default component with no styling.
    </VueTitleBar>
    <ExampleCard source="/button/default" content-class="p-4 flex flex-wrap justify-center items-center gap-4">
      <ButtonDefault />
    </ExampleCard>

    <!-- Sizes -->
    <CssTitleBar id="sizes" title="Sizes">
      Available sizes provided by theme.
    </CssTitleBar>
    <ExampleCard source="/button/sizes" content-class="p-4 flex flex-wrap justify-center items-center gap-4">
      <ButtonSizes />
    </ExampleCard>
    
    <!-- Solid Background -->
    <CssTitleBar id="solid" title="Solid">
      Component with background.
    </CssTitleBar>
    <ExampleCard source="/button/solid" content-class="p-4 flex flex-wrap justify-center items-center gap-4">
      <ButtonSolid />
    </ExampleCard>
    
    <!-- Outline / Border -->
    <CssTitleBar id="outline" title="Outline">
      Component with borders in combination with different text color styles.
    </CssTitleBar>
    <ExampleCard source="/button/outline" content-class="p-4 flex flex-wrap justify-center items-center gap-4">
      <ButtonOutline />
    </ExampleCard>
    
    <!-- Rounded / Pill -->
    <CssTitleBar id="rounded" title="Rounded">
      Component with different roundess styles.
    </CssTitleBar>
    <ExampleCard source="/button/pill" content-class="p-4 flex flex-wrap justify-center items-center gap-4">
      <ButtonPill />
    </ExampleCard>
    
    <!-- Icon -->
    <CssTitleBar id="rounded" title="Icon">
      Component showing icon with different styling.
    </CssTitleBar>
    <ExampleCard source="/button/icon" content-class="p-4 flex flex-wrap justify-center items-center gap-4">
      <ButtonIcon />
    </ExampleCard>
    
    <!-- Theme -->
    <div id="theme" class="doc-subtitle">Default Theme</div>
    <div class="doc-detail">The default styles for this component.</div>
    <StyleCard source="Button.css" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
