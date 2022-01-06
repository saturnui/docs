<script setup lang="ts">
const show = ref(false)
</script>

<template>
  <!-- Vue -->
  <div class="relative w-full h-full">
    <div class="absolute wi-mc z-0">
      <VButton class="wi-primary" @click="show = true">Open Dialog</VButton>
    </div>
    <VOverlay v-model="show" modal disable-scroll-target="parent" class="wi-overlay-absolute wi-overlay-shade">
      <VDialog
        class="bg-white dark:bg-dark-600 max-w-xl border wi-border filter shadow-lg"
        @close="show = false"
      >
        <!-- Title -->
        <template #title>
          <tabler-box />
          <div class="font-bold">Dialog example</div>
        </template>
        <!-- Content -->
        <div class="p-4 border-t wi-border">This is an example of a modal dialog.</div>
        <!-- Actions -->
        <template #actions>
          <VButton @click="show = false">Cancel</VButton>
          <VButton class="wi-primary" @click="show = false">OK</VButton>
        </template>
      </VDialog>
    </VOverlay>
  </div>
</template>
