<script setup lang="ts">
import AlertBasicVue from '../examples/ui/alert/basic.vue'
import AlertTransitionVue from '../examples/ui/alert/transition.vue'
import AlertExamplesVue from '../examples/ui/alert/examples.vue'

const showAlert = ref(false)
const text = 'I\'m an alert that informs you of stuff'

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
    <ExampleCard source="alert/basic.vue">
      <AlertBasicVue :text="text" />
    </ExampleCard>

    <div class="text-2xl">API</div>
    <ApiCard :api="api" class="w-full" />

    <div class="flex items-center text-2xl gap-2">
      <span>Transition</span>
      <assets-logo-vue class="w-4 h-4" />
    </div>

    <ExampleCard source="alert/transition.vue">
      <div class="flex items-center">
        <div>Shows an alert using Vue transition</div>
        <div class="flex-grow"></div>
        <VuwiSwitch v-model="showAlert">
          <template #left>
            <span class="mr-3 text-sm">Show Alert</span>
          </template>
        </VuwiSwitch>
      </div>
      <AlertTransitionVue :text="text" :show-alert="showAlert" />
    </ExampleCard>

    <div class="text-2xl">Examples</div>
    <ExampleCard source="alert/examples.vue">
      <AlertExamplesVue :text="text" />
    </ExampleCard>
  </div>
</template>

<route lang="yaml">
meta:
  layout: vuwi
</route>
