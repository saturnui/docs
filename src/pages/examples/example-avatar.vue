<script setup lang="ts">
const photo
  = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
</script>

<template>
  <div class="p-8">
    <div class="vuwi-window">
      <Line />
      <div class="vuwi-content p-3 space-y-1">
        <div class="font-bold text-lg bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded">Avatars</div>
        <div class="flex gap-4 p-4 overflow-x-auto">
          <Avatar
            name="Alex Lifeson"
            :photo="photo"
            class="vuwi-avatar-sm rounded-full overflow-hidden"
          />
          <Avatar name="Rob Taylor" :photo="photo" />
          <Avatar
            name="Bryan Adams"
            :photo="photo"
            class="vuwi-avatar-lg rounded-full overflow-hidden"
          />
          <Avatar name="Rob Taylor" :photo="photo" class="vuwi-avatar-xl" />
          <Avatar name="Geddy Lee" class="vuwi-avatar-sm bg-primary text-white" />
          <Avatar name="Steve Vai" class="rounded-full bg-primary text-white" />
          <Avatar name="Neil Peart" class="vuwi-avatar-lg bg-primary text-white" />
          <Avatar name="Eddie Van Halen" class="vuwi-avatar-xl rounded-full bg-primary text-white" />
        </div>
      </div>
    </div>
  </div>
</template>
