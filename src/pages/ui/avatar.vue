<script setup lang="ts">
const photo
  = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
</script>

<template>
  <div class="vuwi-content sm:p-8 space-y-6">
    <div class="vuwi-window filter sm:drop-shadow-lg relative">
      <span
        class="absolute top-1 left-26 px-6 py-2 font-bold border-l dark:border-dark-600 vuwi-text"
      >Avatar</span>
      <VuwiLine />
      <div class="flex flex-wrap gap-4 p-8">
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
        <VuwiAvatar name="Geddy Lee" class="vuwi-avatar-sm bg-primary text-white" />
        <VuwiAvatar name="Steve Vai" class="rounded-full bg-primary text-white" />
        <VuwiAvatar name="Neil Peart" class="vuwi-avatar-lg bg-primary text-white" />
        <VuwiAvatar name="Eddie Van Halen" class="vuwi-avatar-xl rounded-full bg-primary text-white" />
      </div>
    </div>
    <!-- Code Snippet -->
    <div class="vuwi-window filter drop-shadow-lg relative">
      <span
        class="absolute top-1 left-26 px-6 py-2 font-bold border-l dark:border-dark-600 vuwi-text"
      >Code Snippet</span>
      <VuwiLine />
      <div class="p-4 vuwi-dark text-sm text-teal-400">
        <code>
          &lt;VuwiAvatar name="Alex Lifeson" photo="/placeholder.jpg" class="vuwi-avatar-xl" />
        </code>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: vuwi
</route>
