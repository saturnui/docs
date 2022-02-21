<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '/',
  },
  action: {
    type: String,
    default: 'See component',
  },
})

const navTo = () => {
  window.parent.location.href = props.link
}
</script>

<template>
  <div class="p-1 w-70 space-y-3 text-white pointer-events-auto">
    <div class="text-lg font-extrabold">{{ title }}</div>
    <div class="font-sm pb-4">
      <slot />
    </div>
    <div class="flex justify-end">
      <VButton
        class="sa-btn bg-white text-blue-500 font-bold text-sm transform uppercase"
        @click="navTo"
      >{{ action }}</VButton>
    </div>
  </div>
</template>
