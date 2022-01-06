<script setup lang="ts">
import VSkeletonListItem from '~/modules/vuwi/components/Skeleton/VSkeletonListItem.vue'
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
  <div class="flex justify-center p-3 px-4 gap-4 border-b wi-border">
    <VTooltip>
      <template #tooltip>
        <span class="max-w-50 text-center">Cannot click outside content to close overlay</span>
      </template>
      <VSwitch v-model="modal" class="wi-switch-sm">
        <template #left>
          <span class="mr-2 text-sm font-medium">Modal</span>
        </template>
      </VSwitch>
    </VTooltip>
    <VTooltip>
      <template #tooltip>
        <span class="max-w-50 text-center">Prevents user interaction with underlying content</span>
      </template>
      <VSwitch v-model="blocking" class="wi-switch-sm">
        <template #left>
          <span class="mr-2 text-sm font-medium">Blocking</span>
        </template>
      </VSwitch>
    </VTooltip>
    <VTooltip>
      <template #tooltip>
        <span class="max-w-50 text-center">Optional slot to insert stuff into background layer</span>
      </template>
      <VSwitch v-model="showSlot" class="wi-switch-sm">
        <template #left>
          <span class="mr-2 text-sm font-medium">Slot</span>
        </template>
      </VSwitch>
    </VTooltip>
    <VTooltip>
      <template #tooltip>
        <span class="max-w-50 text-center">Enable parent scrolling when overlay is active</span>
      </template>
      <VSwitch v-model="enableScrolling" class="wi-switch-sm">
        <template #left>
          <span class="mr-2 text-sm font-medium">Scrolling</span>
        </template>
      </VSwitch>
    </VTooltip>
    <VTooltip>
      <template #tooltip>
        <span class="max-w-50 text-center">Custom will modify the background</span>
      </template>
      <VSwitch v-model="custom" class="wi-switch-sm">
        <template #left>
          <span class="mr-2 text-sm font-medium">Custom</span>
        </template>
      </VSwitch>
    </VTooltip>
  </div>
  <div class="flex justify-center items-center gap-4 p-2 px-4">
    <div class="wi-btn-group">
      <VTooltip>
        <template #tooltip>
          <span class="max-w-50 text-center">Center</span>
        </template>
        <VButton @click="open('center')">
          <tabler-layout-distribute-horizontal />
        </VButton>
      </VTooltip>
      <VTooltip>
        <template #tooltip>
          <span class="max-w-50 text-center">Top</span>
        </template>
        <VButton @click="open('top')">
          <tabler-layout-align-top />
        </VButton>
      </VTooltip>
      <VTooltip>
        <template #tooltip>
          <span class="max-w-50 text-center">Left</span>
        </template>
        <VButton @click="open('left')">
          <tabler-layout-align-left />
        </VButton>
      </VTooltip>
      <VTooltip>
        <template #tooltip>
          <span class="max-w-50 text-center">Right</span>
        </template>
        <VButton @click="open('right')">
          <tabler-layout-align-right />
        </VButton>
      </VTooltip>
      <VTooltip>
        <template #tooltip>
          <span class="max-w-50 text-center">Bottom</span>
        </template>
        <VButton @click="open('bottom')">
          <tabler-layout-align-bottom />
        </VButton>
      </VTooltip>
    </div>
  </div>

  <div class="relative h-80 w-full bg-dark-50 dark:bg-dark-600 border-t wi-border overflow-hidden wi-text">
    <div id="demo-content" class="absolute top-0 left-0 w-full h-80 overflow-y-auto p-4 grid gap-4">
      <VSkeletonListItem v-for="i in 5" :key="i" />
    </div>
    <VOverlay
      v-model="show"
      :name="customize"
      :position="position"
      :modal="modal"
      :blocking="blocking"
      :disable-scroll-target="enableScrolling ? '' : '#demo-content'"
      class="wi-overlay-absolute wi-overlay-shade"
    >
      <div
        class="wi-mock-window wi-border w-80 h-40 filter drop-shadow-lg"
        :class="`box-${position}`"
      >
        <VButton class="absolute bottom-2 right-2 wi-primary" @click="show = false">Close</VButton>
      </div>

      <template v-if="showSlot" #backdrop>
        <assets-logo-vuwi class="absolute wi-br m-3 h-16 w-24" />
      </template>
    </VOverlay>
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

[name="custom"] .wi-overlay {
  @apply bg-blue-500 bg-opacity-60;
}
</style>
