<script setup lang="ts">
// https://vee-validate.logaretm.com/v4/guide/global-validators
import { defineRule } from 'vee-validate'
import { required } from '@vee-validate/rules'
import passwordValidator from '~/helpers/validation/password'

/*
const hasSymbol = (v: string) => !!v.match(/[^a-zA-Z\d]/g)
const hasLower = (v: string) => !!v.match(/[a-z]/g)
const hasUpper = (v: string) => !!v.match(/[A-Z]/g)
const hasNumber = (v: string) => !!v.match(/\d/g)
const passwordValidator = (v: string) => {
  if (v.length < 8) return 'Password requires a minimum of 8 characters'
  if (!hasUpper(v)) return 'Password requires an upper case letter'
  if (!hasLower(v)) return 'Password requires a lower case letter'
  if (!hasNumber(v)) return 'Password requires a numeric value'
  if (!hasSymbol(v)) return 'Password requires a symbol'
  return true
}
*/

defineRule('required', required)
defineRule('password', passwordValidator)

const text = ref('')
</script>

<template>
  <div class="grid gap-4">
    <VuwiTextInput
      v-model="text"
      name="Password"
      label="Password"
      placeholder="Type here..."
      class="border vuwi-border vuwi-text-input-error"
      rules="required|password"
    />
  </div>
</template>
