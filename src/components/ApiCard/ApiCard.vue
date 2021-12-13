<template>
  <table class="border vuwi-border min-w-full leading-normal">
    <thead>
      <tr>
        <th
          class="px-5 py-3 border-b-2 vuwi-border vuwi-highlight-strong vuwi-text text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
        >
          <span>Name</span>
        </th>
        <th
          class="px-5 py-3 border-b-2 vuwi-border vuwi-highlight-strong vuwi-text text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
        >
          <span>Type</span>
        </th>
        <th
          class="px-5 py-3 border-b-2 vuwi-border vuwi-highlight-strong vuwi-text text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
        >
          <span>Default</span>
        </th>
        <th
          class="px-5 py-3 border-b-2 vuwi-border vuwi-highlight-strong vuwi-text text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
        >
          <span>Description</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in 3" :key="i">
        <td class="px-5 py-5 border-b vuwi-border vuwi-light-dark vuwi-text text-sm">
          <div>Vera Carpenter</div>
        </td>
        <td class="px-5 py-5 border-b vuwi-border vuwi-light-dark vuwi-text text-sm">
          <p class="whitespace-no-wrap">Admin</p>
        </td>
        <td class="px-5 py-5 border-b vuwi-border vuwi-light-dark vuwi-text text-sm">
          <p class="whitespace-no-wrap">Jan 21, 2020</p>
        </td>
        <td class="px-5 py-5 border-b vuwi-border vuwi-light-dark vuwi-text text-sm">
          <p class="whitespace-no-wrap">43</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>
