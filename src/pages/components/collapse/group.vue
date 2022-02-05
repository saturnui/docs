<template>
  <VCollapse v-for="i in 3" :key="i" group="myCustomGroup" class="w-full -mb-1 last:mb-0">
    <template #header="{ open: isOpen }">
      <div class="relative p-3 flex items-center gap-4 w-full border sa-border z-0 sa-light-dark">
        <span class="font-bold flex-grow">Title here</span>
        <tabler-chevron-up
          class="transition duration-150 transform"
          :class="{ 'rotate-180': isOpen }"
        />
      </div>
    </template>
    <div class="border-b border-r border-l sa-border sa-light-dark p-4">
      <VSkeletonListItem />
      <VSkeletonListItem />
    </div>
  </VCollapse>
</template>
