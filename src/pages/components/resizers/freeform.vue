<template>
  <div class="w-full h-50 sa-highlight">
    <VResizer class="h-full min-h-30 max-h-full min-w-50 max-w-full" resize="both">
      <div class="relative h-full doc-preview">
        <div class="absolute sa-tl h-10 w-10 bg-teal-500 sa-center sa-dark font-bold">TL</div>
        <div class="absolute sa-tr h-10 w-10 bg-teal-500 sa-center sa-dark font-bold">TR</div>
        <div class="absolute sa-tl h-10 w-10 bg-teal-500 sa-center sa-dark font-bold">TL</div>
        <div class="absolute sa-bl h-10 w-10 bg-teal-500 sa-center sa-dark font-bold">BL</div>
        <div class="absolute sa-br h-10 w-10 bg-teal-500 sa-center sa-dark font-bold">BR</div>
      </div>
    </VResizer>
  </div>
</template>
