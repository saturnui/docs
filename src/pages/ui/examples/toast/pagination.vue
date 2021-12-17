<script setup lang="ts">
import { Message } from '~/modules/vuwi/composables'

const showToast = ref(false)
const text = ref('')

const toastPositions = [
  { label: 'Left', value: 'vuwi-toast-left sm:max-w-96 ' },
  { label: 'Right', value: 'vuwi-toast-right sm:max-w-96 ' },
  { label: 'Full', value: 'vuwi-toast-full' },
]
const position = ref(toastPositions[0].value)

const { addMessage, onAddMessage } = useMessenger()
onAddMessage((message: Message) => {
  if (message.type === 'multi') {
    text.value = message.text
    showToast.value = true
    // setTimeout(() => {
    //   showToast.value = false
    // }, 2000)
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
        @click="addMessage({ type: 'multi', text: 'This is a test' })"
      >
        <span>Add Message</span>
      </button>
    </div>

    <div class="absolute -bottom-3 -right-4 font-bold text-white dark:text-dark-700 text-8xl select-none">Preview</div>

    <VuwiToast v-model="showToast" class="absolute bg-dark-200 w-full" :class="position">
      <div class="flex items-center justify-between">
        <div class="flex justify-center items-center gap-4">
          <tabler-message class="text-5xl" />
          <div
            class="flex h-full text-left justify-center border-l border-opacity-20 pl-4"
          >{{ text }}</div>
        </div>
      </div>

      <template #action>
        <div class="pt-4 px-2 flex items-center">
          <span class="text-sm">1 of 3</span>
          <div class="flex-grow"></div>
          <div class="flex gap-4">
            <button
              class="vuwi-btn rounded uppercase text-xs font-bold text-white"
              @click="showToast = false"
            >
              <span>Dismiss</span>
            </button>
            <button
              class="vuwi-btn rounded vuwi-btn-primary text-xs uppercase font-bold text-white"
              @click="showToast = false"
            >
              <span>Ok</span>
            </button>
          </div>
        </div>
      </template>
    </VuwiToast>
  </div>
</template>
