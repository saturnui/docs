<script setup lang="ts">
// eslint-disable-next-line no-console
const close = () => console.log('close')
</script>

<template>
  <div class="wi-dialog bg-white dark:bg-dark-600 max-w-xl border wi-border filter shadow-lg">
    <!-- Title -->
    <div name="titlebar">
      <tabler-box />
      <div class="font-bold">Dialog example</div>
      <div class="flex-grow"></div>
      <div class="wi-btn wi-btn-icon" @click="close">
        <tabler-x name="close-icon" />
      </div>
    </div>
    <!-- Content -->
    <div class="p-4 border-t wi-border">This is an example of a modal dialog.</div>
    <!-- Actions -->
    <div name="actions">
      <button class="wi-btn">Cancel</button>
      <button class="wi-btn wi-primary">OK</button>
    </div>
  </div>
</template>
