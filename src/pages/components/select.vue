<script setup lang="ts">
import SelectBasic from './select/basic.vue'
import SelectSlotsBusy from './select/slots/busy.vue'
import SelectSlotsClearable from './select/slots/clearable.vue'
import SelectDisabled from './select/disabled.vue'
import SelectError from './select/error.vue'

const api = [
  {
    name: 'theme',
    type: 'string',
    defaultVal: 'vuwi',
    desc: 'Used as the prefix for all Vuwi CSS classes.',
  },
]

const sidenavItems = [
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Slots', anchor: '#slots' },
  { title: 'Disabled', anchor: '#disabled' },
  { title: 'Errors', anchor: '#errors' },
  { title: 'API', anchor: '#api' },
  { title: 'Style Guide', anchor: '#styles' },
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
    <div class="doc-title">Select</div>
    <div class="doc-desc">
      Select decorates the default
      <span class="text-purple-500 font-bold">&lt;select&gt;</span> HTML component.
    </div>

    <!-- Basic -->
    <div id="basic" class="doc-subtitle">Basic Usage</div>
    <div class="doc-detail">Details here...</div>

    <ExampleCard source="select/basic.vue">
      <SelectBasic />
    </ExampleCard>

    <!-- Slots -->
    <div id="slots" class="doc-subtitle">Slots</div>
    <div class="doc-detail">
      Slots provide the ability to enhance the component. There are two slots a
      <span
        class="text-purple-500 font-bold"
      >prepend</span> and an
      <span class="text-purple-500 font-bold">append</span> slot.
    </div>

    <div class="grid gap-4">
      <ExampleCard source="select/slots/clearable.vue" title="Clearable example with icon">
        <SelectSlotsClearable />
      </ExampleCard>
  
      <ExampleCard source="select/slots/busy.vue" title="Busy indicator with check">
        <SelectSlotsBusy />
      </ExampleCard>
    </div>


    <!-- Disabled -->
    <div id="disabled" class="doc-subtitle">Disabled</div>
    <div class="doc-detail">Details here...</div>

    <ExampleCard source="select/disabled.vue">
      <SelectDisabled />
    </ExampleCard>

    <!-- Errors -->
    <div id="errors" class="doc-subtitle">Errors</div>
    <div class="doc-detail">Details here...</div>

    <ExampleCard source="select/error.vue">
      <SelectError />
    </ExampleCard>

    <!-- API -->
    <div id="api" class="doc-subtitle">API</div>
    <ApiCard :api="api" class="w-full" />

    <!-- Style Guide -->
    <div id="styles" class="doc-subtitle">Style Guide</div>
    <StyleCard source="Select/VuwiSelect.css" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
