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
  <VuwiTextInput
    v-model="text"
    placeholder="Your name"
    class="border vuwi-border vuwi-shade h-14"
  >
    <template #prepend>
      <tabler-user class="text-xl opacity-30" />
    </template>
    <template #append>
      <div
        v-if="busy"
        class="vuwi-spinner w-6 h-6 min-w-6 min-h-6 border-3 border-primary border-r-transparent dark:border-gray-500 dark:border-r-transparent"
        role="status"
      >
        <span class="sr-only">Busy...</span>
      </div>
      <tabler-check v-else-if="valid" class="text-green-500 mr-1" />
      <button v-if="text" class="vuwi-btn vuwi-btn-icon" @click="text = ''">
        <tabler-x />
      </button>
    </template>
  </VuwiTextInput>
</template>
