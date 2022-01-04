<script setup lang="ts">
const text = ref('')
</script>

<template>
  <VTextInput
    v-model="text"
    placeholder="Your name"
    class="border wi-border h-14"
  >
    <template #prepend>
      <tabler-user class="text-xl opacity-30" />
    </template>
    <template #append>
      <button v-if="text" class="wi-btn wi-btn-icon" @click="text = ''">
        <tabler-x />
      </button>
    </template>
  </VTextInput>
</template>
