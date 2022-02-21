<template>
  <div class="flex flex-col gap-4 pb-6">
    <img src="/demo/spaceship_white.png" class="h-40 w-full object-cover rounded-t-xl border-b-2 overflow-hidden" />
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
        <VLine tabindex="0" component="blueprint-line">
          <div class="py-2 px-3 font-bold text-sm">Cygnus X-1</div>
        </VLine>
      </VTooltip>
      <div class="flex items-center gap-4 text-xs">
        <div>Fuel</div>
        <VTooltip show="focus" placement="top" component="w-full demo-tooltip">
          <template #tooltip>
            <div class="w-70 space-y-3">
              <DemoTooltip
                title="Progress Bar Component"
                link="/components/line"
              >Use the progress bar to measure progress in a horizontal view.</DemoTooltip>
            </div>
          </template>
          <VProgressBar
            :percent="35"
            tabindex="0"
            class="flex-grow border-2 rounded-full overflow-hidden"
          >
            <div class="bg-white h-2 rounded-full"></div>
          </VProgressBar>
        </VTooltip>
      </div>

      <div class="flex items-center gap-4 text-xs">
        <div>Discoveries</div>
        <VTooltip show="focus" placement="top" component="w-full demo-tooltip">
          <template #tooltip>
            <div class="w-70 space-y-3">
              <DemoTooltip
                title="Progress Bar Component"
                link="/components/line"
              >Use the progress bar to measure progress in a horizontal view.</DemoTooltip>
            </div>
          </template>
          <VProgressBar :percent="15" tabindex="0" class="flex-grow border-2 rounded-full overflow-hidden">
            <div class="bg-white h-2 rounded-full"></div>
          </VProgressBar>
        </VTooltip>
      </div>

      <div class="flex items-center gap-4 text-xs">
        <div>Defense</div>
        <VTooltip show="focus" placement="top" component="w-full demo-tooltip">
          <template #tooltip>
            <div class="w-70 space-y-3">
              <DemoTooltip
                title="Progress Bar Component"
                link="/components/line"
              >Use the progress bar to measure progress in a horizontal view.</DemoTooltip>
            </div>
          </template>
          <VProgressBar :percent="85" tabindex="0" class="flex-grow border-2 rounded-full overflow-hidden">
            <div class="bg-white h-2 rounded-full"></div>
          </VProgressBar>
        </VTooltip>
      </div>

      <div class="flex items-center gap-4 text-xs">
        <div>Time</div>
        <VTooltip show="focus" placement="top" component="w-full demo-tooltip">
          <template #tooltip>
            <div class="w-70 space-y-3">
              <DemoTooltip
                title="Progress Bar Component"
                link="/components/line"
              >Use the progress bar to measure progress in a horizontal view.</DemoTooltip>
            </div>
          </template>
          <VProgressBar :percent="65" tabindex="0" class="flex-grow border-2 rounded-full overflow-hidden">
            <div class="bg-white h-2 rounded-full"></div>
          </VProgressBar>
        </VTooltip>
      </div>
    </div>
  </div>
</template>
