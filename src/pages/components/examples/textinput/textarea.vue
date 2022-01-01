<script setup lang="ts">
const text = ref('')
</script>

<template>
  <VuwiTextInput v-model="text" placeholder="Your bio" multiline class="border vuwi-border h-30" />
</template>
