<script lang="ts">
export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
})
</script>

<template>
  <button type="button" class="vuwi-btn vuwi-btn-icon text-gray-400 dark:text-gray-400" @click="$emit('update:modelValue', !modelValue)">
    <tabler-eye-off v-if="modelValue" />
    <tabler-eye v-else />
  </button>
</template>
