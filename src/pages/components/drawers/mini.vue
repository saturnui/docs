<script setup lang="ts">
const showDrawer = ref(false)
</script>

<template>
  <div class="relative flex w-full h-screen">
    <!-- hidden sm:block -->
    <VDrawer v-model="showDrawer" responsive="sm" class="wi-highlight">
      <div class="hidden sm:block m-2 space-y-2">
        <VButton
          v-for="i in 8"
          :key="i"
          class="p-4 justify-start w-full border wi-border wi-light-dark rounded-lg gap-3"
        >
          <tabler-box />Menu Item
        </VButton>
      </div>
      <div class="flex flex-col items-center py-2 sm:hidden gap-2">
        <VTooltip v-for="i in 8" :key="i" placement="right">
          <template #tooltip>Menu Tooltip #{{ i }}</template>
          <VButton class="p-4 border wi-border rounded-lg">
            <tabler-box />
          </VButton>
        </VTooltip>
      </div>
    </VDrawer>
    <div class="w-full p-4 overflow-y-auto">
      <VSkeletonListItem v-for="i in 8" :key="i" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: plain
</route>
