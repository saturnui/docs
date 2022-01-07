<script setup lang="ts">
import AlertCss from './alert/css.vue'
import AlertBasic from './alert/basic.vue'
import AlertVariation from './alert/variation.vue'
import AlertTransition from './alert/transition.vue'

const sidenavItems = [
  { title: 'Tailwind', anchor: '#css' },
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Variations', anchor: '#variations' },
  { title: 'Transition', anchor: '#transition' },
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

  <div class="wi-content p-2 sm:p-8">
    <div class="doc-title">
      <div id="alert" class="text-4xl">
        <span>Alert</span>
      </div>
    </div>
    <div class="doc-desc">
      The
      <strong>VAlert</strong> component is used to convey important information to the user through the
      use of contextual types, icons, and colors. Use in conjunction with
      <router-link to="/styling/color" class="wi-link text-primary">Colors</router-link>for 4 variations: success, info,
      warning, and error. Default icons are assigned which help represent different actions each type portrays.
      Many parts of an alert such as border, icon, and color can also be customized to fit almost any situation.
    </div>

    <!-- CSS Usage -->
    <CssTitleBar id="css" title="Tailwind Component"></CssTitleBar>
    <ExampleCard source="/alert/css">
      <AlertCss />
    </ExampleCard>

    <VueTitleBar title="Vue Component"></VueTitleBar>

    <!-- Basic Usage -->
    <VueSection id="basic" title="Basic Usage"></VueSection>
    <ExampleCard source="/alert/basic">
      <AlertBasic />
    </ExampleCard>

    <!-- Variations -->
    <VueSection
      id="variations"
      title="Variations"
    >These examples demonstrate using icons, close button and different color styles available in Vuwi's theme.</VueSection>
    <ExampleCard source="/alert/variation">
      <AlertVariation />
    </ExampleCard>

    <!-- Transition -->
    <VueSection
      id="transition"
      title="Transition"
    >This example demonstrates how to use a Vue transition to show / hide an alert.</VueSection>
    <ExampleCard source="/alert/transition" content-class="h-30">
      <AlertTransition />
    </ExampleCard>

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
