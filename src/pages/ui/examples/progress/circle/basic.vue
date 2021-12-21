<script setup lang="ts">
defineProps({
  percent: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div class="flex flex-wrap gap-8 items-center justify-center">
    <VuwiProgressCircle :percent="percent" color="border-green-500" :width="10" />

    <VuwiProgressCircle
      :percent="percent"
      color="border-yellow-500 bg-yellow-400"
      class="bg-yellow-400 bg-opacity-25"
      :width="1"
    />

    <VuwiProgressCircle
      :percent="percent"
      class="vuwi-highlight"
      color="border-red-500"
      :width="12"
    >
      <div class="vuwi-text text-3xl">{{ percent }}</div>
    </VuwiProgressCircle>

    <VuwiProgressCircle
      :percent="percent"
      class="bg-gray-700"
      color="border-teal-500 bg-teal-500"
      :width="6"
    >
      <div
        class="flex items-center justify-center rounded-full w-10 h-10 font-bold bg-gray-800 text-white"
      >
        <tabler-box class="text-2xl" />
      </div>
    </VuwiProgressCircle>

    <VuwiProgressCircle
      :percent="percent"
      class="bg-blue-400"
      color="border-blue-400 bg-gray-700 dark:bg-gray-700"
      :width="5"
    />
  </div>
</template>
