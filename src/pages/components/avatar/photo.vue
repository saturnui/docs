<script setup lang="ts">
const image
  = 'https://images.unsplash.com/image-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
</script>

<template>
  <VAvatar name="Alex Lifeson" :image="image" class="rounded-full overflow-hidden" size="sm" />
  <VAvatar name="Rob Taylor" :image="image" />
  <VAvatar name="Bryan Adams" :image="image" class="rounded-full overflow-hidden" size="lg" />
  <VAvatar name="Alex Lifeson" :image="image" size="xl" />
</template>
