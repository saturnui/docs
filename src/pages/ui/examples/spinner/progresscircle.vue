<script setup lang="ts">
const percent = ref(0)
let diff = 10
const style = { transform: '' }
setInterval(() => {
  if (percent.value > 50) {
    diff = -5
    style.transform = 'scaleX(-1)'
  }
  if (percent.value <= 0) {
    diff = 5
    style.transform = ''
  }
  percent.value += diff
}, 200)

</script>

<template>
  <div class="flex justify-center gap-12">
    
    <!-- Variation #1 example -->
    <div class="relative w-12 h-12">
      <div class="vuwi-spinner vuwi-spin-none border-gray-200 w-16 h-16 min-w-14 min-h-14 border-12 vuwi-border" />
      <div class="absolute top-0 left-0 vuwi-spin-slowest">
        <div class="absolute top-0 left-0">
          <VuwiProgressCircle
            :percent="35"
            color="border-blue-500"
            class="absolute top-0 left-0 vuwi-spin"
            :width="10"
            :size="4"
          />
        </div>
        <VuwiProgressCircle
          :percent="20"
          color="border-blue-500"
          class="vuwi-slow"
          :width="10"
          :size="4"
        />
      </div>
    </div>

    <!-- Variation #2 example -->
    <VuwiProgressCircle
      :percent="percent"
      color="border-red-500"
      class="vuwi-spin-faster"
      :width="8"
      :size="4"
      :style="style"
    />
  </div>
</template>
