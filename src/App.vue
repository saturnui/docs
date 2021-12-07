<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,

import { useSdk } from './composables/sdk'

// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'My App',
  meta: [{ name: 'description', content: 'Vuwi - Vue + Vitesse' }],
})
const sdk = useSdk()
sdk.setBaseUrl(`${import.meta.env.VITE_AUTH_API_DEVELOPMENT}`)
</script>

<template>
  <router-view />
</template>
