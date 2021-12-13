<script setup lang="ts">
import AlertBasicVue from '../examples/ui/alert/basic.vue'

const showAlert = ref(false)
const text = 'I\'m an alert that informs you of stuff'

const basicExample = `<div class="vuwi-alert bg-purple-200 text-purple-500 text-sm font-medium" role="alert">
  <span class="p-3">{{ text }}</span>
</div>
<div class="vuwi-alert bg-purple-200 text-purple-500 text-sm font-medium" role="alert">
  <span class="p-3">{{ text }}.</span>
  <button class="vuwi-btn vuwi-btn-icon mr-2">
    <tabler-x class="text-xl" />
  </button>
</div>`

const transitionExample = `<transition name="vuwi-alert">
  <div v-if="showAlert" class="vuwi-alert bg-red-700 text-white" role="alert">
    <span class="p-3">${text}</span>
    <button class="vuwi-btn vuwi-btn-icon mr-2" @click="showAlert = false">
      <tabler-x class="text-xl" />
    </button>
  </div>
</transition>`

const alertExample = `<div class="vuwi-alert" role="alert">
  <span class="p-3">${text}</span>
</div>

<div class="vuwi-alert vuwi-highlight" role="alert">
  <span class="p-3">${text}</span>
</div>

<div class="vuwi-alert bg-primary text-white" role="alert">
  <span class="p-3">${text}</span>
</div>

<div class="vuwi-alert bg-yellow-100 text-yellow-800" role="alert">
  <span class="p-3">${text}</span>
</div>

<div class="vuwi-alert bg-yellow-600 text-white" role="alert">
  <span class="p-3">${text}</span>
  <button class="vuwi-btn vuwi-btn-icon mr-2">
    <tabler-x class="text-xl" />
  </button>
</div>`

// const alertCode = alertExample.replace(/(<(pre|script|style|textarea)[^]+?<\/\2)|(^|>)\s+|\s+(?=<|$)/g, '$1$3')

const api = [
  {
    name: 'border',
    type: 'string',
    default: 'undefined',
    desc: 'Puts a border on the alert',
  },
  {
    name: 'border',
    type: 'string',
    default: 'undefined',
    desc: 'Puts a border on the alert',
  },
  {
    name: 'border',
    type: 'string',
    default: 'undefined',
    desc: 'Puts a border on the alert',
  },
]

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
onMounted(() => {
  mounted.value = true
  console.log('location.href:', location.origin + '/examples/ui/alert/basic')
})
</script>

<template>
  <teleport v-if="mounted" to="#sidenav">
    <Sidenav :data="sidenavItems" />
  </teleport>

  <teleport v-if="mounted" to="#sidemenu">
    <VuwiOverlay v-model="showDrawer" position="right" @swipe:end="handleSwipeEnd">
      <div class="h-full flex flex-col w-80 vuwi-light-dark overflow-y-auto">
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

  <div class="vuwi-content p-2 sm:p-8 space-y-6">
    <div class="space-y-4">
      <div class="text-4xl">Alert</div>
      <div class="flex items-center gap-2">
        <span>Vuwi + Tailwind CSS</span>
        <assets-logo-tailwind />
      </div>
    </div>
    <div class="text-2xl">Basic</div>
    <ExampleCard
      source="https://raw.githubusercontent.com/vuwijs/starter/feature/vuwi-refactor/src/pages/ui/alert.vue"
      :code="basicExample"
    >
      <AlertBasicVue :text="text" />
    </ExampleCard>

    <div class="text-2xl">API</div>
    <ApiCard :api="api" class="w-full" />

    <div class="flex items-center text-2xl gap-2">
      <span>Transition</span>
      <assets-logo-vue class="w-4 h-4" />
    </div>

    <ExampleCard
      source="https://raw.githubusercontent.com/vuwijs/starter/feature/vuwi-refactor/src/pages/ui/alert.vue"
      :code="transitionExample"
    >
      <div class="flex items-center">
        <div>Shows an alert using Vue transition</div>
        <div class="flex-grow"></div>
        <VuwiSwitch v-model="showAlert">
          <template #left>
            <span class="mr-3 text-sm">Show Alert</span>
          </template>
        </VuwiSwitch>
      </div>
      <transition name="vuwi-alert">
        <div v-if="showAlert" class="vuwi-alert bg-red-700 text-white mt-4" role="alert">
          <span class="p-3">{{ text }}</span>
          <button class="vuwi-btn vuwi-btn-icon mr-2" @click="showAlert = false">
            <tabler-x class="text-xl" />
          </button>
        </div>
      </transition>
    </ExampleCard>

    <div class="text-2xl">Examples</div>
    <ExampleCard
      source="https://raw.githubusercontent.com/vuwijs/starter/feature/vuwi-refactor/src/pages/ui/alert.vue"
      :code="alertExample"
    >
      <div class="vuwi-alert" role="alert">
        <span class="p-3">{{ text }}</span>
      </div>

      <div class="vuwi-alert vuwi-highlight" role="alert">
        <span class="p-3">{{ text }}</span>
      </div>

      <div class="vuwi-alert bg-primary text-white" role="alert">
        <span class="p-3">{{ text }}</span>
      </div>

      <div class="vuwi-alert bg-yellow-100 text-yellow-800" role="alert">
        <span class="p-3">{{ text }}</span>
      </div>

      <div class="vuwi-alert bg-yellow-600 text-white" role="alert">
        <span class="p-3">{{ text }}</span>
        <button class="vuwi-btn vuwi-btn-icon mr-2">
          <tabler-x class="text-xl" />
        </button>
      </div>
    </ExampleCard>
  </div>
</template>

<route lang="yaml">
meta:
  layout: vuwi
</route>
