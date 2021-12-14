<script setup lang="ts">
defineProps({ text: String })
</script>

<template>
  <div class="vuwi-alert" role="alert">
    <span class="p-3">{{ text }}</span>
  </div>

  <div class="vuwi-alert vuwi-highlight" role="alert">
    <span class="p-3">{{ text }}</span>
  </div>

  <div class="vuwi-alert bg-primary text-white" role="alert">
    <span class="p-3">{{ text }}</span>
  </div>

  <div class="vuwi-alert bg-yellow-100 text-yellow-800" role="alert">
    <span class="p-3">{{ text }}</span>
  </div>

  <div class="vuwi-alert bg-yellow-600 text-white" role="alert">
    <span class="p-3">{{ text }}</span>
    <button class="vuwi-btn vuwi-btn-icon mr-2">
      <tabler-x class="text-xl" />
    </button>
  </div>
</template>
