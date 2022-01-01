<script setup lang="ts">
const photo
  = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
</script>

<template>
  <div class="space-x-4">
    <!-- Image and Text -->
    <VuwiTooltip placement="top">
      <template #tooltip>
        <img :src="photo" width="32" height="32" />
        <span>This is a tooltip</span>
      </template>
      <button class="vuwi-btn vuwi-btn-primary">Image and Text</button>
    </VuwiTooltip>

    <!-- Custom Color -->
    <VuwiTooltip placement="top" tooltip-class="flex items-center gap-2 px-3 py-2 text-sm bg-purple-500 bg-opacity-90 text-white font-semibold rounded-lg">
      <template #tooltip>
        <span>This is a tooltip</span>
      </template>
      <button class="vuwi-btn vuwi-btn-primary">Custom color</button>
    </VuwiTooltip>

    <!-- Inverted Color -->
    <VuwiTooltip placement="top" tooltip-class="flex items-center gap-2 px-3 py-2 text-sm vuwi-card-inverted bg-opacity-90 dark:bg-opacity-90 font-semibold rounded-lg">
      <template #tooltip>
        <span>This is a tooltip</span>
      </template>
      <button class="vuwi-btn vuwi-btn-primary">Inverted color</button>
    </VuwiTooltip>
  </div>
</template>
