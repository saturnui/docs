<template>
  <div class="space-x-4">
    <!-- Right -->
    <VTooltip placement="right" :show="true">
      <template #tooltip>This is a tooltip</template>
      <VButton class="sa-primary">Always show tooltip</VButton>
    </VTooltip>
  </div>
</template>
