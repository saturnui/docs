<script setup lang="ts">
const pendingFiles = ref<File[]>([])
const handleChange = (files: File[]) => {
  pendingFiles.value = files
}
const removeFile = (file: File) => {
  const index = pendingFiles.value.indexOf(file)
  pendingFiles.value.splice(index, 1)
}
</script>

<template>
  <VDropzone class="flex flex-col text-gray-100" @change="handleChange">
    <template #default="{ active, files }">
      <div
        v-if="files"
        class="flex flex-wrap gap-4 h-100 overflow-y-auto w-full p-4 doc-preview rounded"
        :class="{ 'bg-green-400': active }"
      >
        <div
          v-for="(file, index) in files"
          :key="index"
          class="relative flex flex-col items-center w-50"
        >
          <div class="bg-white p-2 rounded-lg filter drop-shadow-lg">
            <VFilePreview :src="file" width="200" height="200" class="rounded" />
          </div>
          <div class="flex items-center justify-center bg-gray-900 rounded-lg mt-2 px-3 py-2">
            <div class="truncate text-sm font-bold max-w-40">{{ file.name }}</div>
          </div>
          <button
            class="absolute -top-2 -right-2 wi-btn wi-btn-icon bg-black border-3"
            @click="removeFile(file)"
          >
            <tabler-x />
          </button>
        </div>
      </div>
      <div v-else class="flex flex-col items-center justify-center h-100 w-full p-4 doc-preview rounded">
        <tabler-cloud-upload class="h-20 w-20" />
        <div class="p-2">Drop Files</div>
      </div>
      <div class="py-2">
        <div class="flex gap-2 px-3 py-2 wi-text bg-dark-50 dark:bg-gray-900 rounded font-medium">
          <span>Total files:</span>
          <span>{{ files?.length || 0 }}</span>
        </div>
      </div>
    </template>
  </VDropzone>
</template>
