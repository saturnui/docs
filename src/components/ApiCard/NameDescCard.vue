<script setup lang="ts">

interface ListItem {
  name: string
  desc: string
}

defineProps({
  api: Array,
  default(): ListItem[] {
    return []
  },
})
</script>

<template>
  <table class="border wi-border min-w-full leading-normal">
    <thead>
      <tr>
        <th
          class="px-5 py-3 border-b-2 wi-border wi-highlight-strong wi-text text-left text-xs font-semibold text-gray-600 uppercase w-30"
        >
          <span>Name</span>
        </th>
        <th
          class="px-5 py-3 border-b-2 wi-border wi-highlight-strong wi-text text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
        >
          <span>Description</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in api as ListItem[]" :key="i">
        <td class="px-5 py-5 border-b wi-border wi-light-dark wi-text text-sm">
          <code class="text-blue-600 dark:text-blue-400 font-semibold">{{ item.name }}</code>
        </td>
        <td class="px-5 py-5 border-b wi-border wi-light-dark wi-text text-sm">
          <p class="whitespace-no-wrap" v-html="item.desc"></p>
        </td>
      </tr>
    </tbody>
  </table>
</template>
