
<script setup lang="ts">
const name = ref('Smiles Davis')
const email = ref('smiles@mail.com')
const password = ref('password')
const enabled = ref(true)
</script>

<template>
  <VuwiFormSection title="Profile" desc="Public profile available for all to see.">
    <div class="space-y-4">
      <VuwiTextInput v-model="name" label="Name" required class="border vuwi-border" />
      <VuwiTextInput v-model="email" label="Email" class="border vuwi-border" />
    </div>
  </VuwiFormSection>

  <VuwiLine class="py-4" />

  <VuwiFormSection title="Security" desc="Keeps your account secure">
    <div class="space-y-4">
      <VuwiTextInput v-model="password" label="Password" type="password" class="border vuwi-border" />
      <VuwiSwitch v-model="enabled">
        <span class="pl-2">Two-factor authentication</span>
      </VuwiSwitch>
    </div>
  </VuwiFormSection>

  <VuwiLine class="py-4" />

  <div class="flex justify-end">
    <button class="vuwi-btn vuwi-btn-primary vuwi-btn-lg min-w-48">Submit</button>
  </div>
</template>
