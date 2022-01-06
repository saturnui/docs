<script setup lang="ts">
import ButtonCss from './button/css.vue'
import ButtonDefault from './button/default.vue'
import ButtonIcon from './button/icon.vue'
import ButtonOutline from './button/outline.vue'
import ButtonPill from './button/pill.vue'
import ButtonSizes from './button/size.vue'
import ButtonSolid from './button/solid.vue'

const sidenavItems = [
  { title: 'CSS Only', anchor: '#css' },
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Size', anchor: '#size' },
  { title: 'Solid', anchor: '#solid' },
  { title: 'Outline', anchor: '#outline' },
  { title: 'Rounded', anchor: '#rounded' },
  { title: 'Icon', anchor: '#icon' },
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
      <div class="h-full flex flex-col w-80 wi-light-dark overflow-y-auto">
        <Sidenav :data="sidenavItems" />
      </div>
    </VOverlay>
  </teleport>

  <teleport v-if="mounted" to="#appbar-actions">
    <VButton icon class="xl:hidden doc-sidenav-btn" @click="showDrawer = true">
      <tabler-arrow-bar-to-left />
    </VButton>
  </teleport>

  <div class="wi-content p-2 sm:p-8">
    <div class="space-y-4">
      <div class="doc-title">Button</div>
    </div>
    <div class="doc-desc">
      The <strong>VButton</strong> component only provides a base class. Most of the styling are CSS classes.
    </div>

    <CssTitleBar id="css" title="CSS Only">
      Tailwind Component - No JavaScript.
    </CssTitleBar>
    <ExampleCard source="/button/css" content-class="p-4 flex flex-wrap justify-center items-center gap-4">
      <ButtonCss />
    </ExampleCard>

    <VueTitleBar id="basic" title="Basic Usage">
      Default component with no styling.
    </VueTitleBar>
    <ExampleCard source="/button/default" content-class="p-4 flex flex-wrap justify-center items-center gap-4">
      <ButtonDefault />
    </ExampleCard>

    <!-- Sizes -->
    <CssTitleBar id="size" title="Sizes">
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
    <CssTitleBar id="icon" title="Icon">
      Component showing icon with different styling.
    </CssTitleBar>
    <ExampleCard source="/button/icon" content-class="p-4 flex flex-wrap justify-center items-center gap-4">
      <ButtonIcon />
    </ExampleCard>
    
    <!-- Theme -->
    <CssTitleBar id="theme" title="Default Theme">
      The default styles for this component.
    </CssTitleBar>
    <StyleCard source="Button.css" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
