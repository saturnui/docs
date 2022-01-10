<script setup lang="ts">
defineProps({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
})

const slots = useSlots()
</script>

<template>
  <div :id="id" class="flex items-center gap-2 text-xl px-2 pt-12 pb-4">
    <span class="font-medium">{{ title }}</span>
  </div>
  <div :class="{ 'doc-detail': slots.default }">
    <slot></slot>
  </div>
</template>
