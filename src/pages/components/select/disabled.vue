<script setup lang="ts">
const selectedItem = ref<any>('')
const items = [
  { label: 'Select your mood', value: '' },
  { label: 'Happy', value: 'happy' },
  { label: 'Sad', value: 'sad' },
  { label: 'Neutral', value: 'neutral' },
]
</script>

<template>
  <VSelect
    v-model="selectedItem"
    :options="items"
    label="Hello"
    class="border wi-border min-w-60"
    disabled
  />
</template>
