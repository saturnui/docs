<script setup lang="ts">
const code = ref('')
</script>

<template>
  <div class="vuwi-content p-8 space-y-6">
    <div class="vuwi-window filter sm:drop-shadow-lg relative">
      <div class="absolute top-1 left-0 pl-26 font-bold vuwi-text flex items-center w-full px-4">
        <div class="border-l dark:border-dark-600 px-6 py-2">Code Input</div>
        <div class="flex-grow"></div>
        <span v-if="code" class="border vuwi-border vuwi-shade px-4 py-1 rounded">{{ code }}</span>
      </div>
      <VuwiLine />
      <div class="px-4 py-3 flex">
        <VuwiCodeInput v-model="code" pattern="XXX-XXX" class="border-2 vuwi-border vuwi-shade" />
      </div>
    </div>
    <!-- Code Snippet -->
    <div class="vuwi-window filter drop-shadow-lg relative">
      <span
        class="absolute top-1 left-26 px-6 py-2 font-bold border-l dark:border-dark-600 vuwi-text"
      >Code Snippet</span>
      <VuwiLine />
      <div class="p-4 vuwi-dark text-sm text-teal-400">
        <code>
          &lt;VuwiCodeInput v-model="code" pattern="XXX-XXX" class="border-2 vuwi-border vuwi-shade" />
        </code>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: vuwi
</route>
