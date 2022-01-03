<template>
  <div class="max-w-2xl flex flex-wrap items-center gap-4">
    <VButton class="wi-btn-xs wi-btn-icon wi-btn-primary">
      <tabler-box class="text-[0.5rem]" />
    </VButton>
    <VButton class="wi-btn-sm wi-btn-icon wi-btn-primary">
      <tabler-box class="text-sm" />
    </VButton>
    <VButton class="wi-btn-icon wi-btn-primary">
      <tabler-box />
    </VButton>
    <VButton class="wi-btn-lg wi-btn-icon wi-btn-primary">
      <tabler-box class="text-2xl" />
    </VButton>

    <!-- Alternatives -->
    <VButton class="wi-btn-xl wi-btn-icon wi-btn-primary">
      <tabler-box class="text-3xl" />
    </VButton>

    <VButton class="wi-btn-xl wi-btn-icon">
      <tabler-box class="text-3xl" />
    </VButton>

    <VButton class="wi-btn-xl wi-btn-icon wi-btn-outline wi-btn-primary">
      <tabler-box class="text-3xl" />
    </VButton>

    <VButton class="wi-btn-xl wi-btn-icon wi-btn-outline">
      <tabler-box class="text-3xl" />
    </VButton>
  </div>
</template>

<route lang="yaml">
meta:
  layout: examples/default
</route>
