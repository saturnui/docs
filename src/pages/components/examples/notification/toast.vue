<script setup lang="ts">
const showClose = ref(true)
const showToast = ref(false)
const enableAbsolute = ref(false)
const showRegion = ref(false)
</script>

<template>
  <!-- Action Bar -->
  <div class="flex items-center gap-4 p-2 px-4 wi-highlight-strongest text-sm font-bold">
    <VSwitch v-model="showToast" class="wi-text">
      <span class="pl-2">Show</span>
    </VSwitch>

    <VSwitch v-model="showClose" class="wi-text">
      <span class="pl-2">Closeable</span>
    </VSwitch>

    <VSwitch v-model="enableAbsolute" class="wi-text">
      <span class="pl-2">Float</span>
    </VSwitch>

    <div class="flex-grow"></div>

    <VSwitch v-model="showRegion" class="wi-text">
      <span class="pl-2">Show Region</span>
    </VSwitch>
  </div>

  <!-- Preview -->
  <div class="relative doc-preview h-60 flex flex-col text-white rounded-b wi-highlight overflow-hidden">
    <div :class="{ 'absolute top-0 w-full z-10': enableAbsolute }">
      <VCollapse v-model="showToast" class="pointer-events-none" slide="down">
        <div class="flex items-center justify-between bg-black pointer-events-auto">
          <div class="py-3 px-4">Hello, world!</div>
          <button v-if="showClose" class="wi-btn wi-btn-icon mr-2" @click="showToast = false">
            <tabler-x />
          </button>
        </div>
      </VCollapse>
    </div>

    <!-- Content -->
    <div
      class="relative flex-grow my-1"
      :class="{ 'bg-blue-400 bg-opacity-20 border-dash outline-blue-400': showRegion }"
    >
      <button
        class="absolute top-2 left-2 wi-btn wi-btn-icon wi-btn-xl filter drop-shadow-lg wi-btn-primary"
      >
        <tabler-message class="text-2xl" />
      </button>
      <button
        class="absolute bottom-2 right-2 wi-btn wi-btn-icon wi-btn-xl filter drop-shadow-lg wi-btn-primary"
      >
        <tabler-message class="text-2xl" />
      </button>
    </div>

    <div :class="{ 'absolute bottom-0 w-full z-10': enableAbsolute }">
      <VCollapse v-model="showToast" class="pointer-events-none" slide="up">
        <div class="flex items-center justify-between bg-black pointer-events-auto">
          <div class="py-3 px-4">Hello, world!</div>
          <button v-if="showClose" class="wi-btn wi-btn-icon mr-2" @click="showToast = false">
            <tabler-x />
          </button>
        </div>
      </VCollapse>
    </div>
  </div>
</template>
