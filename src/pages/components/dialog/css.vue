<script setup lang="ts">
// eslint-disable-next-line no-console
const close = () => console.log('close')
</script>

<template>
  <div class="sa-dialog bg-white dark:bg-dark-600 max-w-xl border sa-border filter shadow-lg">
    <!-- Title -->
    <div name="titlebar">
      <tabler-box />
      <div class="font-bold">Dialog example</div>
      <div class="flex-grow"></div>
      <div class="sa-btn sa-btn-icon" @click="close">
        <tabler-x name="close-icon" />
      </div>
    </div>
    <!-- Content -->
    <div class="p-4 border-t sa-border">This is an example of a modal dialog.</div>
    <!-- Actions -->
    <div name="actions">
      <button class="sa-btn">Cancel</button>
      <button class="sa-btn sa-primary">OK</button>
    </div>
  </div>
</template>
