<script setup lang="ts">
defineProps({
  theme: String,
})
const percentA = ref(40)
const percentB = ref(35)
const percentC = ref(55)
const percentD = ref(65)
</script>

<template>
  <VResizer
    component="demo-resizer"
    class="sa-card p-4 min-w-60 col-span-full max-w-full"
    resize="width"
  >
    <div>
      <div class="flex flex-wrap px-4 gap-8 items-center justify-center">
        <!-- Food -->
        <div>
          <VTooltip show="focus" class="flex-grow sm:max-w-60">
            <template #tooltip>
              <div class="w-70 space-y-3">
                <DemoTooltip
                  title="Progress Circle Component"
                  link="/components/progresscircle"
                >Use Progress Circle to display data in a circular view</DemoTooltip>
              </div>
            </template>
            <div class="food-progress-circle" tabindex="0">
              <VProgressCircle
                :percent="percentA"
                class="bg-demo"
                color="color"
                :width="1"
              />
            </div>
          </VTooltip>
          <div class="text-center font-semibold pb-2 pt-1">Food</div>
        </div>

        <!-- Water -->
        <div>
          <VTooltip show="focus" class="flex-grow sm:max-w-60">
            <template #tooltip>
              <div class="w-70 space-y-3">
                <DemoTooltip
                  title="Progress Circle Component"
                  link="/components/progresscircle"
                >Use Progress Circle to display data in a circular view</DemoTooltip>
              </div>
            </template>
            <div class="water-progress-circle" tabindex="0">
              <VProgressCircle
                :percent="percentD"
                class="bg-demo"
                color="color"
                :width="5"
              />
            </div>
          </VTooltip>
          <div class="text-center font-semibold pb-2 pt-1">Water</div>
        </div>

        <!-- Supplies -->
        <div>
          <VTooltip show="focus" class="flex-grow sm:max-w-60">
            <template #tooltip>
              <div class="w-70 space-y-3">
                <DemoTooltip
                  title="Progress Circle Component"
                  link="/components/progresscircle"
                >Use Progress Circle to display data in a circular view</DemoTooltip>
              </div>
            </template>
            <div class="supplies-progress-circle" tabindex="0">
              <VProgressCircle
                :percent="percentC"
                class="bg-demo"
                color="color"
                :width="6"
              >
                <div
                  class="absolute sa-mc flex items-center justify-center rounded-full w-10 h-10 max-h-10 font-bold bg-demo"
                >
                  <tabler-box class="text-2xl" />
                </div>
              </VProgressCircle>
            </div>
          </VTooltip>
          <div class="text-center font-semibold pb-2 pt-1">Supplies</div>
        </div>

        <!-- Energy -->
        <div>
          <VTooltip show="focus" class="flex-grow sm:max-w-60">
            <template #tooltip>
              <div class="w-70 space-y-3">
                <DemoTooltip
                  title="Progress Circle Component"
                  link="/components/progresscircle"
                >Use Progress Circle to display data in a circular view</DemoTooltip>
              </div>
            </template>
            <div class="energy-progress-circle" tabindex="0">
              <VProgressCircle
                :percent="percentB"
                class="bg-demo"
                color="color"
                :width="12"
              >
                <div class="absolute sa-mc sa-text text-xl font-bold">{{ percentB }}</div>
              </VProgressCircle>
            </div>
          </VTooltip>
          <div class="text-center font-semibold pb-2 pt-1">Energy</div>
        </div>
      </div>
    </div>
    <template #handle="{ startDrag }">
      <div class="resizer-handle" @mousedown="startDrag">
        <VTooltip placement="left" show="focus">
          <template #tooltip>
            <DemoTooltip
              title="Resizer Component"
              link="/components/resizer"
            >Use the resizer to adjust a content's width, height or both.</DemoTooltip>
          </template>
          <div tabindex="0" class="grip w-2 h-10 rounded-full"></div>
        </VTooltip>
      </div>
    </template>
  </VResizer>
</template>

<style>
/* food */
.mono .food-progress-circle {
  @apply border-4 rounded-full border-white;
}

.mono .food-progress-circle .color {
  @apply border-white bg-white;
}

.dark .food-progress-circle {
  @apply rounded-full bg-gray-700;
}

.dark .food-progress-circle .color {
  @apply border-white bg-yellow-400;
}

/* water */
.mono .water-progress-circle {
  @apply border-4 rounded-full border-white;
}

.mono .water-progress-circle .color {
  @apply border-blue-500 bg-white;
}

.dark .water-progress-circle {
  @apply rounded-full bg-purple-500;
}

.dark .water-progress-circle .color {
  @apply border-purple-500 bg-purple-700;
}

/* supplies */
.mono .supplies-progress-circle {
  @apply border-4 rounded-full border-white;
}

.mono .supplies-progress-circle .color {
  @apply border-blue-500 bg-white;
}

.dark .supplies-progress-circle {
  @apply rounded-full bg-gray-700;
}

.dark .supplies-progress-circle .color {
  @apply border-teal-600 bg-teal-400;
}

/* energy */
.mono .energy-progress-circle {
  @apply border-4 rounded-full border-white;
}

.mono .energy-progress-circle .color {
  @apply border-white;
}

.dark .energy-progress-circle {
  @apply rounded-full bg-gray-700;
}

.dark .energy-progress-circle .color {
  @apply border-pink-500 bg-gray-700;
}

/* resizer */
.mono .grip {
  @apply bg-white;
}

.dark .grip {
  @apply bg-teal-400;
}
</style>
