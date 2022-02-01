<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <VCollapse v-model="open" slide="up" class="w-full">
    <template #header="{ open: isOpen }">
      <div class="relative p-3 flex items-center gap-4 w-full border wi-border z-0 wi-light-dark">
        <span class="font-bold flex-grow">Title here</span>
        <tabler-chevron-up
          class="transition duration-150 transform"
          :class="{ 'rotate-180': isOpen }"
        />
      </div>
    </template>
    <div class="flex flex-col gap-4 border wi-border border-top-0 wi-light-dark p-4">
      <VSkeletonListItem />
      <VSkeletonListItem />

      <VButton
        icon="lg"
        scale="none"
        class="border wi-border wi-highlight cursor-pointer"
        @click="open = false"
      >Close</VButton>
    </div>
  </VCollapse>
</template>
