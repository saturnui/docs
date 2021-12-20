<script setup lang="ts">
const text = ref('')
</script>

<template>
  <VuwiTextInput
    v-model="text"
    placeholder="Your name"
    class="border vuwi-border vuwi-shade py-2 h-14"
  >
    <template #prepend>
      <tabler-user class="text-xl opacity-30" />
    </template>
    <template #append>
      <button v-if="text" class="vuwi-btn vuwi-btn-icon" @click="text = ''">
        <tabler-x />
      </button>
    </template>
  </VuwiTextInput>
</template>
