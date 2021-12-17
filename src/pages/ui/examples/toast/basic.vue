<script setup lang="ts">
import { Message } from '~/modules/vuwi/composables'

const showToast = ref(false)
const text = ref('')

const toastPositions = [
  { label: 'Left', value: 'vuwi-toast-left' },
  { label: 'Right', value: 'vuwi-toast-right' },
  { label: 'Full', value: 'vuwi-toast-full' },
]
const position = ref('vuwi-toast-left')

const { addMessage, onAddMessage } = useMessenger()
onAddMessage((message: Message) => {
  if (message.type === 'basic') {
    text.value = message.text
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 2000)
  }
})
</script>

<template>
  <div class="relative p-2 h-50 text-white rounded vuwi-highlight-weaker overflow-hidden">
    <div class="flex items-center gap-4">
      <VuwiDropdown
        v-model="position"
        :options="toastPositions"
        class="vuwi-card border vuwi-border-strongest"
      />
      <button
        class="vuwi-btn vuwi-btn-primary"
        @click="addMessage({ type: 'basic', text: 'This is a test' })"
      >
        <span>Show Toast</span>
      </button>
    </div>

    <div class="absolute -bottom-3 -right-4 font-bold text-white dark:text-dark-700 text-8xl select-none">Preview</div>

    <VuwiToast v-model="showToast" class="absolute bg-black" :class="position">{{ text }}</VuwiToast>
  </div>
</template>
