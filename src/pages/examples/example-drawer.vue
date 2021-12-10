<script setup lang="ts">
const showDrawer = ref(false)
</script>

<template>
  <div class="vuwi-content sm:p-8 space-y-6">
    <div class="vuwi-window filter sm:drop-shadow-lg relative">
      <div class="absolute top-1 left-0 pl-26 font-bold vuwi-text flex w-full px-4">
        <div class="border-l dark:border-dark-600 px-6 py-2">Drawer</div>
        <div class="flex-grow"></div>
      </div>
      <VuwiLine />
      <div class="vuwi-highlight font-bold text-sm px-4 py-2 mb-2">Default</div>
      <div class="relative h-64 overflow-hidden">
        <VuwiDrawer v-model="showDrawer" class="vuwi-highlight">
          <div class="m-2 space-y-2">
            <div
              v-for="i in 3"
              :key="i"
              class="p-4 flex items-center w-full vuwi-border vuwi-light-dark rounded-lg gap-3"
            >
              <tabler-box />Menu Item
            </div>
          </div>
        </VuwiDrawer>
      </div>

      <div class="relative h-64 overflow-hidden my-2">
        <div class="vuwi-highlight font-bold text-sm px-4 py-2 mb-2">Responsive</div>
        <VuwiDrawer v-model="showDrawer" class="responsive static vuwi-highlight">
          <div class="hidden xl:block m-2 space-y-2">
            <div
              v-for="i in 3"
              :key="i"
              class="p-4 flex items-center w-full vuwi-border vuwi-light-dark rounded-lg gap-3"
            >
              <tabler-box />Menu Item
            </div>
          </div>
          <div class="flex flex-col items-center py-2 xl:hidden gap-2">
            <button
              v-for="i in 3"
              :key="i"
              class="p-4 flex justify-center items-center vuwi-border vuwi-light-dark rounded-lg"
            >
              <tabler-box />
            </button>
          </div>
        </VuwiDrawer>
      </div>

      <div class="vuwi-highlight font-bold text-sm px-4 py-2 my-2">Mini</div>
      <div class="relative h-64 overflow-hidden">
        <VuwiDrawer v-model="showDrawer" class="mini static vuwi-highlight">
          <div class="flex flex-col items-center py-2 gap-2">
            <button
              v-for="i in 3"
              :key="i"
              class="p-4 flex justify-center items-center vuwi-border vuwi-light-dark rounded-lg"
            >
              <tabler-box />
            </button>
          </div>
        </VuwiDrawer>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
