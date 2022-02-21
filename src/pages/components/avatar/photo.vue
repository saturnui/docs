<script setup lang="ts">
const image
  = '/demo/profile.png'
</script>

<template>
  <VAvatar name="Bean" :image="image" class="rounded-full overflow-hidden" size="sm" />
  <VAvatar name="Bean" :image="image" size="md" />
  <VAvatar name="Bean" :image="image" class="rounded-full overflow-hidden" size="lg" />
  <VAvatar name="Bean" :image="image" size="xl" />
</template>
