<script setup lang="ts">
import {
  Message,
  useMessenger,
} from '~/packages/vuwi/src/composables/messenger'

const { onAddMessage } = useMessenger()
const showToast = ref(false)
const toastText = ref('')
const toastIcon = ref('')

onAddMessage((message: Message) => {
  toastText.value = message.text
  toastIcon.value = message.icon || ''
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 5000)
})
</script>

<template>
  <main class="vuwi-main">
    <router-view />
    <ToggleDarkMode class="text-white fixed top-4 right-4 z-50" />
  </main>

  <Toast v-model="showToast" :text="toastText">
    <template #icon>
      <tabler-check v-if="toastIcon === 'success'" class="h-8 w-8 text-green-300" />
      <tabler-x v-else-if="toastIcon === 'error'" class="h-8 w-8 text-red-500" />
    </template>
  </Toast>
</template>
