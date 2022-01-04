<template>
  <div class="relative grid gap-4 w-full p-3 doc-preview wi-highlight">
    <div class="wi-col-2-1 gap-4">
      <div v-for="i in 2" :key="i" class="layout-box">{{ i }}</div>
      <div v-for="i in 2" :key="i" class="layout-box2">{{ i + 2 }}</div>
    </div>
  </div>
</template>
