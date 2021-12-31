<script setup lang="ts">
const decors = [
  // border
  'vuwi-border-weakest',
  'vuwi-border-weaker',
  'vuwi-border-weak',
  'vuwi-border',
  'vuwi-border-strong',
  'vuwi-border-stronger',
  'vuwi-border-strongest',
  // shade
  'vuwi-shade-weakest',
  'vuwi-shade-weaker',
  'vuwi-shade-weak',
  'vuwi-shade',
  'vuwi-shade-strong',
  'vuwi-shade-stronger',
  'vuwi-shade-strongest',
  // highlight
  'vuwi-highlight-weakest',
  'vuwi-highlight-weaker',
  'vuwi-highlight-weak',
  'vuwi-highlight',
  'vuwi-highlight-strong',
  'vuwi-highlight-stronger',
  'vuwi-highlight-strongest',
]
</script>

<template>
  <div class="vuwi-content sm:p-8 space-y-6">
    <div class="vuwi-window bg-yellow-400 filter sm:drop-shadow-lg relative doc-preview1">
      <div class="absolute top-1 left-0 pl-26 font-bold vuwi-text flex w-full px-4">
        <div class="border-l dark:border-dark-600 px-6 py-2">Color</div>
        <div class="flex-grow"></div>
      </div>
      <VuwiLine />
      <div v-for="(decor, i) in decors" :key="i" class="flex flex-wrap gap-4 p-4">
        <span :class="decor" class="p-4">
          <code>.{{ decor }}</code>
        </span>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
