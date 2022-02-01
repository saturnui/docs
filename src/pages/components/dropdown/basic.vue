<script setup lang="ts">
const show = ref(false)
const options = [
  { label: 'Your Profile' },
  { label: 'Dark Mode' },
  { label: 'Sign out' },
]
</script>

<template>
  <VDropdown v-model="show">
    <template #activator="{ toggle }">
      <button class="wi-btn border wi-border" :class="{ 'wi-primary': show }" @click="toggle">Menu</button>
    </template>
    <div
      ref="menu"
      class="grid origin-top-right absolute right-0 rounded-md shadow-lg mt-2 wi-light-dark"
      role="menu"
    >
      <div
        v-for="option in options"
        :key="option.label"
        class="whitespace-nowrap px-4 py-2 text-sm hover:bg-black hover:bg-opacity-10 cursor-pointer"
        @click="show = false"
      >
        <span>Your Profile</span>
      </div>
    </div>
  </VDropdown>
</template>
