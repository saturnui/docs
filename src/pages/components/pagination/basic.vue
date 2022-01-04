<script setup lang="ts">
const currentPage = ref(0)
</script>

<template>
  <div class="grid gap-6">
    <VPagination v-model="currentPage" :length="12" :total-visible="1" />
    <VPagination v-model="currentPage" :length="12" :total-visible="2" />
    <VPagination v-model="currentPage" :length="12" :total-visible="3" />
    <VPagination v-model="currentPage" :length="12" :total-visible="4" />
    <VPagination v-model="currentPage" :length="12" :total-visible="5" />
    <VPagination v-model="currentPage" :length="12" :total-visible="6" />
    <VPagination v-model="currentPage" :length="12" :total-visible="7" />
    <VPagination v-model="currentPage" :length="12" />
  </div>
</template>
