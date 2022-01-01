<script setup lang="ts">
defineEmits(['close'])
defineProps({ text: String, showAlert: Boolean })
</script>

<template>
  <transition name="vuwi-slide-down">
    <div v-if="showAlert" class="vuwi-alert bg-red-700 text-white mt-4" role="alert">
      <span class="p-3">{{ text }}</span>
      <button class="vuwi-btn vuwi-btn-icon mr-2" @click="$emit('close')">
        <tabler-x class="text-xl" />
      </button>
    </div>
  </transition>
</template>
