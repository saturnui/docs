<script setup lang="ts">
import TextInputTextfield from './textinput/textfield.vue'
import TextInputStyle from './textinput/style.vue'
import TextInputTextarea from './textinput/textarea.vue'
import TextInputSlotsBusy from './textinput/slots/busy.vue'
import TextInputSlotsClearable from './textinput/slots/clearable.vue'
import TextInputSlotsPassword from './textinput/slots/password.vue'
import TextInputDisabled from './textinput/disabled.vue'
import TextInputMask from './textinput/mask.vue'
import TextInputRules from './textinput/rules/required.vue'
import TextInputEmail from './textinput/rules/email.vue'
import TextInputPassword from './textinput/rules/password.vue'
import TextInputError from './textinput/error.vue'

const api = [
  {
    name: 'component',
    type: 'string',
    defaultVal: 'sa-textinput',
    desc: 'Default class used by component',
  },
  {
    name: 'autocomplete',
    type: 'boolean',
    defaultVal: 'off',
    desc: 'Provides autocompletion rules for the input. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete" target="_blank" class="sa-link">official documentation</a> for details.',
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
    desc: 'Masks user input to conform to a pattern. See <a href="https://beholdr.github.io/maska/" target="blank" class="doc-link">maska</a> for details.',
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
    desc: 'Provides rules for validation. See <a href="https://vee-validate.logaretm.com/v4/" target="blank" class="doc-link">vee-validate</a> for details.',
  },
  {
    name: 'type',
    type: 'string',
    defaultVal: 'text',
    desc: 'Input type',
  },
]

const sidenavItems = [
  { title: 'Textfield', anchor: '#textfield' },
  { title: 'Textarea', anchor: '#textarea' },
  { title: 'Styling', anchor: '#styling' },
  { title: 'Slots', anchor: '#slots' },
  { title: 'Masking', anchor: '#mask' },
  { title: 'Rules', anchor: '#rules' },
  { title: 'Errors', anchor: '#errors' },
  { title: 'Disabled', anchor: '#disabled' },
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
      <div class="h-full flex flex-col w-80 sa-light-dark overflow-y-auto">
        <Sidenav :data="sidenavItems" @click:link="showDrawer = false" />
      </div>
    </VOverlay>
  </teleport>

  <teleport v-if="mounted" to="#appbar-actions">
    <VButton icon class="xl:hidden doc-sidenav-btn" @click="showDrawer = true">
      <tabler-arrow-bar-to-left />
    </VButton>
  </teleport>

  <div class="sa-content doc-content">
    <!-- Header -->
    <div class="doc-title">TextInput</div>
    <div class="doc-desc">
      TextInput is a single component comprising of both a
      <span
        class="text-purple-500 font-bold"
      >textfield</span> and a
      <span class="text-purple-500 font-bold">textarea</span>. The underlying styles and script are the same. TextInput can be used
      as a standalone or with VuwiForm.
    </div>

    <!-- Basic -->
    <div id="textfield" class="doc-subtitle">Textfield</div>
    <div class="doc-detail">
      Default behavior is as a single-line
      <span class="text-purple-500 font-bold">textfield</span>.
    </div>

    <!-- Textfield -->
    <ExampleCard source="textinput/textfield">
      <TextInputTextfield />
    </ExampleCard>

    <!-- Textarea -->
    <div id="textarea" class="doc-subtitle">Textarea</div>
    <div class="doc-detail">
      Multiline changes the behavior to a
      <span class="text-purple-500 font-bold">textarea</span>.
    </div>
    <ExampleCard source="textinput/textarea">
      <TextInputTextarea />
    </ExampleCard>

    <!-- Styling -->
    <div id="styling" class="doc-subtitle">Styling</div>
    <div class="doc-detail">
      By default, textinput doesn't have any styling applied allowing you to determine the appearance. Helper
      classes are provided to easily give it a traditional appearance.
    </div>
    <ExampleCard source="textinput/style">
      <TextInputStyle />
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
      <ExampleCard title="Clearable example with icon" source="textinput/slots/clearable">
        <TextInputSlotsClearable />
      </ExampleCard>

      <ExampleCard title="Toggle show password with icon" source="textinput/slots/password">
        <TextInputSlotsPassword />
      </ExampleCard>

      <ExampleCard title="Busy indicator with check" source="textinput/slots/busy">
        <TextInputSlotsBusy />
      </ExampleCard>
    </div>

    <div id="disabled" class="doc-subtitle">Disabled</div>
    <div class="doc-detail">Indicates text input is disabled</div>
    <ExampleCard source="textinput/disabled">
      <TextInputDisabled />
    </ExampleCard>

    <!-- Masking -->
    <div id="mask" class="doc-subtitle">Masking</div>
    <div class="doc-detail">
      Masks the text input to conform to a pattern. Masks are supported using the library
      <a
        href="https://github.com/beholdr/maska"
        target="_blank"
        class="doc-link"
      >maska</a>.
    </div>
    <ExampleCard source="textinput/mask">
      <TextInputMask />
    </ExampleCard>

    <!-- Rules -->
    <div id="rules" class="doc-subtitle">Rules</div>
    <div
      class="doc-detail"
    >Rules require the user input to meet certain requirements in order to be valid. Rules are implemented using <a href="https://vee-validate.logaretm.com/v4/" target="_blank" class="doc-link">vee-validate</a>.</div>

    <div class="grid gap-4">
      <ExampleCard source="textinput/rules/required" title="Required example">
        <TextInputRules />
      </ExampleCard>

      <ExampleCard source="textinput/rules/email" title="Email example">
        <TextInputEmail />
      </ExampleCard>

      <ExampleCard source="textinput/rules/password" title="Password example using custom validator">
        <TextInputPassword />
      </ExampleCard>
    </div>

    <!-- Errors -->
    <div id="errors" class="doc-subtitle">Errors</div>
    <div class="doc-detail">
      Indicates text input errors. An error will be indicated when a rule is not met or an error is added using the
      <span
        class="text-purple-600"
      >error</span> property
    </div>
    <ExampleCard source="textinput/error">
      <TextInputError />
    </ExampleCard>

    <!-- API -->
    <div id="api" class="doc-subtitle">API</div>
    <ApiCard :api="api" class="w-full" />

    <!-- Style Guide -->
    <!-- <div id="styles" class="doc-subtitle">Style Guide</div>
    <StyleCard source="TextInput/VuwiTextInput.css" /> -->

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
