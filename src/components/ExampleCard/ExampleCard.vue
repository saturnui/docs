<script setup lang="ts">
// import 'ace-builds/src-noconflict/mode-text'
// import 'ace-builds/src-noconflict/theme-chrome'
// import { VAceEditor } from 'vue3-ace-editor'
// import htmlPrettier from 'html-prettify'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark-dimmed.css'
// import 'highlight.js/styles/monokai-sublime.css'

const props = defineProps({
  source: {
    type: String,
    default: '',
  },
  code: {
    type: String,
    default: '',
  },
})
const isDark = ref(false)
const showCode = ref(false)

const html = hljs.highlight(props.code, { language: 'html' }).value

</script>

<template>
  <div class="vuwi-card border vuwi-border vuwi-text relative">
    <div class="flex items-center px-4 py-2">
      <div class="flex-grow"></div>
      <button class="vuwi-btn vuwi-btn-icon" @click="isDark = !isDark">
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
        <button class="vuwi-btn vuwi-btn-icon absolute top-4 right-4 text-light-900">
          <tabler-copy class="h-6 w-6" />
        </button>
      </div>
    </VuwiCollapse>
    <VuwiLine v-if="showCode" />
    <div :class="{ dark: isDark, light: !isDark }">
      <div
        class="p-4 vuwi-text light:bg-light-100 dark:bg-dark-700"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
