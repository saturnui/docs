<script setup lang="ts">
const photo
  = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
</script>

<template>
  <div class="wi-avatar wi-avatar-sm bg-purple-600 text-white">
    <div>A</div>
  </div>
  <div class="wi-avatar rounded-full bg-purple-600 text-white">
    <img :src="photo" />
  </div>
  <div class="wi-avatar wi-avatar-lg overflow-hidden rounded-full bg-purple-600 text-white">
    <div>A</div>
  </div>
  <div class="wi-avatar wi-avatar-xl overflow-hidden rounded-full bg-purple-600 text-white">
    <img :src="photo" />
  </div>
</template>
