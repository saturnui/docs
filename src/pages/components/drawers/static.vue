<script setup lang="ts">
const showDrawer = ref(false)
</script>

<template>
  <div class="relative flex w-full h-screen">
    <!-- hidden sm:block -->
    <VDrawer v-model="showDrawer" class="sa-highlight min-w-75 max-w-75">
      <div class="block m-2 space-y-2">
        <VButton
          v-for="i in 8"
          :key="i"
          class="p-4 justify-start w-full border sa-border sa-light-dark rounded-lg gap-3"
        >
          <tabler-box />Menu Item
        </VButton>
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
