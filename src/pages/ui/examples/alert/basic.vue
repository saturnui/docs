<script setup lang="ts">
defineProps({ text: String })
</script>

<template>
  <div class="vuwi-alert bg-purple-200 text-purple-500 text-sm font-medium" role="alert">
    <span class="p-3">{{ text }}</span>
  </div>
  <div class="vuwi-alert bg-purple-200 text-purple-500 text-sm font-medium" role="alert">
    <span class="p-3">{{ text }}.</span>
    <button class="vuwi-btn vuwi-btn-icon mr-2">
      <tabler-x class="text-xl" />
    </button>
  </div>
</template>
