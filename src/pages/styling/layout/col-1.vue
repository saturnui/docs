<template>
  <div class="relative grid gap-4 w-full p-3 doc-preview wi-highlight">
    <div class="wi-col-1 gap-4">
      <div v-for="i in 1" :key="i" class="layout-box">{{ i }}</div>
      <div v-for="i in 1" :key="i" class="layout-box2">{{ i + 1 }}</div>
    </div>
  </div>
</template>
