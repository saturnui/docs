<script setup lang="ts">
defineProps({
  title: {
    type: String,
  },
})

const slots = useSlots()
</script>

<template>
  <div class="doc-subtitle">
    <div class="w-9 h-9 flex items-center justify-center rounded-lg bg-green-600">
      <file-icons:vue class="text-white h-5 h-5" />
    </div>
    <span class="ml-2 font-medium">{{ title }}</span>
  </div>
  <div :class="{ 'doc-detail': slots.default }">
    <slot></slot>
  </div>
</template>
