<script setup lang="ts">
const text = ref('')
const showPassword = ref(false)
const fieldType = computed(() => {
  return showPassword.value ? 'text' : 'password'
})
</script>

<template>
  <VuwiTextInput
    v-model="text"
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
  </VuwiTextInput>
</template>
