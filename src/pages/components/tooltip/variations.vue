<script setup lang="ts">
const photo
  = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
</script>

<template>
  <div class="space-x-4">
    <!-- Image and Text -->
    <VTooltip placement="top">
      <template #tooltip>
        <img :src="photo" width="32" height="32" />
        <span>This is a tooltip</span>
      </template>
      <button class="wi-btn wi-btn-primary">Image and Text</button>
    </VTooltip>

    <!-- Custom Color -->
    <VTooltip placement="top" tooltip-class="flex items-center gap-2 px-3 py-2 text-sm bg-purple-500 bg-opacity-90 text-white font-semibold rounded-lg">
      <template #tooltip>
        <span>This is a tooltip</span>
      </template>
      <button class="wi-btn wi-btn-primary">Custom color</button>
    </VTooltip>

    <!-- Inverted Color -->
    <VTooltip placement="top" tooltip-class="flex items-center gap-2 px-3 py-2 text-sm wi-light-dark-inverted bg-opacity-90 dark:bg-opacity-90 font-semibold rounded-lg">
      <template #tooltip>
        <span>This is a tooltip</span>
      </template>
      <button class="wi-btn wi-btn-primary">Inverted color</button>
    </VTooltip>
  </div>
</template>
