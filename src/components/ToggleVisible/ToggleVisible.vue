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
  <button type="button" class="wi-btn wi-btn-icon text-dark-400 dark:text-dark-400" @click="$emit('update:modelValue', !modelValue)">
    <tabler-eye-off v-if="modelValue" />
    <tabler-eye v-else />
  </button>
</template>
