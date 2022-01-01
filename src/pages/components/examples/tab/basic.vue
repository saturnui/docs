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
    <div class="vuwi-tab-container">
      <div
        v-for="(item, index) in items"
        :key="item.label"
        class="vuwi-tab-container-border vuwi-border"
        :class="{ 'vuwi-tab-border-active': selectedIndex === index }"
        @click="selectedIndex = index"
      >
        <div class="vuwi-tab">
          <span class="font-medium text-sm">{{ item.label }}</span>
        </div>
      </div>
      <div class="vuwi-tab-border-spacer vuwi-border"></div>
    </div>

    <!-- Tabs with underline and icons -->
    <div class="vuwi-tab-container">
      <div
        v-for="(item, index) in items"
        :key="item.label"
        class="vuwi-tab-container-border vuwi-border"
        :class="{ 'vuwi-tab-border-active': selectedIndex === index }"
        @click="selectedIndex = index"
      >
        <div class="vuwi-tab">
          <Component :is="item.icon" />
          <span class="font-medium text-sm">{{ item.label }}</span>
        </div>
      </div>
      <div class="vuwi-tab-border-spacer vuwi-border"></div>
    </div>

    <!-- Tabs with full width -->
    <div class="vuwi-tab-container">
      <div
        v-for="(item, index) in items"
        :key="item.label"
        class="vuwi-tab-container-border vuwi-border vuwi-tab-container-w-full"
        :class="{ 'vuwi-tab-border-active': selectedIndex === index }"
        @click="selectedIndex = index"
      >
        <div class="vuwi-tab">
          <span class="font-medium text-sm">{{ item.label }}</span>
        </div>
      </div>
    </div>

    <!-- Tabs in pills -->
    <div class="vuwi-tab-container">
      <div
        v-for="(item, index) in items"
        :key="item.label"
        class="vuwi-tab-container-pill text-sm"
        @click="selectedIndex = index"
      >
        <button class="vuwi-btn" :class="{'bg-purple-600 text-white': selectedIndex === index}">{{ item.label }}</button>
        <!-- <div class="vuwi-tab">
          <span class="font-medium text-sm">{{ item.label }}</span>
        </div> -->
      </div>
    </div>

    <!-- Test -->
    <div class="flex justify-center">
      <div class="vuwi-tab-container vuwi-tab-container-bar vuwi-border">
        <div
          v-for="(item, index) in items"
          :key="item.label"
          class="vuwi-tab-container-bar-tab"
          :class="{ 'vuwi-tab-border-active': selectedIndex === index }"
          @click="selectedIndex = index"
        >
          <div class="px-8 py-3 font-medium text-sm">{{ item.label }}</div>
        </div>
      </div>
    </div>

    <div class="vuwi-tab-container">
      <div
        v-for="(item, index) in items"
        :key="item.label"
        class="vuwi-tab-container-border vuwi-border"
        :class="{ 'vuwi-tab-border-active': selectedIndex === index }"
        @click="selectedIndex = index"
      >
        <div class="vuwi-tab gap-4">
          <span class="font-medium text-sm">{{ item.label }}</span>
          <div class="bg-dark-100 dark:bg-dark-900 px-2 py-1 rounded-full text-xs font-bold">123</div>
        </div>
      </div>
      <div class="vuwi-tab-border-spacer vuwi-border"></div>
    </div>
  </div>
</template>
