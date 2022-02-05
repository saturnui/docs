<script setup lang="ts">
const dob = ref('')
const text = ref('')
</script>

<template>
  <div class="grid gap-4">
    <VTextInput
      v-model="dob"
      label="Date of Birth"
      placeholder="DD/MM/YYYY"
      class="border sa-border sa-text-input-error"
      mask="##/##/####"
    />
    <VTextInput
      v-model="text"
      label="7 digit code using letters and numbers"
      class="border sa-border"
      mask="XXX-X-XXX"
    ></VTextInput>
  </div>
</template>
