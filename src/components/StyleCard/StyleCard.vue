<script setup lang="ts">
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark-dimmed.css'

const props = defineProps({
  source: {
    type: String,
    default: '',
  },
})
const source = `https://raw.githubusercontent.com/vuwijs/vuwi/feature/components/components/${props.source}`
const decoratedCSS = ref('')
const css = ref('')
const { copy, copied } = useClipboard({ source })

onBeforeMount(async () => {
  const result = await fetch(source)
  if (result) {
    const text = await result.text()
    // Grab contents and remove indent
    css.value = text
      .replace(/^[^\0]*[^\0]vuwi {?([^\0]*?)}\n}/g, '$1')
      .replace(/(\n) {3} /g, '$1')
      .replaceAll('&-', '.vuwi-')
      .replaceAll('@apply ', '')
      .trim()
    decoratedCSS.value = hljs.highlight(css.value, { language: 'css' }).value
  }
})
</script>

<template>
  <div class="vuwi-card border vuwi-border vuwi-text relative">
    <div class="flex items-center px-4 py-2">
      <div class="flex-grow"></div>
      <a :href="source" target="_blank" class="vuwi-btn vuwi-btn-icon">
        <carbon-logo-github />
      </a>
    </div>
    <VuwiLine />
    <div class="relative max-w-4xl p-4 vuwi-dark text-yellow-300 text-sm">
      <pre><code v-html="decoratedCSS"></code></pre>
      <div class="flex items-center gap-2 absolute top-4 right-4 text-light-900">
        <span v-if="copied" class="px-2 py-1 bg-purple-600 font-bold rounded">Copied!!</span>
        <button class="vuwi-btn vuwi-btn-icon">
          <tabler-copy class="h-6 w-6" @click="copy(css)" />
        </button>
      </div>
    </div>
  </div>
</template>
