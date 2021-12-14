<script setup lang="ts">
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark-dimmed.css'

const props = defineProps({
  source: {
    type: String,
    default: '',
  },
})
const source = `https://raw.githubusercontent.com/vuwijs/starter/feature/vuwi-refactor/src/pages/examples/ui/${props.source}`
const mode = ref('')
const toggleMode = () => {
  if (mode.value === '')
    mode.value = 'dark'

  else if (mode.value === 'dark')
    mode.value = 'light'

  else
    mode.value = 'dark'
}
const showCode = ref(false)
const html = ref('')

onBeforeMount(async () => {
  const result = await fetch(source)
  if (result) {
    const text = await result.text()
    // Grab contents and remove indent
    const rawHTML = text.replace(/^[^\0]*<template>\n([^\0]*)?<\/template>/g, '$1').replace(/(\n) {2}/g, '$1').trim()
    html.value = hljs.highlight(rawHTML, { language: 'html' }).value
  }
})

</script>

<template>
  <div class="vuwi-card border vuwi-border vuwi-text relative">
    <div class="flex items-center px-4 py-2">
      <div class="flex-grow"></div>
      <button class="vuwi-btn vuwi-btn-icon" @click="toggleMode">
        <mdi-invert-colors />
      </button>
      <a :href="source" target="_blank" class="vuwi-btn vuwi-btn-icon">
        <carbon-logo-github />
      </a>
      <button class="vuwi-btn vuwi-btn-icon" @click="showCode = !showCode">
        <tabler-code />
      </button>
    </div>
    <VuwiLine />
    <VuwiCollapse v-model="showCode">
      <div class="relative max-w-4xl p-4 bg-dark-900 text-purple-400 text-sm">
        <pre><code v-html="html"></code></pre>
        <button class="vuwi-btn vuwi-btn-icon absolute top-2 right-4 text-light-900">
          <tabler-copy class="h-6 w-6" />
        </button>
      </div>
    </VuwiCollapse>
    <VuwiLine v-if="showCode" />
    <div :class="mode">
      <div class="p-4 preview vuwi-text overflow-y-auto dark:bg-dark-700">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.light .preview {
  background: #fefefe;
}
</style>
