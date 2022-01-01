<script setup lang="ts">
const photo
  = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
</script>

<template>
  <div class="flex items-center gap-4">
    <VuwiAvatar
      name="Alex Lifeson"
      :photo="photo"
      class="vuwi-avatar-sm rounded-full overflow-hidden"
    />
    <VuwiAvatar name="Rob Taylor" :photo="photo" />
    <VuwiAvatar
      name="Bryan Adams"
      :photo="photo"
      class="vuwi-avatar-lg rounded-full overflow-hidden"
    />
    <VuwiAvatar name="Alex Lifeson" :photo="photo" class="vuwi-avatar-xl" />
  </div>
</template>
