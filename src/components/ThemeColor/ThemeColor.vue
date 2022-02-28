<script setup lang="ts">
import { ColorPicker } from 'vue-color-kit'
import 'vue-color-kit/dist/vue-color-kit.css'

const props = defineProps({
  color: String,
})

const emit = defineEmits(['changed'])

const show = ref(false)
const root = ref()
const colorClass = computed(() => {
  return `bg-${props.color}`
})
const pickerColor = ref('')
watch(show, (val: Boolean) => {
  if (val)
    pickerColor.value = window.getComputedStyle(root.value.$el).backgroundColor
})

const changeColorHandler = (values: any) => {
  emit('changed', { color: props.color, value: `rgba(${values.rgba.r}, ${values.rgba.g}, ${values.rgba.b}, ${values.rgba.a})` })
}
</script>

<template>
  <VDropdown ref="root" v-model="show" :class="colorClass">
    <template #activator="{ toggle }">
      <div class="flex items-end p-2 font-semibold text-sm h-24" @click="toggle">
        <div class="bg-black bg-opacity-50 text-white px-3 py-1 rounded">{{ color }}</div>
      </div>
    </template>
    <!-- <div class="flex justify-center p-4">
      <ColorPicker
        v-if="show"
        style="width: 220px;box-shadow: none;border-radius:0;background-color: rgba(0, 0, 0, 0.2);"
        :color="pickerColor"
        @changeColor="changeColorHandler"
      />
    </div> -->
  </VDropdown>
</template>
