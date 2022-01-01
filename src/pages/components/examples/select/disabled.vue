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
  <VuwiSelect
    v-model="selectedItem"
    :options="items"
    label="Hello"
    class="border vuwi-border min-w-60"
    disabled
  />
</template>
