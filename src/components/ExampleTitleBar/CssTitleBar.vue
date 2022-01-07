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
  <div :id="id" class="doc-subtitle">
    <div class="relative rounded-lg overflow-hidden">
      <div class="w-9 h-9 flex items-center justify-center rounded-lg bg-light-blue-800">
        <file-icons:windi class="text-white h-4 h-4 mt-3 ml-4" />
      </div>
      <div class="absolute -top-4 -left-2 transform rotate-45 overflow-hidden" style="width: 26px;">
        <div
          class="overflow-hidden w-5 transform -rotate-45 w-12 h-15 flex items-center justify-center bg-light-blue-500"
        >
          <file-icons-tailwind class="text-white w-6 h-6 -mt-4 ml-1" />
        </div>
      </div>
    </div>
    <div class="ml-2 text-2xl">{{ title }}</div>
  </div>
  <div :class="{ 'doc-detail': slots.default }">
    <slot></slot>
  </div>
</template>
