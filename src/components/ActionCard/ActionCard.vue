<script lang="ts">
export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    desc: {
      type: String,
      default: 'Description',
    },
    action: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default:
        'https://www.gstatic.com/identity/boq/Companymobile/dataandpersonalization_icon_96x96_cdb6dff2e31ed6745ece4662231bfd48.png',
    },
  },
  setup() {},
})
</script>

<template>
  <div
    class="
      p-0
      flex flex-col
      h-full
      shadow
      hover:shadow-lg
      pb-0
      cursor-pointer
      dark:bg-dark-800
      transition-shadow
      duration-500
      ease-in-out
      group
    "
  >
    <div class="flex flex-grow">
      <div class="p-4 space-y-4 flex-grow">
        <div class="text-xl">
          <span>{{ title }}</span>
        </div>
        <div class="text-sm flex-grow dark:text-gray-400">
          <span>{{ desc }}</span>
        </div>
      </div>
      <div class="flex justify-center items-center p-4">
        <img :src="icon" class="actioncard-image" />
      </div>
    </div>
    <Line />
    <div
      v-if="action"
      class="
        py-4
        px-4
        group-hover:bg-gray-50
        dark:group-hover:bg-white dark:group-hover:bg-opacity-5
      "
    >
      <div class="text-primary dark:text-gray-300 text-sm font-medium">
        {{ action }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.actioncard-image {
  width: 96px !important;
  height: 96px !important;
  min-width: 96px !important;
  min-height: 96px !important;
}
</style>
