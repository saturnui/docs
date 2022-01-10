<script setup lang="ts">
import SelectCss from './select/css.vue'
import SelectBasic from './select/basic.vue'
import SelectSlotsBusy from './select/slots/busy.vue'
import SelectSlotsClearable from './select/slots/clearable.vue'
import SelectDisabled from './select/disabled.vue'
import SelectError from './select/error.vue'

const props = [
  {
    name: 'className',
    type: 'string',
    defaultVal: 'wi-select',
    desc: 'Default class used by component',
  },
  {
    name: 'modelValue',
    type: 'number',
    defaultVal: 0,
    desc: 'Current index of the selected component item',
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
    name: 'modelValue',
    type: 'string',
    defaultVal: '',
    desc: 'Binds property to TextInput value.',
  },
  {
    name: 'name',
    type: 'string',
    defaultVal: '',
    required: true,
    desc: 'Name of the <code>select input</code>.',
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
    desc: 'Provides rules for validation. See <a href="https://vee-validate.logaretm.com/v4/" target="blank" class="doc-link">vee-validate</a> for details.',
  },
]

const sidenavItems = [
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Slots', anchor: '#slots' },
  { title: 'Disabled', anchor: '#disabled' },
  { title: 'Errors', anchor: '#errors' },
  { title: 'Properties', anchor: '#props' },
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

    <CssTitleBar title="Tailwind Component"></CssTitleBar>
    <ExampleCard source="select/css" theme="Select.css">
      <SelectCss />
    </ExampleCard>

    <VueTitleBar title="Vue Component"></VueTitleBar>

    <!-- Basic -->
    <VueSection id="basic" title="Basic Usage"></VueSection>
    <ExampleCard source="select/basic">
      <SelectBasic />
    </ExampleCard>

    <!-- Slots -->
    <VueSection id="slots" title="Slots">
      Slots provide the ability to enhance the component. There are two slots a
      <span
        class="text-purple-500 font-bold"
      >prepend</span> and an
      <span class="text-purple-500 font-bold">append</span> slot.
    </VueSection>
    <div class="grid gap-4">
      <ExampleCard source="select/slots/clearable" title="Clearable example with icon">
        <SelectSlotsClearable />
      </ExampleCard>
  
      <ExampleCard source="select/slots/busy" title="Busy indicator with check">
        <SelectSlotsBusy />
      </ExampleCard>
    </div>

    <!-- Disabled -->
    <VueSection id="disabled" title="Disabled"></VueSection>
    <ExampleCard source="select/disabled">
      <SelectDisabled />
    </ExampleCard>

    <!-- Errors -->
    <VueSection id="errors" title="Errors"></VueSection>
    <ExampleCard source="select/error">
      <SelectError />
    </ExampleCard>

    <!-- Properties -->
    <VueSection id="props" title="Properties"></VueSection>
    <ApiCard :api="props" class="w-full" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
