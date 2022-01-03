<script setup lang="ts">
const text = ref('')
</script>

<template>
  <VTextInput v-model="text" placeholder="Your bio" multiline class="border wi-border h-30" />
</template>
