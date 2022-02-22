<script setup lang="ts">
const props = defineProps({
  modelValue: Boolean,
})
const emit = defineEmits(['update:drawer', 'click:toast'])
const useModelWrapper = (props: any, emit: Function, name = 'modelValue') => {
  return computed({
    get: () => props[name],
    set: (value: any) => emit(`update:${name}`, value),
  })
}

const menuItems = [
  { label: 'Home', badge: '/demo/badge_8.png' },
  { label: 'Communication', badge: '/demo/badge_1.png' },
  { label: 'Defense', badge: '/demo/badge_2.png' },
  { label: 'Exploration', badge: '/demo/badge_7.png' },
  { label: 'Navigation', badge: '/demo/badge_5.png' },
  { label: 'Robotics', badge: '/demo/badge_9.png' },
  { label: 'Space Crew', badge: '/demo/badge_6.png' },
  { label: 'Visitor Logs', badge: '/demo/badge_10.png' },
  { label: 'Travel Logs', badge: '/demo/badge_11.png' },
]

const show = useModelWrapper(props, emit)
</script>

<template>
  <VOverlay v-model="show" class="sa-overlay-absolute z-10" position="left">
    <div class="h-full max-w-75 flex flex-col bg-blue-600 overflow-y-auto filter border-r-2">
      <div class="grid p-4 gap-3 text-white border-b-2">
        <div class="text-lg font-bold">Drawer Component</div>
        <span class="text-sm">Use the drawer can be used for menus and secondary content.</span>
        <VButton
          size="sm"
          class="p-5 rounded bg-white text-blue-500 text-xs uppercase font-bold"
          @click="$emit('click:toast')"
        >
          <span>See component</span>
        </VButton>
      </div>
      <div class="flex gap-3 items-center px-4 max-h-14 min-h-14 font-bold text-white border-b">
        <div class="w-8 h-8 border-2 bg-white bg-opacity-20 rounded-full" />
        <!-- <div class="bg-white rounded-full h-2 text-transparent">Space Federation</div> -->
        <div class>Space Federation</div>
      </div>
      <VDrawer v-model="show">
        <div class="space-y-2">
          <div
            v-for="item in menuItems"
            :key="item.label"
            class="text-white p-2 px-6 flex items-center justify-start w-full gap-3 hover:bg-blue-500 cursor-pointer"
            @click="$emit('update:drawer', false)"
          >
            <div class="w-8 h-8 border-2 bg-white bg-opacity-20 rounded-full" />
            <!-- <div class="bg-white rounded-full h-2 text-transparent">{{ item.label }}</div> -->
            <div class>{{ item.label }}</div>
          </div>
        </div>
      </VDrawer>
    </div>
  </VOverlay>
</template>
