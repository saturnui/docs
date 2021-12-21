<script setup lang="ts">
defineProps({
  percent: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div class="relative h-85">
    <div class="absolute vuwi-center">
      <VuwiProgressCircle :percent="percent" color="border-pink-500" :width="4" :size="2" />
    </div>
    <div class="absolute vuwi-center">
      <VuwiProgressCircle :percent="percent" color="border-yellow-500" :width="8" :size="6" />
    </div>
    <div class="absolute vuwi-center">
      <VuwiProgressCircle :percent="percent" color="border-green-500" :width="16" :size="12" />
    </div>
    <div class="absolute vuwi-center">
      <VuwiProgressCircle :percent="percent" color="border-blue-500" :width="24" :size="20" />
    </div>
  </div>
</template>
