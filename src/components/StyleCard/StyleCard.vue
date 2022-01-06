<script setup lang="ts">
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark-dimmed.css'

const props = defineProps({
  source: {
    type: String,
    default: '',
  },
})
// https://raw.githubusercontent.com/vuwijs/vuwi/feature/theming/themes/base/components/Alert.css
// https://raw.githubusercontent.com/vuwijs/vuwi/feature/theming/themes/base/components/components/Alert.css
const githubBaseUrl = 'https://raw.githubusercontent.com/vuwijs/vuwi/main/themes/base/components/'
const source = `${githubBaseUrl}/${props.source}`
const decoratedCSS = ref('')
const css = ref('')
const { copy, copied } = useClipboard({ source })

onBeforeMount(async () => {
  const result = await fetch(source)
  if (result) {
    const text = await result.text()
    // Grab contents and remove indent
    css.value = text
      .replace(/^[^\0]*[^\0]wi {?([^\0]*?)}\n}/g, '$1')
      .replace(/(\n) {3} /g, '$1')
      .replaceAll('&-', '.wi-')
      // .replaceAll('@apply ', '')
      .trim()
    decoratedCSS.value = hljs.highlight(css.value, { language: 'css' }).value
  }
})
</script>

<template>
  <div class="wi-light-dark border wi-border wi-text relative">
    <div class="flex items-center px-4 py-2">
      <div class="flex-grow"></div>
      <a :href="source" target="_blank" class="wi-btn" icon>
        <carbon-logo-github />
      </a>
    </div>
    <VLine />
    <div
      class="relative max-w-4xl max-h-98 overflow-y-auto p-4 bg-gray-700 dark:bg-dark-800 text-yellow-300 text-sm"
    >
      <pre><code v-html="decoratedCSS"></code></pre>
    </div>
    <div class="flex items-center gap-2 absolute top-16 right-4 text-light-900">
      <span v-if="copied" class="px-2 py-1 bg-purple-600 font-bold rounded">Copied!!</span>
      <VButton icon>
        <tabler-copy class="h-6 w-6" @click="copy(css)" />
      </VButton>
    </div>
  </div>
</template>
