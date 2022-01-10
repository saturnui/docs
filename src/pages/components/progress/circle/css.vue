<template>
  <div class="relative rounded-full overflow-hidden w-20 h-20">
    <div class="wi-progress-circle eclipse border border-green-500 border-10 transform rotate-250"></div>
    <div class="wi-progress-circle eclipse border border-green-500 border-10 transform rotate-180"></div>
  </div>

  <div
    class="relative rounded-full overflow-hidden bg-yellow-400 bg-opacity-25 w-20 h-20"
  >
    <div class="wi-progress-circle">
      <div
        class="wi-progress-circle eclipse border border-yellow-500 bg-yellow-400 transform rotate-250"
      ></div>
      <div
        class="wi-progress-circle eclipse border border-yellow-500 bg-yellow-400 transform rotate-180"
      ></div>
    </div>
  </div>

  <div class="relative rounded-full overflow-hidden w-20 h-20 wi-highlight-strong">
    <div class="wi-progress-circle eclipse border border-red-500 border-10 transform rotate-250"></div>
    <div class="wi-progress-circle eclipse border border-red-500 border-10 transform rotate-180"></div>
    <div class="absolute wi-mc text-3xl">68</div>
  </div>

  <div class="relative rounded-full overflow-hidden w-20 h-20 wi-highlight-strong">
    <div class="wi-progress-circle eclipse border border-teal-500 border-15 transform rotate-250"></div>
    <div class="wi-progress-circle eclipse border border-teal-500 border-15 transform rotate-180"></div>
    <div class="absolute wi-mc text-2xl bg-dark-800 w-12 h-12 wi-center rounded-full">
      <tabler-box />
    </div>
  </div>

  <div
    class="relative rounded-full overflow-hidden bg-blue-400 w-20 h-20"
  >
    <div class="wi-progress-circle">
      <div
        class="wi-progress-circle eclipse border border-4 border-blue-400 bg-dark-700 transform rotate-250"
      ></div>
      <div
        class="wi-progress-circle eclipse border border-4 border-blue-400 bg-dark-700 transform rotate-180"
      ></div>
    </div>
  </div>
</template>

<style>
.eclipse {
  clip: rect(0px, 2.5em, 5em, 0px);
}
</style>
