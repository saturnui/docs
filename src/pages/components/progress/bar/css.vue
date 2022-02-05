<script setup lang="ts">
defineProps({
  percent: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div class="sa-progress-bar sa-bg rounded-full overflow-hidden">
    <div class="relative" style="width: 35%;">
      <div class="bg-green-500 sa-stripe sa-animate-right sa-slow h-10"></div>
    </div>
  </div>
</template>
