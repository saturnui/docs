
<script setup lang="ts">
const name = ref('Smiles Davis')
const email = ref('smiles@mail.com')
const password = ref('password')
const enabled = ref(true)
</script>

<template>
  <VFormSection title="Profile" desc="Public profile available for all to see.">
    <div class="space-y-4">
      <VTextInput v-model="name" label="Name" required class="border wi-border" />
      <VTextInput v-model="email" label="Email" class="border wi-border" />
    </div>
  </VFormSection>

  <VLine class="py-4" />

  <VFormSection title="Security" desc="Keeps your account secure">
    <div class="space-y-4">
      <VTextInput v-model="password" label="Password" type="password" class="border wi-border" />
      <VSwitch v-model="enabled">
        <span class="pl-2">Two-factor authentication</span>
      </VSwitch>
    </div>
  </VFormSection>

  <VLine class="py-4" />

  <div class="flex justify-end">
    <VButton size="lg" class="wi-primary min-w-48">Submit</VButton>
  </div>
</template>
