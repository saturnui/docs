<script setup lang="ts">
import TextfieldBasic from './examples/textfield/basic.vue'
import TextfieldSlots from './examples/textfield/slots.vue'

const api = [
  {
    name: 'theme',
    type: 'string',
    defaultVal: 'vuwi',
    desc: 'Used as the prefix for all Vuwi CSS classes.',
  },
  {
    name: 'autocomplete',
    type: 'boolean',
    defaultVal: 'off',
    desc: 'Provides autocompletion rules for the input. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete" target="_blank" class="vuwi-btn-link text-blue-500">official documentation</a> for details.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultVal: false,
    desc: 'Disables textfield from user input.',
  },
  {
    name: 'error',
    type: 'string',
    defaultVal: '',
    desc: 'Displays error message for textfield. Eror message is added to the label.',
  },
  {
    name: 'label',
    type: 'string',
    defaultVal: '',
    desc: 'Label to be displayed for textfield.',
  },
  {
    name: 'mask',
    type: 'string',
    defaultVal: '',
    desc: 'Masks user input to conform to a pattern. See <a href="https://beholdr.github.io/maska/" target="blank">vee-validate</a> for details.',
  },
  {
    name: 'modelValue',
    type: 'string',
    defaultVal: '',
    desc: 'Binds property to textfield value.',
  },
  {
    name: 'name',
    type: 'string',
    defaultVal: 'uuid',
    desc: 'Name of the textfield. If one is not provided a UUID is generated.',
  },
  {
    name: 'placeholder',
    type: 'string',
    defaultVal: '',
    desc: 'Placeholder for textfield.',
  },
  {
    name: 'required',
    type: 'boolean',
    defaultVal: false,
    desc: 'Provides indicator if textfield is required. When used with VuwiForm, will indicate if field is valid.',
  },
  {
    name: 'rules',
    type: 'function',
    defaultVal: null,
    desc: 'Provides rules for validation.',
  },
  {
    name: 'type',
    type: 'string',
    defaultVal: 'text',
    desc: 'Input type',
  },
]

const sidenavItems = [
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Static', anchor: '#static' },
  { title: 'Variations', anchor: '#variations' },
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
    <VuwiOverlay v-model="showDrawer" position="right" @swipe:end="handleSwipeEnd">
      <div class="h-full flex flex-col w-80 vuwi-card overflow-y-auto">
        <Sidenav :data="sidenavItems" @click:link="showDrawer = false" />
      </div>
    </VuwiOverlay>
  </teleport>

  <teleport v-if="mounted" to="#appbar-actions">
    <button class="xl:hidden vuwi-btn vuwi-btn-icon doc-sidenav-btn" @click="showDrawer = true">
      <tabler-arrow-bar-to-left />
    </button>
  </teleport>

  <div class="vuwi-content doc-content">
    <!-- Header -->
    <div class="doc-title">Textfield</div>
    <div class="doc-desc">TODO: Text input description here</div>

    <!-- Basic -->
    <div id="basic" class="doc-subtitle">Basic Usage</div>
    <div class="doc-detail">
      Bare-bones basic example.
    </div>

    <ExampleCard source="textfield/basic.vue">
      <TextfieldBasic />
    </ExampleCard>

    <!-- Slots -->
    <div id="slots" class="doc-subtitle">Slots</div>
    <div class="doc-detail">
      Slots provide the ability to enhance the component. There are two slots a
      <span class="text-purple-500 font-bold">prepend</span> and an
      <span class="text-purple-500 font-bold">append</span> slot.
    </div>

    <ExampleCard source="textfield/slots.vue">
      <TextfieldSlots />
    </ExampleCard>

    <!-- API -->
    <div id="api" class="doc-subtitle">API</div>
    <ApiCard :api="api" class="w-full" />

    <!-- Style Guide -->
    <div id="styles" class="doc-subtitle">Style Guide</div>
    <StyleCard source="Textfield/VuwiTextfield.css" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: vuwi
</route>
