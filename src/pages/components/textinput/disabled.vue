<script setup lang="ts">
const text = ref('')
</script>

<template>
  <div class="grid gap-4">
    <VTextInput
      v-model="text"
      placeholder="Name"
      class="border wi-border"
      disabled
    />
  </div>
</template>
