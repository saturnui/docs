<script setup lang="ts">
import { useImageToDataUrl } from '~/saturn/vue/src'

const file = ref<File | null>()
const dataUrl = ref('')

const clear = () => {
  file.value = null
  dataUrl.value = ''
}

const handleChange = async (val?: FileList) => {
  if (val) {
    file.value = val[0]
    dataUrl.value = await useImageToDataUrl(file.value, 200, 200)
  } else {
    clear()
  }
}
</script>

<template>
  <VFileSelector v-if="!file" @change="handleChange">
    <VButton class="sa-primary">Select file...</VButton>
  </VFileSelector>
  <div v-else class="flex items-center justify-between">
    <div class="flex items-center gap-2 font-medium">{{ file.name }}</div>
    <div>
      <VButton class="border sa-border" @click="clear">Clear</VButton>
    </div>
  </div>
</template>
