<script setup lang="ts">
import TextInputBasic from './examples/textinput/basic.vue'
import TextInputMultlineBasic from './examples/textinput/multiline/basic.vue'
import TextInputSlotsBusy from './examples/textinput/slots/busy.vue'
import TextInputSlotsClearable from './examples/textinput/slots/clearable.vue'
import TextInputSlotsPassword from './examples/textinput/slots/password.vue'
// import TextInputSlots from './examples/textinput/slots.vue'

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
    desc: 'Disables TextInput from user input.',
  },
  {
    name: 'error',
    type: 'string',
    defaultVal: '',
    desc: 'Displays error message for TextInput. Eror message is added to the label.',
  },
  {
    name: 'label',
    type: 'string',
    defaultVal: '',
    desc: 'Label to be displayed for TextInput.',
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
    desc: 'Binds property to TextInput value.',
  },
  {
    name: 'multiline',
    type: 'boolean',
    defaultVal: false,
    desc: 'Text input will use a "textarea" HTML element',
  },
  {
    name: 'name',
    type: 'string',
    defaultVal: 'uuid',
    desc: 'Name of the TextInput. If one is not provided a UUID is generated.',
  },
  {
    name: 'placeholder',
    type: 'string',
    defaultVal: '',
    desc: 'Placeholder for TextInput.',
  },
  {
    name: 'required',
    type: 'boolean',
    defaultVal: false,
    desc: 'Provides indicator if TextInput is required. When used with VuwiForm, will indicate if field is valid.',
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
    <div class="doc-title">Text Input</div>
    <div class="doc-desc">
      Text input is a single component comprising of both a
      <span
        class="text-purple-500 font-bold"
      >text input</span> and a
      <span class="text-purple-500 font-bold">textarea</span>. The behaviors and styling are the same.
    </div>

    <!-- Basic -->
    <div id="basic" class="doc-subtitle">Basic Usage</div>
    <div class="doc-detail">
      Default behavior is as a single-line
      <span class="text-purple-500 font-bold">input</span> field.
    </div>

    <ExampleCard source="textinput/basic.vue">
      <div class="doc-card-content">
        <TextInputBasic />
      </div>
    </ExampleCard>

    <div id="basic" class="doc-subtitle">Basic Multiline Usage</div>
    <div class="doc-detail">
      Multiline changes the behavior to a
      <span class="text-purple-500 font-bold">textarea</span>.
    </div>
    <ExampleCard source="textinput/multiline/basic.vue">
      <div class="doc-card-content">
        <TextInputMultlineBasic />
      </div>
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
      <ExampleCard title="Clearable example with icon" source="textinput/slots/clearable.vue">
        <div class="doc-card-content">
          <TextInputSlotsClearable />
        </div>
      </ExampleCard>

      <ExampleCard title="Toggle show password with icon" source="textinput/slots/password.vue">
        <div class="doc-card-content">
          <TextInputSlotsPassword />
        </div>
      </ExampleCard>

      <ExampleCard title="Busy indicator with check" source="textinput/slots/busy.vue">
        <div class="doc-card-content">
          <TextInputSlotsBusy />
        </div>
      </ExampleCard>
    </div>

    <!-- API -->
    <div id="api" class="doc-subtitle">API</div>
    <ApiCard :api="api" class="w-full" />

    <!-- Style Guide -->
    <div id="styles" class="doc-subtitle">Style Guide</div>
    <StyleCard source="TextInput/VuwiTextInput.css" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: vuwi
</route>
