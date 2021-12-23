<script setup lang="ts">
const text = ref('')
</script>

<template>
  <div class="grid gap-4">
    <VuwiTextInput
      v-model="text"
      placeholder="Name"
      class="border vuwi-border vuwi-shade"
      disabled
    />
  </div>
</template>
