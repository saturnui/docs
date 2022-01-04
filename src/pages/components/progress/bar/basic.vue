<script setup lang="ts">
defineProps({
  percent: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div class="grid p-4 gap-4">
    <div>You have complete control over the color, size and behavior of the progress bar</div>

    <VProgressBar :percent="percent" class="wi-bg">
      <div class="bg-green-500 h-3"></div>
    </VProgressBar>

    <div>Height and width are controlled easily controlled using tailwind or custom css</div>

    <VProgressBar :percent="percent" class="wi-bg">
      <div class="bg-green-500 h-10"></div>
    </VProgressBar>

    <div>Customize the shape using tailwind</div>

    <VProgressBar :percent="percent" class="wi-bg rounded-full overflow-hidden">
      <div class="bg-green-500 h-10"></div>
    </VProgressBar>

    <div>Vuwi provides a striped style</div>

    <VProgressBar :percent="percent" class="wi-bg rounded-full overflow-hidden">
      <div class="bg-green-500 wi-progress-stripe h-10"></div>
    </VProgressBar>

    <div>The striped style can be animated</div>

    <VProgressBar :percent="percent" class="wi-bg rounded-full overflow-hidden">
      <div class="bg-green-500 wi-progress-stripe wi-progress-stripe-animate h-10"></div>
    </VProgressBar>

    <div>Controlling the speed can be adjusted with using the Vuwi classes</div>
    <VProgressBar :percent="percent" class="wi-bg rounded-full overflow-hidden">
      <div class="bg-green-500 wi-progress-stripe wi-progress-stripe-animate-slow h-10"></div>
    </VProgressBar>

    <div>Further enhance the progress bar with things like a label</div>
    <VProgressBar :percent="percent" class="wi-bg rounded-full overflow-hidden">
      <div class="bg-green-500 wi-progress-stripe wi-progress-stripe-animate-slow h-10">
        <div class="absolute wi-mr right-1 min-w-12 text-center px-3 py-1 rounded-3xl font-bold bg-gray-800 text-white">
          <span>{{ percent }}</span>
        </div>
      </div>
    </VProgressBar>
  </div>
</template>

<route lang="yaml">
meta:
  layout: plain
</route>
