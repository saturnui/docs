<script setup lang="ts">
const handleClick = () => {
  // eslint-disable-next-line no-console
  console.log('clicked')
}
</script>

<template>
  <VButton @click="handleClick">Button</VButton>
</template>
