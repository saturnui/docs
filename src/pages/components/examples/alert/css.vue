<script setup lang="ts">
const text = 'I\'m an alert that informs you of stuff'
</script>

<template>
  <div class="wi-alert bg-purple-200 text-purple-500 text-sm font-medium" role="alert">
    <span class="p-3">{{ text }}.</span>
    <button class="wi-btn wi-btn-icon mr-2">
      <tabler-x class="text-xl" />
    </button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: examples/default
</route>
