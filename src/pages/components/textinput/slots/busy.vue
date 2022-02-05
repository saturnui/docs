<script setup lang="ts">
const text = ref('')
const busy = ref(false)
const valid = ref(false)

watch(text, (val: string) => {
  busy.value = !!val
  valid.value = false
  setTimeout(() => {
    busy.value = false
    valid.value = !!val
  }, 1000)
})
</script>

<template>
  <VTextInput
    v-model="text"
    placeholder="Your name"
    class="border sa-border h-14"
  >
    <template #prepend>
      <tabler-user class="text-xl opacity-30" />
    </template>
    <template #append>
      <div
        v-if="busy"
        class="sa-spinner w-6 h-6 min-w-6 min-h-6 border-3 border-primary border-r-transparent dark:border-gray-500 dark:border-r-transparent"
        role="status"
      >
        <span class="sr-only">Busy...</span>
      </div>
      <tabler-check v-else-if="valid" class="text-green-500 mr-1" />
      <VButton v-if="text" icon @click="text = ''">
        <tabler-x />
      </VButton>
    </template>
  </VTextInput>
</template>
