<script setup lang="ts">
defineProps({
  title: String,
})
</script>

<template>
  <div class="relative flex flex-col shape-rounded bg-base-100 filter drop-shadow-md">
    <div class="font-extralight text-2xl px-5 py-3 bg-base-200">{{ title }}</div>
    <div class="relative flex-grow">
      <slot />
    </div>
  </div>
</template>
