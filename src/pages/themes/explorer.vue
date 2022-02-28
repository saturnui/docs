<script setup lang="ts">
import { useThemeStore } from '~/stores/themes'

const selectedItem = ref('light')
const themeStore = useThemeStore()
const root = ref()

onMounted(() => {
  watch(selectedItem, (val: any) => {
    for (const [k, v] of Object.entries(themeStore.themes[val]))
      root.value.style.setProperty(`--color-${k}`, v)
  }, { immediate: true })
})
</script>

<template>
  <div ref="root" class="dark">
    <div class="grid gap-8 bg-base-300 text-base-content p-8">
      <div class="col-span-full text-6xl font-bold">Testing</div>
      <ThemeCard title="Component">
        <div class="flex flex-wrap items-center justify-center h-full p-8 gap-2">
          <button size="xl" class="btn btn-primary">Button 1</button>
          <VButton size="xl" class="bg-primary hover:bg-primary focus:ring-primary">Button 1</VButton>
          <VButton size="xl" class="bg-primary">Button 1</VButton>
          <VButton
            size="xl"
            class="core-border border-primary focus:ring-secondary"
          >Button 2</VButton>
          <VButton
            size="xl"
            disabled
            class="core-border hover:border-accent"
          >Button 3</VButton>
          <VButton size="xl" class="core-border hover:border-secondary text-primary hover:text-secondary">Button 4</VButton>
          <VButton
            size="xl"
            class="core-border border-primary text-primary focus:border-secondary"
          >Button 5</VButton>
          <a href="#" size="xl" class="btn link core-border focus:border-primary focus:ring-primary">Hello, world!</a>
        </div>
      </ThemeCard>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: plain
</route>
