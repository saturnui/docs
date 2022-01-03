<template>
  <div class="p-4">
    <VCollapse v-for="i in 3" :key="i" group="myCustomGroup" class="w-full">
      <template #header="{ open: isOpen }">
        <div class="relative p-3 flex items-center gap-4 w-full border wi-border z-0 wi-light-dark">
          <span class="font-bold flex-grow">Title here</span>
          <tabler-chevron-up
            class="transition duration-150 transform"
            :class="{ 'rotate-180': isOpen }"
          />
        </div>
      </template>
      <div
        class="border wi-border wi-light-dark p-4 -mt-1"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu nulla vitae purus ornare vulputate. Maecenas elementum ornare massa, sed sagittis lorem placerat in. Nullam ullamcorper erat vel vestibulum feugiat. Integer commodo augue a mauris rutrum, at luctus massa iaculis. Integer tempus sit amet erat id luctus. Morbi ut iaculis odio. Etiam dictum, ipsum nec congue elementum, quam orci ultrices lorem, in porttitor tortor urna sed orci. Pellentesque congue porttitor nulla, in aliquet eros dapibus in. Sed vulputate dapibus porta. Morbi consequat finibus sem, at laoreet dui fermentum ut. Fusce vulputate nisi ut velit mollis mattis. Nullam id tincidunt felis. Nulla euismod justo ut sodales hendrerit. Donec suscipit, orci et condimentum efficitur, sem lacus dictum dolor, imperdiet tincidunt dolor sapien nec risus.</div>
    </VCollapse>
  </div>
</template>

<route lang="yaml">
meta:
  layout: plain
</route>
