<script setup lang="ts">
const code = ref('')
</script>

<template>
  <div class="p-4">
    <VCodeInput v-model="code" pattern="XXX-XXX" class="border-2 wi-border wi-shade" />
    <div class="font-mono p-2">{{ code }}</div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: examples/default
</route>
