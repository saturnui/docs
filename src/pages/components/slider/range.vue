<script setup lang="ts">
const val1 = ref(-50)
const val2 = ref(50)
const range = ref([val1.value, val2.value])

watch(val1, (v: number) => range.value = [v, val2.value])
watch(val2, (v: number) => range.value = [val1.value, v])
watch(range, (v: number[]) => {
  val1.value = v[0]
  val2.value = v[1]
})
</script>

<template>
  <VTextInput v-model="val1" type="number" min="-100" :max="val2" class="border wi-border w-24" />
  <VSlider v-model="range" :min="-100" :max="100" />
  <VTextInput v-model="val2" type="number" :min="val1" max="100" class="border wi-border w-24" />
</template>
