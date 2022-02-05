<script setup lang="ts">
const val = ref(6)
</script>

<template>
  <VSlider v-model="val" />
  <VTextInput v-model="val" type="number" min="0" max="100" class="border sa-border w-20" />
</template>
