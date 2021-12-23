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
    class="border vuwi-border vuwi-shade min-w-60"
  />
</template>
