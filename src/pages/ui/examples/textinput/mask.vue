<script setup lang="ts">
const dob = ref('')
const text = ref('')
</script>

<template>
  <div class="grid gap-4">
    <VuwiTextInput
      v-model="dob"
      label="Date of Birth"
      placeholder="DD/MM/YYYY"
      class="border vuwi-border vuwi-shade vuwi-text-input-error"
      mask="##/##/####"
    />
    <VuwiTextInput
      v-model="text"
      label="7 digit code using letters and numbers"
      class="border vuwi-border vuwi-shade"
      mask="XXX-X-XXX"
    ></VuwiTextInput>
  </div>
</template>
