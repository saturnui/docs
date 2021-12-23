<script setup lang="ts">
const text = ref('')
</script>

<template>
  <div class="grid gap-4">
    <VuwiTextInput
      v-model="text"
      label="Place your error here"
      placeholder="Name"
      class="border vuwi-border vuwi-shade py-2 vuwi-text-input-error"
    />
    <VuwiTextInput
      v-model="text"
      label="First name"
      valid
      loading
      error="is required"
      class="border vuwi-border vuwi-shade"
    ></VuwiTextInput>
  </div>
</template>
