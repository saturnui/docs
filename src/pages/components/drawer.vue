<script setup lang="ts">
const showDrawer = ref(false)
const lipsum = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
</script>

<template>
  <div class="wi-content sm:p-8 space-y-6">
    <div class="wi-mock-window filter sm:drop-shadow-lg relative">
      <div class="absolute top-1 left-0 pl-26 font-bold wi-text flex w-full px-4">
        <div class="border-l dark:border-dark-600 px-6 py-2">Drawer</div>
        <div class="flex-grow"></div>
      </div>
      <VLine />
      <div class="wi-highlight font-bold text-sm px-4 py-2 my-2">Default</div>
      <div class="relative flex h-64 overflow-hidden">
        <VDrawer v-model="showDrawer" class="wi-highlight">
          <div class="m-2 space-y-2">
            <div
              v-for="i in 3"
              :key="i"
              class="p-4 flex items-center w-full border wi-border wi-light-dark rounded-lg gap-3"
            >
              <tabler-box />Menu Item
            </div>
          </div>
        </VDrawer>
        <div class="p-4">{{ lipsum }}</div>
      </div>

      <div class="wi-highlight font-bold text-sm px-4 py-2 my-2">Responsive</div>
      <div class="relative flex h-64 overflow-hidden my-2">
        <VDrawer
          v-model="showDrawer"
          class="wi-drawer-responsive static wi-highlight"
        >
          <div class="hidden xl:block m-2 space-y-2">
            <div
              v-for="i in 3"
              :key="i"
              class="p-4 flex items-center w-full border wi-border wi-light-dark rounded-lg gap-3"
            >
              <tabler-box />Menu Item
            </div>
          </div>
          <div class="flex flex-col items-center py-2 xl:hidden gap-2">
            <button
              v-for="i in 3"
              :key="i"
              class="p-4 flex justify-center items-center border wi-border wi-light-dark rounded-lg"
            >
              <tabler-box />
            </button>
          </div>
        </VDrawer>
        <div class="p-4">{{ lipsum }}</div>
      </div>

      <div class="wi-highlight font-bold text-sm px-4 py-2 my-2">Mini</div>
      <div class="relative flex h-64 overflow-hidden">
        <VDrawer
          v-model="showDrawer"
          class="wi-drawer-mini static wi-highlight"
        >
          <div class="flex flex-col items-center py-2 gap-2">
            <button
              v-for="i in 3"
              :key="i"
              class="p-4 flex justify-center items-center border wi-border wi-light-dark rounded-lg"
            >
              <tabler-box />
            </button>
          </div>
        </VDrawer>
        <div class="p-4">{{ lipsum }}</div>
      </div>
    </div>

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
