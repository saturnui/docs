<script setup lang="ts">
import AlertCss from './alert/css.vue'
import AlertBasic from './alert/basic.vue'
import AlertTransition from './alert/transition.vue'
import AlertExamples from './alert/examples.vue'

const sidenavItems = [
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'CSS Only', anchor: '#css' },
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
    <div class="doc-desc">
      The
      <strong>VAlert</strong> component is used to convey important information to the user through the
      use of contextual types, icons, and colors. Use in conjunction with <router-link to="/styling/color" class="wi-btn-link text-primary">Colors</router-link> for 4 variations: success, info,
      warning, and error. Default icons are assigned which help represent different actions each type portrays.
      Many parts of an alert such as border, icon, and color can also be customized to fit almost any situation.
    </div>

    <!-- Basic Usage -->
    <div id="basic" class="doc-subtitle">Basic Usage</div>
    <ExampleCard source="/alert/basic">
      <AlertBasic />
    </ExampleCard>

    <!-- CSS Usage -->
    <div id="basic" class="doc-subtitle">CSS Only</div>
    <ExampleCard source="/alert/css">
      <AlertCss />
    </ExampleCard>

    <!-- Transition -->
    <div id="transition" class="doc-subtitle">Transition</div>
    <ExampleCard source="/alert/transition" content-class="h-30">
      <AlertTransition />
    </ExampleCard>

    <!-- Examples -->
    <div id="examples" class="doc-subtitle">Examples</div>
    <ExampleCard source="/alert/examples">
      <AlertExamples />
    </ExampleCard>

    <!-- Theme -->
    <div id="theme" class="doc-subtitle">Default Theme</div>
    <div class="doc-detail">The default styles for this component.</div>
    <StyleCard source="Alert.css" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
