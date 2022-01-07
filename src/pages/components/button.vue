<script setup lang="ts">
import ButtonCss from './button/css.vue'
import ButtonDefault from './button/default.vue'
import ButtonIcon from './button/icon.vue'
import ButtonOutline from './button/outline.vue'
import ButtonPill from './button/pill.vue'
import ButtonSizes from './button/size.vue'
import ButtonSolid from './button/solid.vue'

const sidenavItems = [
  { title: 'Tailwind Component', anchor: '#css' },
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Size', anchor: '#size' },
  { title: 'Solid', anchor: '#solid' },
  { title: 'Outline', anchor: '#outline' },
  { title: 'Rounded', anchor: '#rounded' },
  { title: 'Icon', anchor: '#icon' },
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

    <CssTitleBar id="css" title="Tailwind Component"></CssTitleBar>
    <ExampleCard source="/button/css" content-class="p-4 flex flex-wrap justify-center items-center gap-4" theme="Button.css">
      <ButtonCss />
    </ExampleCard>

    <VueTitleBar title="Vue Component"></VueTitleBar>

    <VueSection id="basic" title="Basic Usage">
      Default component with no styling.
    </VueSection>
    <ExampleCard source="/button/default" content-class="p-4 flex flex-wrap justify-center items-center gap-4">
      <ButtonDefault />
    </ExampleCard>

    <!-- Sizes -->
    <VueSection id="size" title="Sizes">
      Available sizes provided by theme.
    </VueSection>
    <ExampleCard source="/button/sizes" content-class="p-4 flex flex-wrap justify-center items-center gap-4">
      <ButtonSizes />
    </ExampleCard>
    
    <!-- Solid Background -->
    <VueSection id="solid" title="Solid">
      Component with background.
    </VueSection>
    <ExampleCard source="/button/solid" content-class="p-4 flex flex-wrap justify-center items-center gap-4">
      <ButtonSolid />
    </ExampleCard>
    
    <!-- Outline / Border -->
    <VueSection id="outline" title="Outline">
      Component with borders in combination with different text color styles.
    </VueSection>
    <ExampleCard source="/button/outline" content-class="p-4 flex flex-wrap justify-center items-center gap-4">
      <ButtonOutline />
    </ExampleCard>
    
    <!-- Rounded / Pill -->
    <VueSection id="rounded" title="Rounded">
      Component with different roundess styles.
    </VueSection>
    <ExampleCard source="/button/pill" content-class="p-4 flex flex-wrap justify-center items-center gap-4">
      <ButtonPill />
    </ExampleCard>
    
    <!-- Icon -->
    <VueSection id="icon" title="Icon">
      Component showing icon with different styling.
    </VueSection>
    <ExampleCard source="/button/icon" content-class="p-4 flex flex-wrap justify-center items-center gap-4">
      <ButtonIcon />
    </ExampleCard>

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
