<template>
  <div class="space-x-4">
    <!-- Right -->
    <VTooltip placement="right" :show="true">
      <template #tooltip>This is a tooltip</template>
      <button class="wi-btn wi-primary">Always show tooltip</button>
    </VTooltip>
  </div>
</template>
