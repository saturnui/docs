<script setup lang="ts">
// https://vee-validate.logaretm.com/v4/guide/global-validators
import { defineRule } from 'vee-validate'
import { required } from '@vee-validate/rules'

defineRule('required', required)

const selectedItem = ref('happy')
const items = [
  { label: 'Select your mood', value: '' },
  { label: 'Happy', value: 'happy' },
  { label: 'Sad', value: 'sad' },
  { label: 'Neutral', value: 'neutral' },
]
nextTick(() => {
  selectedItem.value = ''
})
</script>

<template>
  <VSelect
    v-model="selectedItem"
    :options="items"
    name="mood"
    class="border sa-border min-w-60"
    label="Mood"
    rules="required"
  />
</template>
