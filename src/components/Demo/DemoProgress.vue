<script setup lang="ts">
const props = defineProps({
  theme: String,
})

const url = computed(() => {
  if (props.theme === 'mono')
    return '/demo/spaceship_white.png'

  return '/demo/spaceship.jpg'
})
</script>

<template>
  <div class="demo-progress flex flex-col gap-4 pb-6">
    <img :src="url" class="h-40 w-full object-cover rounded-t-xl overflow-hidden" />
    <div class="grid gap-4 px-6">
      <VTooltip show="focus" placement="top" component="demo-tooltip">
        <template #tooltip>
          <div class="w-70 space-y-3">
            <DemoTooltip
              title="Line Component"
              link="/components/line"
            >Use the line component to separate sections with an optional slot for labels, icons, etc.</DemoTooltip>
          </div>
        </template>
        <VLine tabindex="0" component="sa-line">
          <div class="py-2 px-3 font-bold text-sm">Cygnus X-1</div>
        </VLine>
      </VTooltip>
      <div class="flex items-center gap-4 text-xs">
        <div>Fuel</div>
        <VTooltip show="focus" placement="top" class="w-full">
          <template #tooltip>
            <div class="w-70 space-y-3">
              <DemoTooltip
                title="Progress Bar Component"
                link="/components/line"
              >Use the progress bar to measure progress in a horizontal view.</DemoTooltip>
            </div>
          </template>
          <VProgressBar :percent="35" tabindex="0" class="flex-grow overflow-hidden sa-highlight-strongest">
            <div class="bg-success h-2 rounded-full"></div>
          </VProgressBar>
        </VTooltip>
      </div>

      <div class="flex items-center gap-4 text-xs">
        <div>Discoveries</div>
        <VTooltip show="focus" placement="top" class="w-full">
          <template #tooltip>
            <div class="w-70 space-y-3">
              <DemoTooltip
                title="Progress Bar Component"
                link="/components/line"
              >Use the progress bar to measure progress in a horizontal view.</DemoTooltip>
            </div>
          </template>
          <VProgressBar
            :percent="15"
            tabindex="0"
            class="flex-grow overflow-hidden sa-highlight-strongest"
          >
            <div class="bg-info h-2 rounded-full"></div>
          </VProgressBar>
        </VTooltip>
      </div>

      <div class="flex items-center gap-4 text-xs">
        <div>Defense</div>
        <VTooltip show="focus" placement="top" class="w-full">
          <template #tooltip>
            <div class="w-70 space-y-3">
              <DemoTooltip
                title="Progress Bar Component"
                link="/components/line"
              >Use the progress bar to measure progress in a horizontal view.</DemoTooltip>
            </div>
          </template>
          <VProgressBar
            :percent="85"
            tabindex="0"
            class="flex-grow overflow-hidden sa-highlight-strongest"
          >
            <div class="bg-warning h-2 rounded-full"></div>
          </VProgressBar>
        </VTooltip>
      </div>

      <div class="flex items-center gap-4 text-xs">
        <div>Time</div>
        <VTooltip show="focus" placement="top" class="w-full">
          <template #tooltip>
            <div class="w-70 space-y-3">
              <DemoTooltip
                title="Progress Bar Component"
                link="/components/line"
              >Use the progress bar to measure progress in a horizontal view.</DemoTooltip>
            </div>
          </template>
          <VProgressBar
            :percent="65"
            tabindex="0"
            class="flex-grow overflow-hidden sa-highlight-strongest"
          >
            <div class="bg-error h-2 rounded-full"></div>
          </VProgressBar>
        </VTooltip>
      </div>
    </div>
  </div>
</template>

<style>
.mono .demo-progress img {
  @apply border-b-2 border-white;
}
</style>
