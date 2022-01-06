<script setup lang="ts">
const text = ref('')
const showPassword = ref(false)
const fieldType = computed(() => {
  return showPassword.value ? 'text' : 'password'
})
</script>

<template>
  <VTextInput
    v-model="text"
    :type="fieldType"
    label="Password"
    placeholder="*****"
    class="border wi-border h-14"
  >
    <template #prepend>
      <tabler-lock class="text-xl opacity-30" />
    </template>
    <template #append>
      <VButton icon @click="showPassword = !showPassword">
        <tabler-eye v-if="showPassword" />
        <tabler-eye-off v-else />
      </VButton>
    </template>
  </VTextInput>
</template>
