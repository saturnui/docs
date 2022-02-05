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
      <div class="rounded-full border-gray-200 w-16 h-16 min-w-14 min-h-14 border-12 sa-border" />
      <div class="absolute top-0 left-0 animate-spin sa-slow">
        <div class="absolute top-0 left-0">
          <VProgressCircle
            :percent="35"
            color="border-blue-500"
            class="absolute top-0 left-0 animate-spin"
            :width="10"
            :size="4"
          />
        </div>
        <VProgressCircle
          :percent="20"
          color="border-blue-500"
          class="sa-slow"
          :width="10"
          :size="4"
        />
      </div>
    </div>

    <!-- Variation #2 example -->
    <VProgressCircle
      :percent="percent"
      color="border-red-500"
      class="animate-spin sa-faster"
      :width="8"
      :size="4"
      :style="style"
    />
  </div>
</template>
