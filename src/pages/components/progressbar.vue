<script setup lang="ts">
import ProgressBarCss from './progress/bar/css.vue'
import ProgressBarBasic from './progress/bar/basic.vue'

const percent = ref(35)
const animate = ref(false)
let timer: any

watch(animate, (v: boolean) => {
  clearInterval(timer)
  if (v) {
    timer = setInterval(() => {
      if (percent.value >= 100) percent.value = 0
      else percent.value += 1
    }, 100)
  }
})

const props = [
  {
    name: 'component',
    type: 'string',
    defaultVal: 'wi-progress-bar',
    desc: 'Default class used by component',
  },
  {
    name: 'percent',
    type: 'number',
    defaultVal: 0,
    desc: 'Amount of the bar to display',
  },
]

const slots = [
  {
    name: 'default',
    desc: 'Slot contains component items',
  },
]

const sidenavItems = [
  { title: 'Tailwind Component', anchor: '#css' },
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Properties', anchor: '#props' },
  { title: 'Slots', anchor: '#slots' },
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
    <!-- Header -->
    <div class="doc-title">Progress Bar</div>
    <div class="doc-desc">
      The
      <code>VProgressBar</code> displays progression in a bar view
    </div>

    <CssTitleBar id="css" title="Tailwind Component"></CssTitleBar>
    <ExampleCard source="/progress/bar/css" theme="ProgressBar.css">
      <ProgressBarCss />
    </ExampleCard>

    <VueTitleBar title="Vue Component"></VueTitleBar>

    <!-- Basic -->
    <VueSection
      id="basic"
      title="Basic Usage"
    >These examples demonstrate only a few different ways to style the progress circle</VueSection>
    <ExampleCard source="progress/bar/basic" content-class="">
      <div class="p-2 wi-highlight">
        <VSwitch v-model="animate" class="wi-switch-sm">
          <span class="pl-2">Show progress</span>
        </VSwitch>
      </div>
      <div class="p-4">
        <ProgressBarBasic :percent="percent" />
      </div>
    </ExampleCard>

    <!-- Properties -->
    <VueSection id="props" title="Properties"></VueSection>
    <ApiCard :api="props" class="w-full" />

    <!-- Slots -->
    <VueSection id="slots" title="Slots"></VueSection>
    <NameDescCard :api="slots" class="w-full" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
