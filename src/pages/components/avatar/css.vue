<script setup lang="ts">
const photo
  = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
</script>

<template>
  <div class="flex items-center gap-4">
    <div class="sa-avatar" size="sm">
      <div class="rounded-full bg-purple-600 text-white overflow-hidden">A</div>
    </div>
    <div class="sa-avatar">
      <img :src="photo" class="rounded bg-purple-600 text-white overflow-hidden" />
    </div>
    <div class="sa-avatar text-white" size="lg">
      <div class="bg-purple-600 rounded-full overflow-hidden">A</div>
    </div>
    <div class="sa-avatar" size="xl">
      <img :src="photo" class="rounded-lg overflow-hidden" />
    </div>
  </div>

  <div class="flex items-center gap-4">
    <div class="sa-avatar" size="sm" status="info">
      <div class="rounded bg-purple-600 text-white overflow-hidden">A</div>
    </div>
    <div class="sa-avatar" status="warning">
      <img :src="photo" class="rounded-full bg-purple-600 text-white overflow-hidden" />
    </div>
    <div class="sa-avatar text-white" size="lg" status="danger">
      <div class="bg-purple-600 rounded-md overflow-hidden">A</div>
    </div>
    <div class="sa-avatar" size="xl" status>
      <img :src="photo" class="rounded-full overflow-hidden" />
    </div>
  </div>
</template>
