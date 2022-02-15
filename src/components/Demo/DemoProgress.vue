<template>
  <div class="flex flex-col gap-4 pb-6">
    <img src="/demo/spaceship.jpg" class="h-40 w-full object-cover rounded-t-xl overflow-hidden" />
    <div class="grid gap-4 px-6">
      <VTooltip show="focus" component="demo-tooltip">
        <template #tooltip>
          <div class="w-70 space-y-3">
            <DemoTooltip
              title="Line Component"
              link="/components/line"
            >Use the line component to separate sections with an optional slot for labels, icons, etc.</DemoTooltip>
          </div>
        </template>
        <VLine tabindex="0">
          <div class="px-3 font-bold text-sm">Status</div>
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
            class="flex-grow bg-dark-700 rounded-full overflow-hidden"
          >
            <div class="bg-green-500 h-2 rounded-full"></div>
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
          <VProgressBar :percent="15" tabindex="0" class="flex-grow bg-dark-700 rounded-full overflow-hidden">
            <div class="bg-light-blue-500 h-2 rounded-full"></div>
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
          <VProgressBar :percent="85" tabindex="0" class="flex-grow bg-dark-700 rounded-full overflow-hidden">
            <div class="bg-yellow-500 h-2 rounded-full"></div>
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
          <VProgressBar :percent="65" tabindex="0" class="flex-grow bg-dark-700 rounded-full overflow-hidden">
            <div class="bg-pink-500 h-2 rounded-full"></div>
          </VProgressBar>
        </VTooltip>
      </div>
    </div>
  </div>
</template>
