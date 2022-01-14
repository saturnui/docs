<template>
  <VResizer class="h-50 min-w-50 max-w-full" resize="width">
    <iframe
      src="/components/resizers/iframe-content"
      frameborder="0"
      width="100%"
      height="100%"
      class="pointer-events-none select-none"
    ></iframe>
  </VResizer>
</template>

<route lang="yaml">
meta:
  layout: plain
</route>
