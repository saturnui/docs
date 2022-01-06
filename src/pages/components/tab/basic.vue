<script setup lang="ts">
import IconBox from '~icons/tabler/box'

const selectedIndex = ref(2)
const items = [
  { label: 'My Account', icon: IconBox },
  { label: 'Company', icon: IconBox },
  { label: 'Team Members', icon: IconBox },
  { label: 'Billing', icon: IconBox },
]
</script>

<template>
  <div class="grid gap-12 mb-20">
    <!-- Tabs with underline -->
    <div class="wi-tab-container">
      <div
        v-for="(item, index) in items"
        :key="item.label"
        class="wi-tab-container-border wi-border"
        :class="{ 'wi-tab-border-active': selectedIndex === index }"
        @click="selectedIndex = index"
      >
        <div class="wi-tab">
          <span class="font-medium text-sm">{{ item.label }}</span>
        </div>
      </div>
      <div class="wi-tab-border-spacer wi-border"></div>
    </div>

    <!-- Tabs with underline and icons -->
    <div class="wi-tab-container">
      <div
        v-for="(item, index) in items"
        :key="item.label"
        class="wi-tab-container-border wi-border"
        :class="{ 'wi-tab-border-active': selectedIndex === index }"
        @click="selectedIndex = index"
      >
        <div class="wi-tab">
          <Component :is="item.icon" />
          <span class="font-medium text-sm">{{ item.label }}</span>
        </div>
      </div>
      <div class="wi-tab-border-spacer wi-border"></div>
    </div>

    <!-- Tabs with full width -->
    <div class="wi-tab-container">
      <div
        v-for="(item, index) in items"
        :key="item.label"
        class="wi-tab-container-border wi-border wi-tab-container-w-full"
        :class="{ 'wi-tab-border-active': selectedIndex === index }"
        @click="selectedIndex = index"
      >
        <div class="wi-tab">
          <span class="font-medium text-sm">{{ item.label }}</span>
        </div>
      </div>
    </div>

    <!-- Tabs in pills -->
    <div class="wi-tab-container">
      <div
        v-for="(item, index) in items"
        :key="item.label"
        class="wi-tab-container-pill text-sm"
        @click="selectedIndex = index"
      >
        <VButton :class="{'bg-purple-600 text-white': selectedIndex === index}">{{ item.label }}</VButton>
        <!-- <div class="wi-tab">
          <span class="font-medium text-sm">{{ item.label }}</span>
        </div> -->
      </div>
    </div>

    <!-- Test -->
    <div class="flex justify-center">
      <div class="wi-tab-container wi-tab-container-bar wi-border">
        <div
          v-for="(item, index) in items"
          :key="item.label"
          class="wi-tab-container-bar-tab"
          :class="{ 'wi-tab-border-active': selectedIndex === index }"
          @click="selectedIndex = index"
        >
          <div class="px-8 py-3 font-medium text-sm">{{ item.label }}</div>
        </div>
      </div>
    </div>

    <div class="wi-tab-container">
      <div
        v-for="(item, index) in items"
        :key="item.label"
        class="wi-tab-container-border wi-border"
        :class="{ 'wi-tab-border-active': selectedIndex === index }"
        @click="selectedIndex = index"
      >
        <div class="wi-tab gap-4">
          <span class="font-medium text-sm">{{ item.label }}</span>
          <div class="bg-dark-100 dark:bg-dark-900 px-2 py-1 rounded-full text-xs font-bold">123</div>
        </div>
      </div>
      <div class="wi-tab-border-spacer wi-border"></div>
    </div>
  </div>
</template>
