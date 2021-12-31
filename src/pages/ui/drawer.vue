<script setup lang="ts">
const showDrawer = ref(false)
const lipsum = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
</script>

<template>
  <div class="vuwi-content sm:p-8 space-y-6">
    <div class="vuwi-window filter sm:drop-shadow-lg relative">
      <div class="absolute top-1 left-0 pl-26 font-bold vuwi-text flex w-full px-4">
        <div class="border-l dark:border-dark-600 px-6 py-2">Drawer</div>
        <div class="flex-grow"></div>
      </div>
      <VuwiLine />
      <div class="vuwi-highlight font-bold text-sm px-4 py-2 my-2">Default</div>
      <div class="relative flex h-64 overflow-hidden">
        <VuwiDrawer v-model="showDrawer" class="vuwi-highlight">
          <div class="m-2 space-y-2">
            <div
              v-for="i in 3"
              :key="i"
              class="p-4 flex items-center w-full border vuwi-border vuwi-card rounded-lg gap-3"
            >
              <tabler-box />Menu Item
            </div>
          </div>
        </VuwiDrawer>
        <div class="p-4">{{ lipsum }}</div>
      </div>

      <div class="vuwi-highlight font-bold text-sm px-4 py-2 my-2">Responsive</div>
      <div class="relative flex h-64 overflow-hidden my-2">
        <VuwiDrawer
          v-model="showDrawer"
          class="vuwi-drawer-responsive static vuwi-highlight"
        >
          <div class="hidden xl:block m-2 space-y-2">
            <div
              v-for="i in 3"
              :key="i"
              class="p-4 flex items-center w-full border vuwi-border vuwi-card rounded-lg gap-3"
            >
              <tabler-box />Menu Item
            </div>
          </div>
          <div class="flex flex-col items-center py-2 xl:hidden gap-2">
            <button
              v-for="i in 3"
              :key="i"
              class="p-4 flex justify-center items-center border vuwi-border vuwi-card rounded-lg"
            >
              <tabler-box />
            </button>
          </div>
        </VuwiDrawer>
        <div class="p-4">{{ lipsum }}</div>
      </div>

      <div class="vuwi-highlight font-bold text-sm px-4 py-2 my-2">Mini</div>
      <div class="relative flex h-64 overflow-hidden">
        <VuwiDrawer
          v-model="showDrawer"
          class="vuwi-drawer-mini static vuwi-highlight"
        >
          <div class="flex flex-col items-center py-2 gap-2">
            <button
              v-for="i in 3"
              :key="i"
              class="p-4 flex justify-center items-center border vuwi-border vuwi-card rounded-lg"
            >
              <tabler-box />
            </button>
          </div>
        </VuwiDrawer>
        <div class="p-4">{{ lipsum }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<route lang="yaml">
meta:
  layout: default
</route>
