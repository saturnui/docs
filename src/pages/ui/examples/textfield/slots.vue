<script setup lang="ts">
const text = ref('')
const name = ref('')
const password = ref('')
const showPassword = ref(false)
const busy = ref(false)
const valid = ref(false)
const fieldType = computed(() => {
  return showPassword.value ? 'text' : 'password'
})
watch(text, (val: string) => {
  busy.value = !!val
  valid.value = false
  setTimeout(() => {
    busy.value = false
    valid.value = !!val
  }, 1000)
})
</script>

<template>
  <div class="grid gap-4">
    <div class="px-2">Example showing prepended icon with clear button.</div>
    <VuwiTextfield
      v-model="name"
      placeholder="Your name"
      class="border vuwi-border vuwi-shade py-2 h-14"
    >
      <template #prepend>
        <tabler-user class="text-xl opacity-30" />
      </template>
      <template #append>
        <button v-if="name" class="vuwi-btn vuwi-btn-icon" @click="name = ''">
          <tabler-x />
        </button>
      </template>
    </VuwiTextfield>

    <div class="px-2">Example toggling password between visible and hidden. As a bonus, this also shows a combination of a label with a placehoder.</div>
    <VuwiTextfield
      v-model="password"
      :type="fieldType"
      label="Password"
      placeholder="*****"
      class="border vuwi-border vuwi-shade py-2 h-14"
    >
      <template #prepend>
        <tabler-lock class="text-xl opacity-30" />
      </template>
      <template #append>
        <button class="vuwi-btn vuwi-btn-icon" @click="showPassword = !showPassword">
          <tabler-eye v-if="showPassword" />
          <tabler-eye-off v-else />
        </button>
      </template>
    </VuwiTextfield>

    <div class="px-2">Example showing busy and validation indicator in conbination with a clear button.</div>
    <VuwiTextfield
      v-model="text"
      placeholder="Your name"
      class="border vuwi-border vuwi-shade py-2 h-14"
    >
      <template #prepend>
        <tabler-user class="text-xl opacity-30" />
      </template>
      <template #append>
        <div
          v-if="busy"
          class="vuwi-spinner w-6 h-6 border-3 dark:border-gray-500 dark:border-r-transparent"
          role="status"
        >
          <span class="sr-only">Busy...</span>
        </div>
        <tabler-check v-else-if="valid" class="text-green-500 mr-1" />
        <button v-if="text" class="vuwi-btn vuwi-btn-icon" @click="text = ''">
          <tabler-x />
        </button>
      </template>
    </VuwiTextfield>
  </div>
</template>
