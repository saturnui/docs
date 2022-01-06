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
      <VButton v-if="text" icon @click="text = ''">
        <tabler-x />
      </VButton>
    </template>
  </VTextInput>
</template>
