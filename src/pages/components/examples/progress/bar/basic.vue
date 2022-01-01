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

    <VuwiProgressBar :percent="percent" class="vuwi-bg">
      <div class="bg-green-500 h-3"></div>
    </VuwiProgressBar>

    <div>Height and width are controlled easily controlled using tailwind or custom css</div>

    <VuwiProgressBar :percent="percent" class="vuwi-bg">
      <div class="bg-green-500 h-10"></div>
    </VuwiProgressBar>

    <div>Customize the shape using tailwind</div>

    <VuwiProgressBar :percent="percent" class="vuwi-bg rounded-full overflow-hidden">
      <div class="bg-green-500 h-10"></div>
    </VuwiProgressBar>

    <div>Vuwi provides a striped style</div>

    <VuwiProgressBar :percent="percent" class="vuwi-bg rounded-full overflow-hidden">
      <div class="bg-green-500 vuwi-progress-stripe h-10"></div>
    </VuwiProgressBar>

    <div>The striped style can be animated</div>

    <VuwiProgressBar :percent="percent" class="vuwi-bg rounded-full overflow-hidden">
      <div class="bg-green-500 vuwi-progress-stripe vuwi-progress-stripe-animate h-10"></div>
    </VuwiProgressBar>

    <div>Controlling the speed can be adjusted with using the Vuwi classes</div>
    <VuwiProgressBar :percent="percent" class="vuwi-bg rounded-full overflow-hidden">
      <div class="bg-green-500 vuwi-progress-stripe vuwi-progress-stripe-animate-slow h-10"></div>
    </VuwiProgressBar>

    <div>Further enhance the progress bar with things like a label</div>
    <VuwiProgressBar :percent="percent" class="vuwi-bg rounded-full overflow-hidden">
      <div class="bg-green-500 vuwi-progress-stripe vuwi-progress-stripe-animate-slow h-10">
        <div class="absolute vuwi-mr right-1 min-w-12 text-center px-3 py-1 rounded-3xl font-bold bg-gray-800 text-white">
          <span>{{ percent }}</span>
        </div>
      </div>
    </VuwiProgressBar>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
