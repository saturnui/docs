<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,

// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Saturn UI',
  meta: [{ name: 'description', content: 'Saturn - Vue 3 + Tailwind CSS' }],
})
</script>

<template>
  <router-view />
</template>
