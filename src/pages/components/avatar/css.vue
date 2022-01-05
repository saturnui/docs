<script setup lang="ts">
const photo
  = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
</script>

<template>
  <div class="wi-avatar bg-purple-600 text-white" size="sm">
    <div>A</div>
  </div>
  <div class="wi-avatar rounded-full bg-purple-600 text-white">
    <img :src="photo" />
  </div>
  <div class="wi-avatar overflow-hidden rounded-full bg-purple-600 text-white" size="lg">
    <div>A</div>
  </div>
  <div class="wi-avatar overflow-hidden rounded-full bg-purple-600 text-white" size="xl">
    <img :src="photo" />
  </div>
</template>
