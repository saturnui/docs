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
  <VFileSelector @change="handleChange">
    <button class="wi-btn wi-primary">Select Image File</button>
  </VFileSelector>
  <div v-if="file" class="flex items-center gap-2 font-medium">{{ file.name }}</div>
</template>
