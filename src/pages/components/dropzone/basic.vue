<script setup lang="ts">
const pendingFiles = ref<File[]>([])
const handleChange = (files: File[]) => {
  const arr = [] as File[]
  pendingFiles.value = arr.concat(pendingFiles.value, files)
}
const removeFile = (file: File) => {
  const index = pendingFiles.value.indexOf(file)
  pendingFiles.value.splice(index, 1)
}

const clearFiles = () => {
  pendingFiles.value = []
}
</script>

<template>
  <VDropzone class="flex flex-col" @change="handleChange">
    <template #default="{ active }">
      <div
        v-if="pendingFiles.length"
        class="flex flex-wrap gap-4 h-100 overflow-y-auto w-full p-4 doc-preview rounded"
        :class="{ 'bg-green-400': active }"
      >
        <div
          v-for="(file, index) in pendingFiles"
          :key="index"
          class="relative flex flex-col items-center w-50"
        >
          <div
            class="bg-dark-900 rounded-lg filter drop-shadow-lg h-50 w-50 flex items-center justify-center"
          >
            <VImage :src="file" width="200" height="200" class="rounded max-h-46 max-w-46" />
          </div>
          <div class="sa-center sa-dark rounded-lg mt-2 px-3 py-2">
            <div class="truncate text-sm font-bold max-w-40">{{ file.name }}</div>
          </div>
          <VButton
            icon
            class="absolute -top-2 -right-2 rounded-full sa-dark"
            @click="removeFile(file)"
          >
            <tabler-x />
          </VButton>
        </div>
      </div>
      <div
        v-else
        class="flex flex-col items-center justify-center h-50 w-full p-4 doc-preview rounded"
      >
        <tabler-cloud-upload class="h-20 w-20 opacity-30 pointer-events-none select-none" />
        <div class="p-2 font-bold text-2xl opacity-30 pointer-events-none select-none">Drop Files</div>
      </div>
      <div
        class="flex items-center gap-2 px-3 py-2 sa-text bg-dark-50 dark:bg-gray-900 font-medium"
      >
        <span>Total files:</span>
        <span>{{ pendingFiles.length || 0 }}</span>
        <div class="flex-grow"></div>
        <VButton class="sa-primary" @click="clearFiles">Clear</VButton>
      </div>
    </template>
  </VDropzone>
</template>
