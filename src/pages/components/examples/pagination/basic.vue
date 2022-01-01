<script setup lang="ts">
const currentPage = ref(0)
</script>

<template>
  <div class="grid gap-6">
    <VuwiPagination v-model="currentPage" :length="12" :total-visible="1" />
    <VuwiPagination v-model="currentPage" :length="12" :total-visible="2" />
    <VuwiPagination v-model="currentPage" :length="12" :total-visible="3" />
    <VuwiPagination v-model="currentPage" :length="12" :total-visible="4" />
    <VuwiPagination v-model="currentPage" :length="12" :total-visible="5" />
    <VuwiPagination v-model="currentPage" :length="12" :total-visible="6" />
    <VuwiPagination v-model="currentPage" :length="12" :total-visible="7" />
    <VuwiPagination v-model="currentPage" :length="12" />
  </div>
</template>
