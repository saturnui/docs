<script setup lang="ts">
const file = ref<File>()
const url = ref('')

const handleChange = async (val?: FileList) => {
  if (val) file.value = val[0]
}

const handleImageChange = (val: string) => {
  url.value = val
}
</script>

<template>
  <VFileSelector :accepts="['jpg', 'jpeg', 'png', 'gif', 'svg']" @change="handleChange">
    <VButton size="lg" class="sa-primary">Select Image File</VButton>
  </VFileSelector>

  <div v-if="file" class="sa-shade-stronger p-4 rounded-3xl">
    <VImage :src="file" width="200" height="200" class="rounded-lg" @change="handleImageChange" />
  </div>

  <div v-if="url" class="bg-dark-800 sa-dark p-4">
    <div class="font-mono text-sm max-w-lg overflow-auto">{{ url }}</div>
  </div>
</template>
