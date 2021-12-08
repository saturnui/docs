<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,

import { useSdk } from './composables/sdk'

// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'My App',
  meta: [{ name: 'description', content: 'Vuwi - Vue + Vitesse' }],
})

// TODO: Create an SDK that contains all of your API calls to a server
const sdk = useSdk()
sdk.setBaseUrl(`${import.meta.env.VITE_SERVICE_API}`)
</script>

<template>
  <router-view />
</template>
