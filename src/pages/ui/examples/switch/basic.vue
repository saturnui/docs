<script setup lang="ts">
const val = ref(false)
</script>

<template>
  <div class="flex items-center gap-8">
    <!-- Small -->
    <VuwiSwitch v-model="val" class="vuwi-switch-sm">
      <carbon-moon class="ml-1" />
      <template #left>
        <carbon-sun class="mr-1" />
      </template>
    </VuwiSwitch>

    <!-- Medium (Default) -->
    <VuwiSwitch v-model="val">
      <carbon-moon class="ml-1" />
      <template #left>
        <carbon-sun class="mr-1" />
      </template>
    </VuwiSwitch>

    <!-- Large -->
    <VuwiSwitch v-model="val" class="vuwi-switch-lg">
      <carbon-moon class="ml-1" />
      <template #left>
        <carbon-sun class="mr-1" />
      </template>
    </VuwiSwitch>

    <!-- Disabled -->
    <VuwiSwitch v-model="val" class="vuwi-switch-lg" disabled>
      <carbon-moon class="ml-1" />
      <template #left>
        <carbon-sun class="mr-1" />
      </template>
    </VuwiSwitch>
  </div>
</template>
