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
})
const source = `https://raw.githubusercontent.com/vuwijs/starter/main/src/pages/ui/examples/${props.source}`
const mode = ref('')
const toggleMode = () => {
  if (mode.value === '')
    mode.value = document.querySelector('html.dark') ? 'light' : 'dark'

  else if (mode.value === 'dark')
    mode.value = 'light'

  else
    mode.value = 'dark'
}
const showCode = ref(false)
const decoratedHTML = ref('')
const html = ref('')
const { copy, copied } = useClipboard({ source })

onBeforeMount(async () => {
  const result = await fetch(source)
  if (result) {
    const text = await result.text()
    // Grab contents and remove indent
    html.value = text.replace(/^[^\0]*<template>\n([^\0]*)?<\/template>/g, '$1').replace(/(\n) {2}/g, '$1').trim()
    decoratedHTML.value = hljs.highlight(html.value, { language: 'html' }).value
  }
})

</script>

<template>
  <div class="vuwi-card border vuwi-border vuwi-text relative">
    <div class="flex items-center px-4 py-2">
      <div class="pl-1 font-bold">{{ title }}</div>
      <div class="flex-grow"></div>
      <VuwiTooltip placement="bottom">
        <template #tooltip>
          <div class="px-3 py-2 text-sm">
            <span>Toggle Dark</span>
          </div>
        </template>
        <button class="vuwi-btn vuwi-btn-icon" @click="toggleMode">
          <mdi-invert-colors />
        </button>
      </VuwiTooltip>
      <VuwiTooltip placement="bottom">
        <template #tooltip>
          <div class="px-3 py-2 text-sm">
            <span>Github Source</span>
          </div>
        </template>
        <a :href="source" target="_blank" class="vuwi-btn vuwi-btn-icon">
          <carbon-logo-github />
        </a>
      </VuwiTooltip>
      <VuwiTooltip placement="bottom">
        <template #tooltip>
          <div class="px-3 py-2 text-sm">
            <span>View Source</span>
          </div>
        </template>
        <button class="vuwi-btn vuwi-btn-icon" @click="showCode = !showCode">
          <tabler-code />
        </button>
      </VuwiTooltip>
    </div>
    <VuwiLine />
    <VuwiCollapse v-model="showCode">
      <div class="relative max-w-4xl p-4 bg-dark-900 text-purple-400 text-sm">
        <pre><code v-html="decoratedHTML"></code></pre>
        <div class="flex items-center gap-2 absolute top-4 right-4 text-light-900">
          <span v-if="copied" class="px-2 py-1 bg-purple-600 font-bold rounded">Copied!!</span>
          <button class="vuwi-btn vuwi-btn-icon">
            <tabler-copy class="h-6 w-6" @click="copy(html)" />
          </button>
        </div>
      </div>
    </VuwiCollapse>
    <VuwiLine v-if="showCode" />
    <div :class="mode">
      <div class="example-preview vuwi-text overflow-y-auto dark:bg-dark-700">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.example-preview {
  padding: 12px;
}

.light .example-preview {
  background: #fefefe;
}
</style>
