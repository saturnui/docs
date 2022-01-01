<template>
  <div class="relative grid gap-4 w-full p-3 doc-preview vuwi-highlight">
    <div class="vuwi-row gap-4">
      <div v-for="i in 3" :key="i" class="layout-box flex-grow">{{ i }}</div>
    </div>
  </div>
</template>
