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
  <div class="flex justify-center items-center gap-8">
    <VSpinner
      class="w-4 h-4 min-w-4 min-h-4 border-2 border-green-400 border-r-transparent border-t-transparent"
    />

    <VSpinner
      class="sa-fastest w-10 h-10 min-w-10 min-h-10 border-3 border-blue-500 border-r-transparent border-l-transparent"
    />

    <VSpinner
      class="sa-fast w-16 h-16 min-w-10 min-h-10 border-16 border-purple-500 border-r-purple-800 border-l-purple-800"
    />

    <VSpinner
      class="sa-slowest w-20 h-20 min-w-8 min-h-8 border-10 border-r-yellow-400 border-l-green-400 border-t-blue-400 border-b-red-400"
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </VSpinner>
  </div>
</template>
