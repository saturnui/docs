<script setup lang="ts">
// eslint-disable-next-line no-console
const close = () => console.log('close')
</script>

<template>
  <div class="wi-dialog bg-white dark:bg-dark-600 max-w-xl border wi-border filter shadow-lg">
    <!-- Title -->
    <div class="wi-dialog-titlebar">
      <tabler-box />
      <div class="font-bold">Dialog example</div>
      <div class="flex-grow"></div>
      <VButton class="wi-btn wi-btn-icon" @click="close">
        <tabler-x class="wi-dialog-close-icon" />
      </VButton>
    </div>
    <!-- Content -->
    <div class="p-4 border-t wi-border">This is an example of a modal dialog.</div>
    <!-- Actions -->
    <div class="wi-dialog-actions">
      <button class="wi-btn">Cancel</button>
      <button class="wi-btn wi-primary">OK</button>
    </div>
  </div>
</template>
