<script setup lang="ts">
const showMore = ref(false)
const open = ref(false)
</script>

<template>
  <div class="vuwi-content sm:p-8 space-y-6">
    <div class="vuwi-window filter sm:drop-shadow-lg relative">
      <div class="absolute top-1 left-0 pl-26 font-bold vuwi-text flex items-center w-full px-4">
        <div class="border-l dark:border-dark-600 px-6 py-2">Collapse</div>
        <div class="flex-grow"></div>
      </div>
      <VuwiLine />
      <div class="vuwi-highlight font-bold text-sm px-4 py-2">
        <span>Headless</span>
      </div>
      <div class="px-4 py-3 flex">
        <div class="flex flex-wrap">
          <span v-if="!showMore">
            Lorem ipsum dolor sit amet,
            <span
              class="cursor-pointer text-blue-500 pl-1"
              @click="showMore = true"
            >Show more...</span>
          </span>
          <VuwiCollapse v-model="showMore">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu nulla vitae purus ornare vulputate. Maecenas elementum ornare massa, sed sagittis lorem placerat in. Nullam ullamcorper erat vel vestibulum feugiat. Integer commodo augue a mauris rutrum, at luctus massa iaculis. Integer tempus sit amet erat id luctus. Morbi ut iaculis odio. Etiam dictum, ipsum nec congue elementum, quam orci ultrices lorem, in porttitor tortor urna sed orci. Pellentesque congue porttitor nulla, in aliquet eros dapibus in. Sed vulputate dapibus porta. Morbi consequat finibus sem, at laoreet dui fermentum ut. Fusce vulputate nisi ut velit mollis mattis. Nullam id tincidunt felis. Nulla euismod justo ut sodales hendrerit. Donec suscipit, orci et condimentum efficitur, sem lacus dictum dolor, imperdiet tincidunt dolor sapien nec risus.
            <span
              class="cursor-pointer text-blue-500 pl-1"
              @click="showMore = false"
            >Show less...</span>
          </VuwiCollapse>
        </div>
      </div>
      <div class="vuwi-highlight font-bold text-sm px-4 py-2">
        <span>Header</span>
      </div>
      <div class="px-4 py-3 flex">
        <VuwiCollapse v-model="open" class="w-full">
          <template #header="{ open: isOpen }">
            <div
              class="relative p-3 flex items-center gap-4 w-full vuwi-border z-0 vuwi-light-dark"
            >
              <span class="font-bold flex-grow">Title here</span>
              <tabler-chevron-up
                class="transition duration-150 transform"
                :class="{ 'rotate-180': isOpen }"
              />
            </div>
          </template>
          <div class="vuwi-border vuwi-shade p-4 -mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu nulla vitae purus ornare vulputate. Maecenas elementum ornare massa, sed sagittis lorem placerat in. Nullam ullamcorper erat vel vestibulum feugiat. Integer commodo augue a mauris rutrum, at luctus massa iaculis. Integer tempus sit amet erat id luctus. Morbi ut iaculis odio. Etiam dictum, ipsum nec congue elementum, quam orci ultrices lorem, in porttitor tortor urna sed orci. Pellentesque congue porttitor nulla, in aliquet eros dapibus in. Sed vulputate dapibus porta. Morbi consequat finibus sem, at laoreet dui fermentum ut. Fusce vulputate nisi ut velit mollis mattis. Nullam id tincidunt felis. Nulla euismod justo ut sodales hendrerit. Donec suscipit, orci et condimentum efficitur, sem lacus dictum dolor, imperdiet tincidunt dolor sapien nec risus.
            <span
              class="cursor-pointer text-blue-500 pl-1"
              @click="open = false"
            >Close</span>
          </div>
        </VuwiCollapse>
      </div>

      <div class="vuwi-highlight font-bold text-sm px-4 py-2">Group</div>
      <div class="px-4 py-3 -space-y-1">
        <VuwiCollapse v-for="i in 3" :key="i" group="myCustomGroup" class="w-full">
          <template #header="{ open: isOpen }">
            <div
              class="relative p-3 flex items-center gap-4 w-full vuwi-border z-0 vuwi-light-dark"
            >
              <span class="font-bold flex-grow">Title here</span>
              <tabler-chevron-up
                class="transition duration-150 transform"
                :class="{ 'rotate-180': isOpen }"
              />
            </div>
          </template>
          <div class="vuwi-border vuwi-shade p-4 -mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu nulla vitae purus ornare vulputate. Maecenas elementum ornare massa, sed sagittis lorem placerat in. Nullam ullamcorper erat vel vestibulum feugiat. Integer commodo augue a mauris rutrum, at luctus massa iaculis. Integer tempus sit amet erat id luctus. Morbi ut iaculis odio. Etiam dictum, ipsum nec congue elementum, quam orci ultrices lorem, in porttitor tortor urna sed orci. Pellentesque congue porttitor nulla, in aliquet eros dapibus in. Sed vulputate dapibus porta. Morbi consequat finibus sem, at laoreet dui fermentum ut. Fusce vulputate nisi ut velit mollis mattis. Nullam id tincidunt felis. Nulla euismod justo ut sodales hendrerit. Donec suscipit, orci et condimentum efficitur, sem lacus dictum dolor, imperdiet tincidunt dolor sapien nec risus.
          </div>
        </VuwiCollapse>
      </div>
    </div>
    <!-- Code Snippet -->
    <div class="vuwi-window filter drop-shadow-lg relative">
      <span
        class="absolute top-1 left-26 px-6 py-2 font-bold border-l dark:border-dark-600 vuwi-text"
      >Code Snippet</span>
      <VuwiLine />
      <div class="p-4 vuwi-dark text-sm text-teal-400">
        <pre><code>&lt;VuwiCollapse v-model="open" class="w-full">
  &lt;template #header="{ open: isOpen }">
    &lt;div
      class="relative p-3 flex items-center gap-4 w-full vuwi-border z-0 vuwi-light-dark">
      &lt;span class="font-bold flex-grow">Title here&lt;/span>
      &lt;tabler-chevron-up
        class="transition duration-150 transform"
        :class="{ 'rotate-180': isOpen }"
      />
    &lt;/div>
  &lt;/template>
  &lt;div class="vuwi-border vuwi-shade p-4 -mt-1">
    Lorem ipsum dolor sit amet...
  &lt;/div>
&lt;/VuwiCollapse></code></pre>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: vuwi
</route>
