<script setup lang="ts">
// https://vee-validate.logaretm.com/v4/guide/global-validators
import { defineRule } from 'vee-validate'
import { required, email } from '@vee-validate/rules'

const text = ref('')
defineRule('required', required)
defineRule('email', email)
</script>

<template>
  <div class="grid gap-4">
    <VTextInput
      v-model="text"
      name="Email"
      label="Username"
      placeholder="Your email address..."
      class="border wi-border wi-text-input-error"
      rules="required|email"
    />
  </div>
</template>
