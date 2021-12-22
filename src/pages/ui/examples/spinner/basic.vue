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
  <div class="flex justify-center">
    <div class="vuwi-spinner" />
  </div>
</template>
