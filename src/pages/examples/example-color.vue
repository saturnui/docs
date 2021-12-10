<template>
  <div class="vuwi-content sm:p-8 space-y-6">
    <div class="vuwi-window filter sm:drop-shadow-lg relative">
      <div class="absolute top-1 left-0 pl-26 font-bold vuwi-text flex w-full px-4">
        <div class="border-l dark:border-dark-600 px-6 py-2">Color</div>
        <div class="flex-grow"></div>
      </div>
      <VuwiLine />
      <div class="flex flex-wrap gap-4 p-4 bg-purple-500">
        <div class="p-4 vuwi-light-dark">
          <code>.vuwi-light-dark</code>
        </div>
        <div class="p-4 vuwi-light">
          <code>.vuwi-light</code>
        </div>
        <div class="p-4 vuwi-dark">
          <code>.vuwi-dark</code>
        </div>
      </div>
    </div>
  </div>
</template>
