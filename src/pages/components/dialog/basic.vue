<script setup lang="ts">
// eslint-disable-next-line no-console
const close = () => console.log('close')
</script>

<template>
  <!-- Vue -->
  <VDialog class="bg-white dark:bg-dark-600 max-w-xl border sa-border filter shadow-lg" @close="close">
    <!-- Title -->
    <template #title>
      <tabler-box />
      <div class="font-bold">Dialog example</div>
    </template>
    <!-- Content -->
    <div class="p-4 border-t sa-border">This is an example of a modal dialog.</div>
    <!-- Actions -->
    <template #actions>
      <VButton>Cancel</VButton>
      <VButton class="sa-primary">OK</VButton>
    </template>
  </VDialog>
</template>
