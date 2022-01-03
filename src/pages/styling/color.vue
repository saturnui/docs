<template>
  <div class="wi-content sm:p-8 space-y-6">
    <div class="wi-mock-window filter sm:drop-shadow-lg relative">
      <div class="absolute top-1 left-0 pl-26 font-bold wi-text flex w-full px-4">
        <div class="border-l dark:border-dark-600 px-6 py-2">Color</div>
        <div class="flex-grow"></div>
      </div>
      <VLine />
      <div class="flex flex-wrap gap-4 p-4 bg-purple-500">
        <div class="p-4 wi-light-dark">
          <code>.wi-light-dark</code>
        </div>
        <div class="p-4 wi-light">
          <code>.wi-light</code>
        </div>
        <div class="p-4 wi-dark">
          <code>.wi-dark</code>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
