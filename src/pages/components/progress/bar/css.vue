<script setup lang="ts">
defineProps({
  percent: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div class="wi-progress-bar wi-bg rounded-full overflow-hidden">
    <div class="relative" style="width: 35%;">
      <div class="bg-green-500 wi-stripe wi-animate-right wi-slow h-10"></div>
    </div>
  </div>
</template>
