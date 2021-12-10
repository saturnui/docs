<script setup lang="ts">
const showAlert = ref(false)
</script>

<template>
  <div class="p-8 space-y-6">
    <div class="vuwi-window filter drop-shadow-lg relative">
      <div class="absolute top-1 left-0 pl-26 font-bold vuwi-text flex w-full px-4">
        <div class="border-l dark:border-dark-600 px-6 py-2">Alert</div>
        <div class="flex-grow"></div>
        <Switch v-model="showAlert">
          <template #left>
            <span class="mr-3 text-sm">Show Alert</span>
          </template>
        </Switch>
      </div>
      <Line />
      <div class="vuwi-content p-3 space-y-4">
        <transition name="vuwi-alert">
          <div v-if="showAlert" class="vuwi-alert bg-red-700 text-white" role="alert">
            <div class="p-3">Insert alert message here...</div>
            <button class="vuwi-btn vuwi-btn-icon mr-2" @click="showAlert = false">
              <tabler-x class="text-xl" />
            </button>
          </div>
        </transition>

        <div class="vuwi-alert" role="alert">
          <span class="p-3">Default alert message...</span>
        </div>
      </div>
    </div>
    <!-- Code Snippet -->
    <div class="vuwi-window filter drop-shadow-lg relative">
      <span
        class="absolute top-1 left-26 px-6 py-2 font-bold border-l dark:border-dark-600 vuwi-text"
      >Code Snippet</span>
      <Line />
      <div class="p-4 vuwi-dark text-sm text-teal-400">
        <pre><code>&lt;transition name="vuwi-alert">
  &lt;div v-if="showAlert" class="vuwi-alert bg-red-700 text-white" role="alert">
    &lt;div class="p-3">Insert alert message here...&lt;/div>
    &lt;button class="vuwi-btn vuwi-btn-icon mr-2" @click="showAlert = false">
      &lt;tabler-x class="text-xl" />
    &lt;/button>
  &lt;/div>
&lt;/transition></code></pre>
      </div>
    </div>
  </div>
</template>
