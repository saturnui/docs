<script setup lang="ts">
const show = ref(false)
</script>

<template>
  <div class="flex flex-col gap-4 p-8 pb-4">
    <div class="font-bold text-xl">Space Station</div>
    <div class="text-xs">Content here...</div>
    <div class="grid gap-4 text-sm">
      <VSwitch class="sa-switch-sm">
        <div class="ml-3">Enable teleport</div>
      </VSwitch>
      <VSwitch class="sa-switch-sm">
        <div class="ml-3">Enable teleport</div>
      </VSwitch>
      <VSwitch class="sa-switch-sm">
        <div class="ml-3">Enable teleport</div>
      </VSwitch>
      <VSwitch class="sa-switch-sm">
        <div class="ml-3">Enable teleport</div>
      </VSwitch>
    </div>
    <div class="flex justify-center">
      <VButton size="lg" class="sa-primary w-full">Apply Settings</VButton>
    </div>
  </div>
</template>
