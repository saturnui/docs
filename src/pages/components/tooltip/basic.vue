<template>
  <div class="space-x-4">
    <!-- Right -->
    <VTooltip placement="right">
      <template #tooltip>This is a tooltip</template>
      <button class="wi-btn wi-btn-primary">Right</button>
    </VTooltip>

    <!-- Bottom -->
    <VTooltip placement="bottom">
      <template #tooltip>This is a tooltip</template>
      <button class="wi-btn wi-btn-primary">Bottom</button>
    </VTooltip>

    <!-- Top -->
    <VTooltip placement="top">
      <template #tooltip>This is a tooltip</template>
      <button class="wi-btn wi-btn-primary">Top</button>
    </VTooltip>

    <!-- Left -->
    <VTooltip placement="left">
      <template #tooltip>This is a tooltip</template>
      <button class="wi-btn wi-btn-primary">Left</button>
    </VTooltip>
  </div>
</template>
