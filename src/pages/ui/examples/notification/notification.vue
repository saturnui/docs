<script setup lang="ts">
const showToast = ref(false)
const showRegion = ref(false)
const enableAbsolute = ref(false)
</script>

<template>
  <!-- Action Bar -->
  <div class="flex items-center gap-4 p-2 px-4 vuwi-highlight-strongest text-sm font-bold">
    <VuwiSwitch v-model="showToast" class="vuwi-text">
      <span class="pl-2">Show</span>
    </VuwiSwitch>

    <VuwiSwitch v-model="enableAbsolute" class="vuwi-text">
      <span class="pl-2">Float</span>
    </VuwiSwitch>

    <div class="flex-grow"></div>

    <VuwiSwitch v-model="showRegion" class="vuwi-text">
      <span class="pl-2">Show Region</span>
    </VuwiSwitch>
  </div>

  <!-- Preview -->
  <div
    class="relative demo h-100 flex flex-col text-white rounded-b vuwi-highlight overflow-hidden"
  >
    <div :class="{ 'absolute top-0 w-full z-10': enableAbsolute }">
      <VuwiCollapse v-model="showToast" class="pointer-events-none" slide="down">
        <div class="flex justify-start p-2 pointer-events-auto">
          <div class="p-3 vuwi-dark text-gray-200 w-85 rounded-lg">
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
                <button
                  class="vuwi-btn vuwi-btn-sm rounded uppercase text-xs font-bold text-white"
                  @click="showToast = false"
                >
                  <span>Dismiss</span>
                </button>
                <button
                  class="vuwi-btn vuwi-btn-sm rounded vuwi-btn-primary text-xs uppercase font-bold text-white"
                  @click="showToast = false"
                >
                  <span>Ok</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </VuwiCollapse>
    </div>

    <!-- Content -->
    <div
      class="relative flex-grow my-1"
      :class="{ 'bg-blue-400 bg-opacity-20 border-dash outline-blue-400': showRegion }"
    >
      <button
        class="absolute top-2 left-2 vuwi-btn vuwi-btn-icon vuwi-btn-xl filter drop-shadow-lg vuwi-btn-primary"
      >
        <tabler-message class="text-2xl" />
      </button>
      <button
        class="absolute bottom-2 right-2 vuwi-btn vuwi-btn-icon vuwi-btn-xl filter drop-shadow-lg vuwi-btn-primary"
      >
        <tabler-message class="text-2xl" />
      </button>
    </div>

    <div :class="{ 'absolute bottom-0 w-full z-10': enableAbsolute }">
      <VuwiCollapse v-model="showToast" class="pointer-events-none" slide="up">
        <div class="flex justify-end p-2 pointer-events-auto">
          <div class="p-3 vuwi-dark text-gray-200 w-85 rounded-lg">
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
                <button
                  class="vuwi-btn vuwi-btn-sm rounded uppercase text-xs font-bold text-white"
                  @click="showToast = false"
                >
                  <span>Dismiss</span>
                </button>
                <button
                  class="vuwi-btn vuwi-btn-sm rounded vuwi-btn-primary text-xs uppercase font-bold text-white"
                  @click="showToast = false"
                >
                  <span>Ok</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </VuwiCollapse>
    </div>
  </div>
</template>

<style>
.demo {
  background-color: #eee;
  background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.05) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.05) 75%,
      rgba(0, 0, 0, 0.05)
    ),
    linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.05) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.05) 75%,
      rgba(0, 0, 0, 0.05)
    );
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
}
</style>
