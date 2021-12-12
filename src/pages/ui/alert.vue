<script setup lang="ts">
const showAlert = ref(false)
const text = 'I\'m an alert that informs you of stuff'
const isDark = ref(false)
</script>

<template>
  <div class="vuwi-content p-2 sm:p-8 space-y-6">
    <div class="space-y-4">
      <div class="text-4xl">Alert</div>
      <div class="flex items-center gap-2">
        <assets-logo-tailwind />
        <span>Vuwi + Tailwind CSS</span>
      </div>
    </div>
    <div class="text-2xl">Basic</div>
    <div>
      <div class="vuwi-alert bg-purple-200 text-purple-500 text-sm font-medium" role="alert">
        <span class="p-3">{{ text }}</span>
      </div>
      <div class="vuwi-alert bg-purple-200 text-purple-500 text-sm font-medium" role="alert">
        <span class="p-3">{{ text }}.</span>
        <button class="vuwi-btn vuwi-btn-icon mr-2">
          <tabler-x class="text-xl" />
        </button>
      </div>
    </div>

    <div class="flex items-center text-2xl gap-2">
      <assets-logo-vue />Transition
      <div class="flex-grow"></div>
      <VuwiSwitch v-model="showAlert">
        <template #left>
          <span class="mr-3 text-sm">Show Alert</span>
        </template>
      </VuwiSwitch>
    </div>
    <p>Shows an alert using Vue transition</p>
    <transition name="vuwi-alert">
      <div v-if="showAlert" class="vuwi-alert bg-red-700 text-white" role="alert">
        <div class="p-3">{{ text }}</div>
        <button class="vuwi-btn vuwi-btn-icon mr-2" @click="showAlert = false">
          <tabler-x class="text-xl" />
        </button>
      </div>
    </transition>

    <div class="text-2xl">Examples</div>
    <ExampleCard>
      <div class="vuwi-alert" role="alert">
        <span class="p-3">{{ text }}</span>
      </div>

      <div class="vuwi-alert vuwi-highlight" role="alert">
        <span class="p-3">{{ text }}</span>
      </div>

      <div class="vuwi-alert bg-primary text-white" role="alert">
        <span class="p-3">{{ text }}</span>
      </div>

      <div class="vuwi-alert bg-yellow-100 text-yellow-800" role="alert">
        <span class="p-3">{{ text }}</span>
      </div>

      <div class="vuwi-alert bg-yellow-600 text-white" role="alert">
        <span class="p-3">{{ text }}</span>
        <button class="vuwi-btn vuwi-btn-icon mr-2">
          <tabler-x class="text-xl" />
        </button>
      </div>
    </ExampleCard>

    <div class="vuwi-window filter sm:drop-shadow-lg relative">
      <div class="absolute top-1 left-0 pl-26 font-bold vuwi-text flex w-full px-4">
        <div class="border-l dark:border-dark-600 px-6 py-2">Alert</div>
        <div class="flex-grow"></div>
      </div>
      <VuwiLine />
      <div class="p-3 space-y-4">
        <div class="vuwi-alert" role="alert">
          <span class="p-3">{{ text }}</span>
        </div>

        <div class="vuwi-alert vuwi-highlight" role="alert">
          <span class="p-3">{{ text }}</span>
        </div>

        <div class="vuwi-alert bg-primary text-white" role="alert">
          <span class="p-3">{{ text }}</span>
        </div>

        <div class="vuwi-alert bg-yellow-100 text-yellow-800" role="alert">
          <span class="p-3">{{ text }}</span>
        </div>

        <div class="vuwi-alert bg-yellow-600 text-white" role="alert">
          <span class="p-3">{{ text }}</span>
          <button class="vuwi-btn vuwi-btn-icon mr-2">
            <tabler-x class="text-xl" />
          </button>
        </div>
      </div>
    </div>
    <!-- Code Snippet -->
    <div class="vuwi-card filter drop-shadow-lg relative">
      <div class="relative">
        <div class="p-4 font-bold vuwi-text">Code Snippet</div>
      </div>
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

<route lang="yaml">
meta:
  layout: vuwi
</route>
