<script setup lang="ts">
const decors = [
  // border
  'sa-border-weakest',
  'sa-border-weaker',
  'sa-border-weak',
  'sa-border',
  'sa-border-strong',
  'sa-border-stronger',
  'sa-border-strongest',
  // shade
  'sa-shade-weakest',
  'sa-shade-weaker',
  'sa-shade-weak',
  'sa-shade',
  'sa-shade-strong',
  'sa-shade-stronger',
  'sa-shade-strongest',
  // highlight
  'sa-highlight-weakest',
  'sa-highlight-weaker',
  'sa-highlight-weak',
  'sa-highlight',
  'sa-highlight-strong',
  'sa-highlight-stronger',
  'sa-highlight-strongest',
]
</script>

<template>
  <div class="sa-content sm:p-8 space-y-6">
    <div class="sa-mock-window bg-yellow-400 filter sm:drop-shadow-lg relative doc-preview1">
      <div class="absolute top-1 left-0 pl-26 font-bold sa-text flex w-full px-4">
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

  <!-- Page Nav -->
  <PageNav />
</template>
