<script setup lang="ts">
const text = ref('')
</script>

<template>
  <VuwiTextfield
    v-model="text"
    label="First name"
    required
    valid
    loading
    error="is required"
    class="vuwi-border vuwi-shade"
  ></VuwiTextfield>
</template>
