<template>
  <!-- Vue -->
  <VDialog class="max-w-xl border wi-border filter shadow-lg">
    <!-- Title -->
    <template #title>
      <tabler-box />
      <div class="font-bold">Dialog example</div>
    </template>
    <!-- Content -->
    <div class="p-4 border-t wi-border">This is an example of a modal dialog.</div>
    <!-- Actions -->
    <template #actions>
      <button class="wi-btn">Cancel</button>
      <button class="wi-btn wi-btn-primary">OK</button>
    </template>
  </VDialog>
</template>
