<template>
  <div class="sa-alert" role="alert">
    <span class="p-3">I'm an alert that informs you of stuff.</span>
  </div>

  <div class="sa-alert bg-dark-100 dark:bg-dark-800" role="alert">
    <span class="p-3">I'm an alert that informs you of stuff.</span>
  </div>

  <div class="sa-alert bg-primary text-white" role="alert">
    <span class="p-3">I'm an alert that informs you of stuff.</span>
  </div>

  <div class="sa-alert bg-yellow-100 text-yellow-800" role="alert">
    <span class="p-3">I'm an alert that informs you of stuff.</span>
  </div>

  <div class="sa-alert bg-yellow-600 text-white" role="alert">
    <span class="p-3 flex-grow">I'm an alert that informs you of stuff.</span>
    <button class="sa-btn sa-btn-icon mr-2">
      <tabler-x class="text-xl" />
    </button>
  </div>

  <div class="sa-alert sa-success text-sm font-medium p-2" role="alert">
    <tabler-circle-check class="w-6 h-6" />
    <div class="flex-grow">I'm an alert that informs you of stuff.</div>
    <button class="sa-btn sa-btn-icon">
      <tabler-x class="text-xl" />
    </button>
  </div>
</template>
