<script setup lang="ts">
const decors = [
  // border
  'wi-border-weakest',
  'wi-border-weaker',
  'wi-border-weak',
  'wi-border',
  'wi-border-strong',
  'wi-border-stronger',
  'wi-border-strongest',
  // shade
  'wi-shade-weakest',
  'wi-shade-weaker',
  'wi-shade-weak',
  'wi-shade',
  'wi-shade-strong',
  'wi-shade-stronger',
  'wi-shade-strongest',
  // highlight
  'wi-highlight-weakest',
  'wi-highlight-weaker',
  'wi-highlight-weak',
  'wi-highlight',
  'wi-highlight-strong',
  'wi-highlight-stronger',
  'wi-highlight-strongest',
]
</script>

<template>
  <div class="wi-content sm:p-8 space-y-6">
    <div class="wi-window bg-yellow-400 filter sm:drop-shadow-lg relative doc-preview1">
      <div class="absolute top-1 left-0 pl-26 font-bold wi-text flex w-full px-4">
        <div class="border-l dark:border-dark-600 px-6 py-2">Color</div>
        <div class="flex-grow"></div>
      </div>
      <VLine />
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
