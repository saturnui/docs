<template>
  <VCollapse v-for="i in 3" :key="i" group="myCustomGroup" class="w-full -mb-1 last:mb-0">
    <template #header="{ open: isOpen }">
      <div class="relative p-3 flex items-center gap-4 w-full border wi-border z-0 wi-light-dark">
        <span class="font-bold flex-grow">Title here</span>
        <tabler-chevron-up
          class="transition duration-150 transform"
          :class="{ 'rotate-180': isOpen }"
        />
      </div>
    </template>
    <div class="border-b border-r border-l wi-border wi-light-dark p-4">
      <SkeletonListItem />
      <SkeletonListItem />
    </div>
  </VCollapse>
</template>

<route lang="yaml">
meta:
  layout: plain
</route>
