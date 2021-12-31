<script setup lang="ts">
const showDialog = ref(false)
</script>

<template>
  <div class="vuwi-content sm:p-8 space-y-6">
    <div class="vuwi-window filter sm:drop-shadow-lg relative">
      <div class="absolute top-1 left-0 pl-26 font-bold vuwi-text flex w-full px-4">
        <div class="border-l dark:border-dark-600 px-6 py-2">Example</div>
        <div class="flex-grow"></div>
      </div>
      <VuwiLine />
      <div class="p-4 flex justify-center">
        <button class="vuwi-btn vuwi-btn-primary" @click="showDialog = true">Open Dialog</button>
      </div>
      <teleport to="body">
        <VuwiOverlay v-model="showDialog" name="dialog" :modal="true" class="fixed vuwi-overlay-fixed vuwi-overlay-shade z-10">
          <VuwiDialog class="w-full max-w-xl border vuwi-border" @close="showDialog = false">
            <template #title>
              <span class="pl-3 font-bold">Dialog example</span>
            </template>
            <div class="py-3 px-5">
              <span>This is an example of a modal dialog.</span>
            </div>
            <template #actions>
              <div class="vuwi-row justify-end p-2">
                <button
                  class="vuwi-btn vuwi-btn-primary px-6 py-2 text-lg"
                  @click="showDialog = false"
                >OK</button>
              </div>
            </template>
          </VuwiDialog>
        </VuwiOverlay>
      </teleport>
      <div class="vuwi-highlight font-bold text-sm px-4 py-2">Code Snippet</div>
      <div class="p-4 vuwi-dark text-sm text-teal-400">
        <pre><code>&lt;teleport to="body">
  &lt;VuwiOverlay v-model="showDialog" :modal="true" class="relative z-1">
    &lt;VuwiDialog class="w-full max-w-xl border vuwi-border" @close="showDialog = false">
      &lt;template #title>
        &lt;span class="pl-3 font-bold">Dialog example&lt;/span>
      &lt;/template>
      &lt;div class="py-3 px-5">
        &lt;span>This is an example of a modal dialog.&lt;/span>
      &lt;/div>
      &lt;template #actions>
        &lt;div class="vuwi-row justify-end p-2">
          &lt;button
            class="vuwi-btn vuwi-btn-primary px-6 py-2 text-lg"
            @click="showDialog = false"
          >OK&lt;/button>
        &lt;/div>
      &lt;/template>
    &lt;/VuwiDialog>
  &lt;/VuwiOverlay>
&lt;/teleport></code></pre>
      </div>
    </div>

    <div class="vuwi-window filter sm:drop-shadow-lg relative">
      <div class="absolute top-1 left-0 pl-26 font-bold vuwi-text flex w-full px-4">
        <div class="border-l dark:border-dark-600 px-6 py-2">Dialog</div>
        <div class="flex-grow"></div>
      </div>
      <VuwiLine />
      <div class="vuwi-highlight font-bold text-sm px-4 py-2">Component</div>
      <div class="p-8 flex justify-center">
        <VuwiDialog class="w-full max-w-xl border vuwi-border" @close="showDialog = false">
          <template #title>
            <span class="pl-3 font-bold">Dialog example</span>
          </template>
          <div class="py-3 px-5">
            <span>This is an example of a modal dialog.</span>
          </div>
          <template #actions>
            <div class="vuwi-row justify-end p-2">
              <button
                class="vuwi-btn vuwi-btn-primary px-6 py-2 text-lg"
                @click="showDialog = false"
              >OK</button>
            </div>
          </template>
        </VuwiDialog>
      </div>
      <div class="vuwi-highlight font-bold text-sm px-4 py-2">Code Snippet</div>
      <div class="p-4 vuwi-dark text-sm text-teal-400">
        <pre><code>&lt;VuwiDialog class="w-full max-w-xl border vuwi-border" @close="showDialog = false">
  &lt;template #title>
    &lt;span class="pl-3 font-bold">Dialog example&lt;/span>
  &lt;/template>
  &lt;div class="py-3 px-5">
    &lt;span>This is an example of a modal dialog.&lt;/span>
  &lt;/div>
  &lt;template #actions>
    &lt;div class="vuwi-row justify-end p-2">
      &lt;button
        class="vuwi-btn vuwi-btn-primary px-6 py-2 text-lg"
        @click="showDialog = false"
      >OK&lt;/button>
    &lt;/div>
  &lt;/template>
&lt;/VuwiDialog></code></pre>
      </div>
    </div>

    <div class="vuwi-window filter sm:drop-shadow-lg relative">
      <div class="absolute top-1 left-0 pl-26 font-bold vuwi-text flex w-full px-4">
        <div class="border-l dark:border-dark-600 px-6 py-2">Dialog (Alt.)</div>
        <div class="flex-grow"></div>
      </div>
      <VuwiLine />
      <div class="vuwi-highlight font-bold text-sm px-4 py-2">Custom</div>
      <div class="p-8 flex justify-center">
        <div class="vuwi-dialog border vuwi-border w-full max-w-xl">
          <div class="flex items-center justify-between p-2 pl-4">
            <span class="font-bold">Dialog example</span>
            <button class="vuwi-btn vuwi-btn-icon rounded-full h-8 w-8" @click="showDialog = false">
              <tabler-x class="vuwi-dialog-close-icon h-6 w-6" />
            </button>
          </div>
          <VuwiLine />
          <div class="p-4">This is an example of a modal dialog.</div>
          <div class="vuwi-row justify-end p-2">
            <button
              class="vuwi-btn vuwi-btn-primary px-6 py-2 text-lg"
              @click="showDialog = false"
            >OK</button>
          </div>
        </div>
      </div>
      <div class="vuwi-highlight font-bold text-sm px-4 py-2">Code Snippet</div>
      <div class="p-4 vuwi-dark text-sm text-teal-400">
        <pre><code>&lt;div class="vuwi-dialog border vuwi-border w-full max-w-xl">
  &lt;div class="flex items-center justify-between p-2 pl-4">
    &lt;span class="font-bold">Dialog example&lt;/span>
    &lt;button class="vuwi-btn vuwi-btn-icon rounded-full h-8 w-8" @click="showDialog = false">
      &lt;tabler-x class="vuwi-dialog-close-icon h-6 w-6" />
    &lt;/button>
  &lt;/div>
  &lt;VuwiLine />
  &lt;div class="p-4">This is an example of a modal dialog.&lt;/div>
  &lt;div class="vuwi-row justify-end p-2">
    &lt;button
      class="vuwi-btn vuwi-btn-primary px-6 py-2 text-lg"
      @click="showDialog = false"
    >OK&lt;/button>
  &lt;/div>
&lt;/div></code></pre>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
