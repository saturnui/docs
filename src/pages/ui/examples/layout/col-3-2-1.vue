<template>
  <div class="relative grid gap-4 w-full p-3 doc-preview vuwi-highlight">
    <div class="vuwi-col-3-2-1 gap-4">
      <div v-for="i in 3" :key="i" class="layout-box">{{ i }}</div>
      <div v-for="i in 3" :key="i" class="layout-box2">{{ i + 3 }}</div>
    </div>
  </div>
</template>
