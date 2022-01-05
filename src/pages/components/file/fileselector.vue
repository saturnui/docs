<script setup lang="ts">
const file = ref<File>()
const dataUrl = ref('')

const handleChange = async (val?: FileList) => {
  if (val) {
    file.value = val[0]
    dataUrl.value = await useImageToDataUrl(file.value, 200, 200)
  } else {
    file.value = undefined
    dataUrl.value = ''
  }
}
</script>

<template>
  <div class="grid gap-2">
    <div class="flex gap-4 bg-dark-50 dark:bg-dark-700 p-3 rounded-lg">
      <VFileSelector @change="handleChange">
        <button class="wi-btn wi-primary">Select File</button>
      </VFileSelector>
      <div v-if="file" class="flex items-center gap-2 font-medium">
        <div class="px-3 py-1 border wi-border rounded-lg">{{ file.name }}</div>
      </div>
    </div>
    <div class="bg-dark-50 dark:bg-dark-700 p-6 rounded-lg">
      <div
        class="relative flex items-center justify-center w-48 h-48 bg-dark-800 rounded-full border-6 border-dark-600 cursor-pointer"
      >
        <VFileSelector class="rounded-full overflow-hidden" @change="handleChange">
          <img v-if="dataUrl" :src="dataUrl" />
          <tabler-photo v-else class="text-7xl text-dark-700" />
        </VFileSelector>
        <div
          class="absolute bottom-1 right-1 flex w-12 h-12 items-center justify-center rounded-full bg-dark-700 border-4 border-dark-400"
        >
          <tabler-pencil class="text-xl text-dark-300" />
        </div>
      </div>
    </div>
  </div>
</template>
