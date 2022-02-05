<script setup lang="ts">
const showToast = ref(false)
const showRegion = ref(false)
const enableAbsolute = ref(false)
</script>

<template>
  <!-- Action Bar -->
  <div class="flex items-center gap-4 p-2 px-4 sa-highlight-strongest text-sm font-bold">
    <VSwitch v-model="showToast" class="sa-text">
      <span class="pl-2">Show</span>
    </VSwitch>

    <VSwitch v-model="enableAbsolute" class="sa-text">
      <span class="pl-2">Float</span>
    </VSwitch>

    <div class="flex-grow"></div>

    <VSwitch v-model="showRegion" class="sa-text">
      <span class="pl-2">Show Region</span>
    </VSwitch>
  </div>

  <!-- Preview -->
  <div
    class="relative doc-preview h-100 flex flex-col text-white rounded-b sa-highlight overflow-hidden"
  >
    <div :class="{ 'absolute top-0 w-full z-10': enableAbsolute }">
      <VCollapse v-model="showToast" class="pointer-events-none" slide="down">
        <div class="flex justify-start p-2 pointer-events-auto">
          <div class="p-3 sa-dark text-gray-200 w-85 rounded-lg">
            <div class="flex items-center justify-between">
              <div class="flex justify-center items-center gap-4">
                <div class="w-10 h-10">
                  <tabler-message class="text-4xl" />
                </div>
                <div class="h-10 border-r border-gray-500"></div>
                <div
                  class="flex h-full text-left justify-center text-sm"
                >This is a toast message example. It supports multiple lines.</div>
              </div>
            </div>

            <div class="pt-4 px-2 flex items-center">
              <span class="text-xs">1 of 3</span>
              <div class="flex-grow"></div>
              <div class="flex gap-4">
                <VButton
                  size="sm"
                  class="rounded uppercase text-xs font-bold text-white"
                  @click="showToast = false"
                >
                  <span>Dismiss</span>
                </VButton>
                <VButton
                  size="sm"
                  class="rounded sa-primary text-xs uppercase font-bold text-white"
                  @click="showToast = false"
                >
                  <span>Ok</span>
                </VButton>
              </div>
            </div>
          </div>
        </div>
      </VCollapse>
    </div>

    <!-- Content -->
    <div
      class="relative flex-grow my-1"
      :class="{ 'bg-blue-400 bg-opacity-20 border-dash outline-blue-400': showRegion }"
    >
      <VButton icon size="xl" class="absolute top-2 left-2 filter drop-shadow-lg sa-primary">
        <tabler-message class="text-2xl" />
      </VButton>
      <VButton icon size="xl" class="absolute bottom-2 right-2 filter drop-shadow-lg sa-primary">
        <tabler-message class="text-2xl" />
      </VButton>
    </div>

    <div :class="{ 'absolute bottom-0 w-full z-10': enableAbsolute }">
      <VCollapse v-model="showToast" class="pointer-events-none" slide="up">
        <div class="flex justify-end p-2 pointer-events-auto">
          <div class="p-3 sa-dark text-gray-200 w-85 rounded-lg">
            <div class="flex items-center justify-between">
              <div class="flex justify-center items-center gap-4">
                <div class="w-10 h-10">
                  <tabler-message class="text-4xl" />
                </div>
                <div class="h-10 border-r border-gray-500"></div>
                <div
                  class="flex h-full text-left justify-center text-sm"
                >This is a toast message example. It supports multiple lines.</div>
              </div>
            </div>

            <div class="pt-4 px-2 flex items-center">
              <span class="text-xs">1 of 3</span>
              <div class="flex-grow"></div>
              <div class="flex gap-4">
                <VButton
                  size="sm"
                  class="rounded uppercase text-xs font-bold text-white"
                  @click="showToast = false"
                >
                  <span>Dismiss</span>
                </VButton>
                <VButton
                  size="sm"
                  class="rounded sa-primary text-xs uppercase font-bold text-white"
                  @click="showToast = false"
                >
                  <span>Ok</span>
                </VButton>
              </div>
            </div>
          </div>
        </div>
      </VCollapse>
    </div>
  </div>
</template>
