<template>
  <div class="space-x-4">
    <!-- Right -->
    <VuwiTooltip placement="right" :show="true">
      <template #tooltip>This is a tooltip</template>
      <button class="vuwi-btn vuwi-btn-primary">Always show tooltip</button>
    </VuwiTooltip>
  </div>
</template>
