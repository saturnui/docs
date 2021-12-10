<template>
  <div class="p-8 space-y-6">
    <div class="vuwi-window filter drop-shadow-lg relative">
      <div class="absolute top-1 left-0 pl-26 font-bold vuwi-text flex w-full px-4">
        <div class="border-l dark:border-dark-600 px-6 py-2">Card</div>
        <div class="flex-grow"></div>
      </div>
      <Line />
      <div class="vuwi-content p-3 space-y-4">
        <div class="vuwi-card p-4">
          <span>Card</span>
        </div>
        <div class="vuwi-card shadow p-4">
          <span>Card with shadow</span>
        </div>
      </div>
    </div>
    <!-- Code Snippet -->
    <div class="vuwi-window filter drop-shadow-lg relative">
      <span
        class="absolute top-1 left-26 px-6 py-2 font-bold border-l dark:border-dark-600 vuwi-text"
      >Code Snippet</span>
      <Line />
      <div class="p-4 vuwi-dark text-sm text-teal-400">
        <code>
          &lt;div class="vuwi-card p-4">Hello, world!&lt;/div>
        </code>
      </div>
    </div>
  </div>
</template>
