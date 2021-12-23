<script setup lang="ts">
const text = ref('')
</script>

<template>
  <div class="grid gap-4">
    <VuwiTextInput placeholder="No style" />
    <VuwiTextInput placeholder="Styled with a subtle background" class="vuwi-shade" />
    <VuwiTextInput placeholder="Styled with border" class="vuwi-shade border vuwi-border" />
    <VuwiTextInput
      v-model="text"
      label="Fully customized"
      placeholder="Type here..."
      class="bg-purple-800 border-3 border-purple-400 rounded-xl filter drop-shadow-lg text-white custom-textinput"
    >
      <template #prepend>
        <tabler-palette class="w-12 h-12 min-w-12 text-purple-400 mr-2 ml-1" />
      </template>

      <template #append>
        <button v-if="text" class="vuwi-btn w-12 min-w-12 h-12 min-h-12 vuwi-btn-icon bg-purple-400" @click="text = ''">
          <tabler-x class="text-purple-600 text-4xl" />
        </button>
      </template>
    </VuwiTextInput>
  </div>
</template>

<style>
.custom-textinput label {
  @apply text-purple-100 text-lg;
}

.custom-textinput input {
  @apply font-bold text-3xl !pt-6;
}

.custom-textinput input::placeholder {
  color: #ffffff50;
}
</style>
