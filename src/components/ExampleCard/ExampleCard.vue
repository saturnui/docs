<script setup lang="ts">
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark-dimmed.css'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  source: {
    type: String,
    default: '',
  },
  theme: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: 'h-100',
  },
  contentClass: {
    type: String,
    default: 'p-4',
  },
  iframe: {
    type: Boolean,
    default: false,
  },
})
const exSource = `/components/examples${props.source}`
const sourceBaseUrl = 'https://raw.githubusercontent.com/vuwijs/docs/main/src/pages/components'
const rawSource = `${sourceBaseUrl}/${props.source}.vue`

// const mode = ref('')
// const toggleMode = () => {
//   if (mode.value === '')
//     mode.value = document.querySelector('html.dark') ? 'light' : 'dark'

//   else if (mode.value === 'dark')
//     mode.value = 'light'

//   else
//     mode.value = 'dark'
// }
const showCode = ref(false)
const showStyle = ref(false)
const decoratedHTML = ref('')
const decoratedScript = ref('')
const html = ref('')
const js = ref('')
const view = ref('html')
const { copy, copied } = useClipboard({ source: rawSource })
const tabClass = (isActive: boolean) => {
  if (isActive) return 'bg-purple-600 text-white'
  return 'wi-highlight-stronger'
}

onBeforeMount(async () => {
  const result = await fetch(rawSource)
  if (result) {
    const text = await result.text()
    // Grab contents and remove indent
    html.value = text.replace(/^[^\0]*<template>\n([^\0]*)?<\/template>/g, '$1').replace(/(\n) {2}/g, '$1').trim()
    decoratedHTML.value = hljs.highlight(html.value, { language: 'html' }).value

    js.value = text.includes('<script') ? text.replace(/<script setup lang="ts">([^\0]*?)<\/script>[^\0]*/g, '$1').trim() : ''
    decoratedScript.value = hljs.highlight(js.value, { language: 'typescript' }).value
  }
})
</script>

<template>
  <div class="wi-light-dark border wi-border wi-text relative">
    <div class="flex items-center px-4 py-2 gap-2">
      <div class="pl-1 font-medium">{{ title }}</div>
      <div class="flex-grow"></div>
      <!-- <VTooltip placement="bottom">
        <template #tooltip>
          <div class="px-3 py-2 text-sm">
            <span>Toggle Dark</span>
          </div>
        </template>
        <button class="wi-btn wi-btn-icon" @click="toggleMode">
          <mdi-invert-colors />
        </button>
      </VTooltip>-->
      <VTooltip placement="bottom">
        <template #tooltip>
          <span>View Source</span>
        </template>
        <VButton icon @click="showCode = !showCode">
          <tabler-code />
        </VButton>
      </VTooltip>
      <VTooltip v-if="theme" placement="bottom">
        <template #tooltip>
          <span>View Default Theme</span>
        </template>
        <VButton size="sm" @click="showStyle = !showStyle">
          <file-icons-tailwind class="text-lg" />
        </VButton>
      </VTooltip>
      <VTooltip placement="bottom">
        <template #tooltip>
          <span>Github Source</span>
        </template>
        <a :href="rawSource" target="_blank" class="wi-btn wi-btn-icon">
          <carbon-logo-github />
        </a>
      </VTooltip>
    </div>
    <VLine />
    <VCollapse v-model="showCode" slide="up">
      <div v-if="html && js" class="px-2 py-2 flex item-center gap-2 wi-highlight">
        <VButton
          v-if="html"
          size="sm"
          :class="tabClass(view === 'html')"
          @click="view = 'html'"
        >HTML</VButton>
        <VButton
          v-if="js"
          size="sm"
          :class="tabClass(view === 'js')"
          @click="view = 'js'"
        >Script</VButton>
      </div>
      <!-- Script -->
      <div
        v-if="view === 'js'"
        class="relative max-w-4xl p-4 pr-14 max-h-150 overflow-y-auto bg-gray-700 dark:bg-dark-800 text-purple-400 text-sm"
      >
        <pre><code v-html="decoratedScript"></code></pre>
        <div class="flex items-center gap-2 absolute top-2 right-4 text-light-900">
          <span v-if="copied" class="px-2 py-1 bg-purple-600 font-bold rounded">Copied!!</span>
          <VButton icon class="bg-white bg-opacity-20 hover:bg-primary-light">
            <tabler-copy class="h-6 w-6" @click="copy(js)" />
          </VButton>
        </div>
      </div>
      <!-- Template -->
      <div
        v-if="view === 'html'"
        class="relative max-w-4xl p-4 pr-14 max-h-98 overflow-y-auto bg-gray-700 dark:bg-dark-800 text-purple-400 text-sm"
      >
        <pre><code v-html="decoratedHTML"></code></pre>
      </div>
      <div class="flex items-center gap-2 absolute top-4 right-4 text-light-900">
        <span v-if="copied" class="px-2 py-1 bg-purple-600 font-bold rounded">Copied!!</span>
        <VButton icon class="bg-white bg-opacity-20 hover:bg-primary-light">
          <tabler-copy class="h-6 w-6" @click="copy(html)" />
        </VButton>
      </div>
    </VCollapse>
    <VLine v-if="showCode" />
    <div class="relative bg-white dark:bg-dark-700" :class="contentClass">
      <iframe v-if="iframe" width="100%" height="100%" :src="exSource" scrolling="no"></iframe>
      <slot v-else />
    </div>
  </div>
  <StyleCard v-if="showStyle" title="Default Theme" :source="theme" class="-mt-1" />
</template>

<style>
.light .example-preview {
  background: #fefefe;
}
</style>
