<template>
  <div class="space-x-4">
    <!-- Right -->
    <VTooltip placement="right">
      <template #tooltip>This is a tooltip</template>
      <VButton class="wi-primary">Right</VButton>
    </VTooltip>

    <!-- Bottom -->
    <VTooltip placement="bottom">
      <template #tooltip>This is a tooltip</template>
      <VButton class="wi-primary">Bottom</VButton>
    </VTooltip>

    <!-- Top -->
    <VTooltip placement="top">
      <template #tooltip>This is a tooltip</template>
      <VButton class="wi-primary">Top</VButton>
    </VTooltip>

    <!-- Left -->
    <VTooltip placement="left">
      <template #tooltip>This is a tooltip</template>
      <VButton class="wi-primary">Left</VButton>
    </VTooltip>
  </div>
</template>
