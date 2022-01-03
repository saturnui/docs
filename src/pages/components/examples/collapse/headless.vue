<script setup lang="ts">
const showMore = ref(false)
</script>

<template>
  <div class="p-4">
    <span v-if="!showMore">
      Lorem ipsum dolor sit amet,
      <span
        class="cursor-pointer text-blue-500 pl-1"
        @click="showMore = true"
      >Show more...</span>
    </span>
    <VCollapse v-model="showMore">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu nulla vitae purus ornare vulputate. Maecenas elementum ornare massa, sed sagittis lorem placerat in. Nullam ullamcorper erat vel vestibulum feugiat. Integer commodo augue a mauris rutrum, at luctus massa iaculis. Integer tempus sit amet erat id luctus. Morbi ut iaculis odio. Etiam dictum, ipsum nec congue elementum, quam orci ultrices lorem, in porttitor tortor urna sed orci. Pellentesque congue porttitor nulla, in aliquet eros dapibus in. Sed vulputate dapibus porta. Morbi consequat finibus sem, at laoreet dui fermentum ut. Fusce vulputate nisi ut velit mollis mattis. Nullam id tincidunt felis. Nulla euismod justo ut sodales hendrerit. Donec suscipit, orci et condimentum efficitur, sem lacus dictum dolor, imperdiet tincidunt dolor sapien nec risus.
      <span
        class="cursor-pointer text-blue-500 pl-1"
        @click="showMore = false"
      >Show less...</span>
    </VCollapse>
  </div>
</template>

<route lang="yaml">
meta:
  layout: plain
</route>
