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
  <div class="flex justify-between gap-2">
    <VFileSelector multiple @change="handleChange">
      <VButton class="sa-primary">Select Files...</VButton>
    </VFileSelector>
    <VButton class="border sa-border" @click="selectedFiles = []">Clear</VButton>
  </div>
  <div v-for="file in selectedFiles" :key="file.name">
    <div class="flex items-center gap-2 font-medium gap-2">
      <tabler-file />
      <span>{{ file.name }}</span>
    </div>
  </div>
</template>
