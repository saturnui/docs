<script setup lang="ts">
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

const isDark = ref(false)
const showCode = ref(false)
const code = ref()

const content = ref()
onBeforeMount(async () => {
  const result = await fetch('https://raw.githubusercontent.com/vuwijs/starter/feature/vuwi-refactor/src/components/ActionCard/ActionCard.vue')
  const text = await result.text()
  code.value = hljs.highlight(text, { language: 'html' }).value
})

</script>

<template>
  <div class="vuwi-card vuwi-text relative">
    <div class="flex items-center px-4 py-2">
      <div class="flex-grow"></div>
      <button class="vuwi-btn vuwi-btn-icon" @click="isDark = !isDark">
        <mdi-invert-colors />
      </button>
      <button class="vuwi-btn vuwi-btn-icon">
        <carbon-logo-github />
      </button>
      <button class="vuwi-btn vuwi-btn-icon" @click="showCode = !showCode">
        <tabler-code />
      </button>
    </div>
    <VuwiLine />
    <VuwiCollapse v-model="showCode">
      <div class="max-w-4xl bg-blue-800 p-4">
        <pre><code v-html="code"></code></pre>
      </div>
    </VuwiCollapse>
    <div :class="{ dark: isDark, light: !isDark }">
      <div
        ref="content"
        class="p-4 vuwi-text light:bg-light-100 dark:bg-dark-700"
        style="white-space: pre-line"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
