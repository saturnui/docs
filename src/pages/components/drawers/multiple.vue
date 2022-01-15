<script setup lang="ts">
const showDrawer = ref(false)
</script>

<template>
  <div class="relative flex w-full h-screen">
    <!-- hidden sm:block -->
    <VDrawer v-model="showDrawer" class="wi-highlight min-w-16 max-w-16 sm:min-w-75 sm:max-w-75">
      <div class="flex h-full overflow-hidden">
        <div class="flex flex-col items-center p-2 gap-2 min-w-16 max-w-16 w-full overflow-y-auto bg-dark-800 wi-dark">
          <VTooltip v-for="i in 8" :key="i" placement="right">
            <template #tooltip>Menu Tooltip #{{ i }}</template>
            <VButton class="p-4 border wi-border rounded-lg">
              <tabler-box />
            </VButton>
          </VTooltip>
        </div>
        <div class="hidden sm:block p-2 space-y-2 overflow-y-auto">
          <VButton
            v-for="i in 8"
            :key="i"
            class="p-4 justify-start w-full border wi-border wi-light-dark rounded-lg gap-3"
          >
            <tabler-box />Menu Item
          </VButton>
        </div>
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
