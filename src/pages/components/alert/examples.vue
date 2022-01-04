<script setup lang="ts">
const text = 'I\'m an alert that informs you of stuff.'
</script>

<template>
  <div class="wi-alert" role="alert">
    <span class="p-3">{{ text }}</span>
  </div>

  <div class="wi-alert bg-dark-100 dark:bg-dark-800" role="alert">
    <span class="p-3">{{ text }}</span>
  </div>

  <div class="wi-alert bg-primary text-white" role="alert">
    <span class="p-3">{{ text }}</span>
  </div>

  <div class="wi-alert bg-yellow-100 text-yellow-800" role="alert">
    <span class="p-3">{{ text }}</span>
  </div>

  <div class="wi-alert bg-yellow-600 text-white" role="alert">
    <span class="p-3">{{ text }}</span>
    <button class="wi-btn wi-btn-icon mr-2">
      <tabler-x class="text-xl" />
    </button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: examples/default
</route>
