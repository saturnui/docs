<script setup lang="ts">
const showMenu = ref(false)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <div class="relative inline-block h-20">
    <!-- <VuwiGroup v-model="selectedIndex">
      <template #="{ activeEl, setActive }">
        <button class="vuwi-btn" :class="{ 'active': activeEl }" @click="setActive($event)">Button 1</button>
        <button class="vuwi-btn" :class="{ 'active': activeEl }" @click="setActive($event)">Button 2</button>
        <button class="vuwi-btn" :class="{ 'active': activeEl }" @click="setActive($event)">Button 3</button>
      </template>
    </VuwiGroup>-->

    <button class="vuwi-btn vuwi-btn-primary" @click="toggleMenu">Open Menu</button>
    <transition name="slide-down">
      <div
        v-if="showMenu"
        ref="menu"
        class="grid origin-top-right absolute right-0 mt-2 rounded-md shadow-lg py-1 vuwi-card ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        tabindex="-1"
      >
        <div
          class="flex items-center gap-3 px-4 py-2 text-sm vuwi-hover"
          role="menuitem"
          tabindex="-1"
        >
          <tabler-user />
          <span>Your Profile</span>
        </div>
        <div
          class="flex items-center gap-3 px-4 py-2 text-sm vuwi-hover"
          role="menuitem"
          tabindex="-1"
        >
          <carbon-moon />
          <span class="whitespace-nowrap pr-2">Dark Mode</span>
        </div>
        <div
          class="flex items-center gap-3 px-4 py-2 text-sm vuwi-hover"
          role="menuitem"
          tabindex="-1"
        >
          <tabler-logout />
          <span>Sign out</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.active {
  @apply bg-red-500 text-white;
}
</style>
