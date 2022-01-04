<script setup lang="ts">
const showMore = ref(false)
</script>

<template>
  <span v-if="!showMore">
    Lorem ipsum dolor sit amet,
    <span
      class="cursor-pointer text-blue-500 pl-1"
      @click="showMore = true"
    >Show more...</span>
  </span>
  <VCollapse v-model="showMore">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu nulla vitae purus ornare vulputate. Maecenas elementum ornare massa, sed sagittis lorem placerat in. Nullam ullamcorper erat vel vestibulum feugiat. 
    <span
      class="cursor-pointer text-blue-500 pl-1"
      @click="showMore = false"
    >Show less...</span>
  </VCollapse>
</template>
