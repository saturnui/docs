<script setup lang="ts">
const percent = ref(50)
</script>

<template>
  <VuwiProgressBar :percent="percent" class="vuwi-bg">
    <div class="bg-green-500 h-3"></div>
  </VuwiProgressBar>
</template>
