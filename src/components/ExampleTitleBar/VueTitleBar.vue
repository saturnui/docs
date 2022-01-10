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
  <div :id="id" class="flex items-center gap-2 px-2 pt-8 mt-8 -mb-4">
    <div class="w-9 h-9 flex items-center justify-center rounded-lg bg-green-600">
      <file-icons:vue class="text-white h-5 h-5" />
    </div>
    <span class="ml-2 text-2xl">{{ title }}</span>
  </div>
  <div :class="{ 'doc-detail': slots.default }">
    <slot></slot>
  </div>
</template>
