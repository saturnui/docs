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
      <VButton class="wi-primary">Image and Text</VButton>
    </VTooltip>

    <!-- Custom Color -->
    <VTooltip placement="top" tooltip-class="wi-center gap-2 px-3 py-2 text-sm bg-purple-500 bg-opacity-90 text-white font-semibold rounded-lg">
      <template #tooltip>
        <span>This is a tooltip</span>
      </template>
      <VButton class="wi-primary">Custom color</VButton>
    </VTooltip>

    <!-- Inverted Color -->
    <VTooltip placement="top" tooltip-class="wi-center gap-2 px-3 py-2 text-sm wi-dark-light bg-opacity-90 dark:bg-opacity-90 font-semibold rounded-lg">
      <template #tooltip>
        <span>This is a tooltip</span>
      </template>
      <VButton class="wi-primary">Inverted color</VButton>
    </VTooltip>
  </div>
</template>
