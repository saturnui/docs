<script setup lang="ts">
const text = ref('')
</script>

<template>
  <VuwiTextInput v-model="text" placeholder="Your bio" multiline class="border vuwi-border vuwi-shade py-2 h-30"></VuwiTextInput>
  <!-- <VuwiTextInput v-model="text" multiline label="Name" placeholder="Your name" class="border vuwi-border vuwi-shade py-2 max-h-50"></VuwiTextInput>
  <VuwiTextInput v-model="text" label="Name" mask="XXX-XXX" multiline placeholder="I am a textarea" class="border vuwi-border vuwi-shade py-2 h-40"></VuwiTextInput> -->
</template>
