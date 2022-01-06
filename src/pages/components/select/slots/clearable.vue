<script setup lang="ts">
const selectedItem = ref<any>('')
const items = [
  { label: 'No selection', value: '' },
  { label: 'Happy', value: 'happy' },
  { label: 'Sad', value: 'sad' },
  { label: 'Neutral', value: 'neutral' },
]
</script>

<template>
  <VSelect
    v-model="selectedItem"
    label="Select your mood"
    :options="items"
    class="border wi-border min-w-60"
  >
    <template #prepend>
      <tabler-mood-neutral class="text-xl opacity-30 w-10 min-w-10 -ml-2 text-left" />
    </template>
    <template #append>
      <VButton v-if="selectedItem" icon @click="selectedItem = ''">
        <tabler-x />
      </VButton>
    </template>
  </VSelect>
</template>
