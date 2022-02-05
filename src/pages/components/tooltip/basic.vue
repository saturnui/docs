<template>
  <div class="space-x-4">
    <!-- Right -->
    <VTooltip placement="right">
      <template #tooltip>This is a tooltip</template>
      <VButton class="sa-primary">Right</VButton>
    </VTooltip>

    <!-- Bottom -->
    <VTooltip placement="bottom">
      <template #tooltip>This is a tooltip</template>
      <VButton class="sa-primary">Bottom</VButton>
    </VTooltip>

    <!-- Top -->
    <VTooltip placement="top">
      <template #tooltip>This is a tooltip</template>
      <VButton class="sa-primary">Top</VButton>
    </VTooltip>

    <!-- Left -->
    <VTooltip placement="left">
      <template #tooltip>This is a tooltip</template>
      <VButton class="sa-primary">Left</VButton>
    </VTooltip>
  </div>
</template>
