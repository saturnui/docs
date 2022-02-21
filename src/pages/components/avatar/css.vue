<script setup lang="ts">
const image
  = '/demo/profile.png'
</script>

<template>
  <div class="flex items-center gap-4">
    <div class="sa-avatar" size="sm">
      <div class="rounded-full bg-purple-600 text-white overflow-hidden">A</div>
    </div>
    <div class="sa-avatar sa-md">
      <img :src="image" class="rounded bg-purple-600 text-white overflow-hidden" />
    </div>
    <div class="sa-avatar text-white" size="lg">
      <div class="bg-purple-600 rounded-full overflow-hidden">A</div>
    </div>
    <div class="sa-avatar" size="xl">
      <img :src="image" class="rounded-lg overflow-hidden" />
    </div>
  </div>

  <div class="flex items-center gap-4">
    <div class="sa-avatar sa-sm" status="info">
      <div class="rounded bg-purple-600 text-white overflow-hidden">A</div>
    </div>
    <div class="sa-avatar sa-md" status="warning">
      <img :src="image" class="rounded-full bg-purple-600 text-white overflow-hidden" />
    </div>
    <div class="sa-avatar text-white" size="lg" status="danger">
      <div class="bg-purple-600 rounded-md overflow-hidden">A</div>
    </div>
    <div class="sa-avatar" size="xl" status>
      <img :src="image" class="rounded-full overflow-hidden" />
    </div>
  </div>
</template>
