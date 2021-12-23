<script setup lang="ts">
// https://vee-validate.logaretm.com/v4/guide/global-validators
import { defineRule } from 'vee-validate'
defineRule('required', (value: string) => {
  if (!value || !value.length) 
    return 'is required'
  return true
})

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
  <VuwiSelect
    v-model="selectedItem"
    :options="items"
    class="border vuwi-border vuwi-shade min-w-60"
    label="Mood"
    rules="required"
  />
</template>
