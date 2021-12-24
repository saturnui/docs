<script setup lang="ts">
const show = ref(false)
const position = ref('center')
const open = (pos: string) => {
  position.value = pos
  show.value = true
}
const modal = ref(false)
const blocking = ref(true)
const enableScrolling = ref(false)
const showSlot = ref(false)
const custom = ref(false)
const customize = computed(() => custom.value ? 'custom' : '')
</script>

<template>
  <div class="flex justify-center p-3 px-4 gap-4 border-b vuwi-border vuwi-highlight">
    <VuwiTooltip>
      <template #tooltip>
        <span class="max-w-50 text-center">Cannot click outside content to close overlay</span>
      </template>
      <VuwiSwitch v-model="modal" class="vuwi-switch-sm">
        <template #left>
          <span class="mr-2 text-sm font-medium">Modal</span>
        </template>
      </VuwiSwitch>
    </VuwiTooltip>
    <VuwiTooltip>
      <template #tooltip>
        <span class="max-w-50 text-center">Prevents user interaction with underlying content</span>
      </template>
      <VuwiSwitch v-model="blocking" class="vuwi-switch-sm">
        <template #left>
          <span class="mr-2 text-sm font-medium">Blocking</span>
        </template>
      </VuwiSwitch>
    </VuwiTooltip>
    <VuwiTooltip>
      <template #tooltip>
        <span class="max-w-50 text-center">Optional slot to insert stuff into background layer</span>
      </template>
      <VuwiSwitch v-model="showSlot" class="vuwi-switch-sm">
        <template #left>
          <span class="mr-2 text-sm font-medium">Slot</span>
        </template>
      </VuwiSwitch>
    </VuwiTooltip>
    <VuwiTooltip>
      <template #tooltip>
        <span class="max-w-50 text-center">Enable parent scrolling when overlay is active</span>
      </template>
      <VuwiSwitch v-model="enableScrolling" class="vuwi-switch-sm">
        <template #left>
          <span class="mr-2 text-sm font-medium">Scrolling</span>
        </template>
      </VuwiSwitch>
    </VuwiTooltip>
    <VuwiTooltip>
      <template #tooltip>
        <span class="max-w-50 text-center">Custom will modify the background</span>
      </template>
      <VuwiSwitch v-model="custom" class="vuwi-switch-sm">
        <template #left>
          <span class="mr-2 text-sm font-medium">Custom</span>
        </template>
      </VuwiSwitch>
    </VuwiTooltip>
  </div>
  <div class="flex justify-center items-center gap-4 p-2 px-4">
    <div class="vuwi-btn-group">
      <VuwiTooltip>
        <template #tooltip>
          <span class="max-w-50 text-center">Center</span>
        </template>
        <button class="vuwi-btn" @click="open('center')">
          <tabler-layout-distribute-horizontal />
        </button>
      </VuwiTooltip>
      <VuwiTooltip>
        <template #tooltip>
          <span class="max-w-50 text-center">Top</span>
        </template>
        <button class="vuwi-btn" @click="open('top')">
          <tabler-layout-align-top />
        </button>
      </VuwiTooltip>
      <VuwiTooltip>
        <template #tooltip>
          <span class="max-w-50 text-center">Left</span>
        </template>
        <button class="vuwi-btn" @click="open('left')">
          <tabler-layout-align-left />
        </button>
      </VuwiTooltip>
      <VuwiTooltip>
        <template #tooltip>
          <span class="max-w-50 text-center">Right</span>
        </template>
        <button class="vuwi-btn" @click="open('right')">
          <tabler-layout-align-right />
        </button>
      </VuwiTooltip>
      <VuwiTooltip>
        <template #tooltip>
          <span class="max-w-50 text-center">Bottom</span>
        </template>
        <button class="vuwi-btn" @click="open('bottom')">
          <tabler-layout-align-bottom />
        </button>
      </VuwiTooltip>
    </div>
  </div>

  <div class="relative h-80 w-full doc-preview vuwi-highlight border-t vuwi-border overflow-hidden">
    <div id="demo-content" class="absolute top-0 left-0 w-full h-80 overflow-y-auto">
      <div v-for="i in 5" :key="i" class="p-4">
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
        cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una
        galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
      </div>
    </div>
    <VuwiOverlay
      v-model="show"
      :name="customize"
      :position="position"
      :modal="modal"
      :blocking="blocking"
      :disable-scroll-target="enableScrolling ? '' : '#demo-content'"
      class="vuwi-overlay-absolute vuwi-overlay-shade"
    >
      <div
        class="vuwi-window vuwi-border w-80 h-40 filter drop-shadow-lg"
        :class="`box-${position}`"
      >
        <button
          class="absolute bottom-2 right-2 vuwi-btn vuwi-btn-primary"
          @click="show = false"
        >Close</button>
      </div>

      <template v-if="showSlot" #backdrop>
        <button
          class="absolute bottom-4 right-4 vuwi-btn vuwi-btn-icon border-5 border-white bg-purple-400 h-24 w-24 filter drop-shadow"
          @click="show = false"
        >
          <assets-logo-vuwi class="h-18 w-18 filter drop-shadow-md -ml-2" />
        </button>
      </template>
    </VuwiOverlay>
  </div>
</template>

<style>
.box-center {
  @apply border;
}

.box-left {
  @apply h-full rounded-none border-r;
}

.box-right {
  @apply h-full rounded-none border-l;
}

.box-top {
  @apply w-full rounded-none border-b;
}

.box-bottom {
  @apply w-full rounded-none border-t;
}

[name="custom"] .vuwi-overlay {
  @apply bg-blue-500 bg-opacity-60;
}
</style>
