<script setup lang="ts">
const val = ref(false)
</script>

<template>
  <div class="flex items-center gap-8">
    <!-- Small -->
    <VSwitch v-model="val" class="sa-switch-sm">
      <carbon-moon class="ml-1" />
      <template #left>
        <carbon-sun class="mr-1" />
      </template>
    </VSwitch>

    <!-- Medium (Default) -->
    <VSwitch v-model="val">
      <carbon-moon class="ml-1" />
      <template #left>
        <carbon-sun class="mr-1" />
      </template>
    </VSwitch>

    <!-- Large -->
    <VSwitch v-model="val" class="sa-switch-lg">
      <carbon-moon class="ml-1" />
      <template #left>
        <carbon-sun class="mr-1" />
      </template>
    </VSwitch>

    <!-- Disabled -->
    <VSwitch v-model="val" class="sa-switch-lg" disabled>
      <carbon-moon class="ml-1" />
      <template #left>
        <carbon-sun class="mr-1" />
      </template>
    </VSwitch>
  </div>
</template>
