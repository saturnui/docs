<script setup lang="ts">
const selectedItem = ref<any>('')
const items = [
  { label: 'No selection', value: '' },
  { label: 'Happy', value: 'happy' },
  { label: 'Sad', value: 'sad' },
  { label: 'Neutral', value: 'neutral' },
]
const busy = ref(false)
const valid = ref(false)

watch(selectedItem, (val: string) => {
  busy.value = !!val
  valid.value = false
  setTimeout(() => {
    busy.value = false
    valid.value = !!val
  }, 1000)
})
</script>

<template>
  <VSelect
    v-model="selectedItem"
    label="Select an option"
    :options="items"
    class="border wi-border min-w-60"
  >
    <template #prepend>
      <tabler-mood-neutral class="text-xl opacity-30 w-10 min-w-10 -ml-2 text-left" />
    </template>
    <template #append>
      <div
        v-if="busy"
        class="wi-spinner w-6 h-6 min-w-6 min-h-6 border-3 border-primary border-r-transparent dark:border-gray-500 dark:border-r-transparent"
        role="status"
      >
        <span class="sr-only">Busy...</span>
      </div>
      <tabler-check v-else-if="valid" class="text-green-500 mr-1" />
    </template>
  </VSelect>
</template>
