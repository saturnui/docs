<template>
  <div class="p-12 space-y-4">
    <div class="text-2xl">
      <span>Protected Page</span>
    </div>
    <p>This page is protected by a guard defined in main.js</p>
  </div>
</template>

<route lang="yaml">
name: protected
meta:
  requiresAuth: true
</route>
