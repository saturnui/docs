<script setup lang="ts">
const selectedFiles = ref<File[]>([])

const handleChange = async (files?: FileList) => {
  if (files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      selectedFiles.value.push(file)
    }
  }
}
</script>

<template>
  <div class="flex justify-between gap-2 p-2 wi-highlight-strong rounded">
    <VFileSelector multiple @change="handleChange">
      <VButton class="wi-primary">Select Files...</VButton>
    </VFileSelector>
    <VButton class="wi-shade border border-primary text-primary dark:text-white" @click="selectedFiles = []">Clear</VButton>
  </div>
  <div v-for="file in selectedFiles" :key="file.name">
    <div class="flex items-center gap-2 font-medium gap-2">
      <tabler-file />
      <span>{{ file.name }}</span>
    </div>
  </div>
</template>
