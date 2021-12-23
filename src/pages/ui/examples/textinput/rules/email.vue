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
    <VuwiTextInput
      v-model="text"
      name="Email"
      label="Username"
      placeholder="Your email address..."
      class="border vuwi-border vuwi-shade vuwi-text-input-error"
      rules="required|email"
    />
  </div>
</template>
