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
    name="mood"
    label="Hello"
    class="border sa-border min-w-60"
    disabled
  />
</template>
