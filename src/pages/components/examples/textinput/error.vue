<script setup lang="ts">
// https://vee-validate.logaretm.com/v4/guide/global-validators
import { defineRule } from 'vee-validate'
import { required } from '@vee-validate/rules'

const text = ref('  ')
defineRule('required', required)

nextTick(() => {
  text.value = ''
})
</script>

<template>
  <div class="grid gap-4">
    <VuwiTextInput
      v-model="text"
      name="Your name"
      label="Your name"
      placeholder="Name"
      class="border vuwi-border vuwi-text-input-error"
      rules="required"
    />
    <VuwiTextInput
      v-model="text"
      label="First name"
      error="Manually inserted error"
      class="border vuwi-border"
    ></VuwiTextInput>
  </div>
</template>
