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
      <VButton class="sa-primary">Image and Text</VButton>
    </VTooltip>

    <!-- Custom Color -->
    <VTooltip class="custom-tooltip" placement="top">
      <template #tooltip>
        <span>This is a tooltip</span>
      </template>
      <VButton class="sa-primary">Custom color</VButton>
    </VTooltip>
  </div>
</template>

<style>
.custom-tooltip div[name="tooltip"] {
  @apply bg-purple-500;
}
</style>
