<script setup lang="ts">

interface ApiListItem {
  name: string
  type: string
  defaultVal: any
  desc: string
  required: boolean
}

defineProps({
  api: Array,
  default(): ApiListItem[] {
    return []
  },
})
</script>

<template>
  <table class="border sa-border min-w-full leading-normal">
    <thead>
      <tr>
        <th
          class="px-5 py-3 border-b-2 sa-border sa-highlight-strong sa-text text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
        >
          <span>Name</span>
        </th>
        <th
          class="px-5 py-3 border-b-2 sa-border sa-highlight-strong sa-text text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
        >
          <span>Type</span>
        </th>
        <th
          class="px-5 py-3 border-b-2 sa-border sa-highlight-strong sa-text text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
        >
          <span>Req</span>
        </th>
        <th
          class="px-5 py-3 border-b-2 sa-border sa-highlight-strong sa-text text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
        >
          <span>Default</span>
        </th>
        <th
          class="px-5 py-3 border-b-2 sa-border sa-highlight-strong sa-text text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
        >
          <span>Description</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in api as ApiListItem[]" :key="i">
        <td class="px-5 py-5 border-b sa-border sa-light-dark sa-text text-sm">
          <code class="text-blue-600 dark:text-blue-400 font-semibold">{{ item.name }}</code>
        </td>
        <td class="px-5 py-5 border-b sa-border sa-light-dark sa-text text-sm">
          <code class="text-green-600 dark:text-green-300">{{ item.type }}</code>
        </td>
        <td class="px-5 py-5 border-b sa-border sa-light-dark sa-text text-sm text-center">
          <VCheckIcon v-if="item.required" class="text-green-500" />
        </td>
        <td class="px-5 py-5 border-b sa-border sa-light-dark sa-text text-sm whitespace-nowrap">
          <code v-if="typeof item.defaultVal === 'string'" class="text-green-600 dark:text-green-300">'{{ item.defaultVal }}'</code>
          <code v-else-if="typeof item.defaultVal === 'boolean'" class="text-pink-700 dark:text-pink-400">{{ item.defaultVal }}</code>
          <code v-else-if="typeof item.defaultVal === 'number'" class="text-blue-600 dark:text-blue-400">{{ item.defaultVal }}</code>
          <code v-else-if="item.defaultVal instanceof Array" class="text-purple-600 dark:text-purple-400">{{ item.defaultVal }}</code>
          <code v-else-if="item.defaultVal === undefined" class="sa-text">undefined</code>
          <code v-else-if="item.defaultVal === null" class="sa-text">null</code>
        </td>
        <td class="px-5 py-5 border-b sa-border sa-light-dark sa-text text-sm">
          <p class="whitespace-no-wrap" v-html="item.desc"></p>
        </td>
      </tr>
    </tbody>
  </table>
</template>
