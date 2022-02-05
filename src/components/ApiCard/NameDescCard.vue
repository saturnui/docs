<script setup lang="ts">

interface ListItem {
  name: string
  desc: string
  binds: ListItem[]
}

defineProps({
  api: Array,
  default(): ListItem[] {
    return []
  },
})
</script>

<template>
  <table class="border sa-border min-w-full leading-normal">
    <thead>
      <tr>
        <th
          class="px-5 py-3 border-b-2 sa-border sa-highlight-strong sa-text text-left text-xs font-semibold text-gray-600 uppercase w-30"
        >
          <span>Name</span>
        </th>
        <th
          class="px-5 py-3 border-b-2 sa-border sa-highlight-strong sa-text text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
        >
          <span>Description</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in api as ListItem[]" :key="i">
        <td class="px-5 py-5 border-b sa-border sa-light-dark sa-text text-sm align-top">
          <code class="text-blue-600 dark:text-blue-400 font-semibold">{{ item.name }}</code>
        </td>
        <td class="px-5 py-5 border-b sa-border sa-light-dark sa-text text-sm">
          <p class="whitespace-no-wrap" v-html="item.desc"></p>
          <div v-if="item.binds" class="sa-highlight-strong mt-4">
            <div class="sa-highlight-strong px-4 py-3">
              The following bindings are available for
              <code class="text-green-600 dark:text-green-400">#{{ item.name }}</code> slot
            </div>
            <div class="px-4 py-2">
              <table class>
                <tr v-for="(bind, n) in item.binds as ListItem[]" :key="n">
                  <td class="py-2 sa-text text-sm">
                    <code class="text-blue-600 dark:text-blue-400 font-semibold">{{ bind.name }}</code>
                  </td>
                  <td class="px-5 py-2 sa-text text-sm">
                    <p class="whitespace-no-wrap" v-html="bind.desc"></p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
