<script setup lang="ts">
const showDrawer = ref(false)
</script>

<template>
  <div class="relative flex w-full h-screen">
    <div class="relative flex flex-col h-full w-full">
      <div
        class="fixed wi-tl w-full flex items-center wi-dark border-b wi-border p-2 pl-6 max-h-14 min-h-14 z-1"
      >
        <div class="font-bold flex-grow">Logo</div>
        <VButton icon class="sm:hidden" @click="showDrawer = true">
          <tabler-arrow-bar-to-left />
        </VButton>
      </div>
      <div class="relative flex w-full h-full pt-14">
        <div class="w-full p-4 overflow-y-auto">
          <VSkeletonListItem v-for="i in 8" :key="i" />
        </div>
        <VDrawer v-model="showDrawer" autohide="sm" class="wi-highlight">
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
      </div>
    </div>
    <VOverlay v-model="showDrawer" class="z-10" position="right">
      <VDrawer class="h-full bg-dark-700 border-l wi-border py-4">
        <div>
          <div class="space-y-2">
            <div
              v-for="i in 8"
              :key="i"
              class="text-white p-3 px-6 flex items-center justify-start w-full gap-3 hover:bg-dark-500 cursor-pointer"
              @click="showDrawer = false"
            >
              <tabler-box />
              Menu Item #{{ i }}
            </div>
          </div>
        </div>
      </VDrawer>
    </VOverlay>
  </div>
</template>

<route lang="yaml">
meta:
  layout: plain
</route>
