<template>
  <div class="vuwi-content1">
    <div v-for="i in 3" :key="i">
      <VuwiLine v-if="i > 1" />

      <VuwiFormSection
        title="Section Title"
        desc="Put a description here about this section."
        :line="i !== 1"
        class="p-4"
      >
        <div class="space-y-4">
          <VuwiTextfield label="Name" required class="vuwi-shade border vuwi-border" />
          <VuwiTextfield label="Email" class="vuwi-shade border vuwi-border" :loading="true" />
        </div>
      </VuwiFormSection>
    </div>
  </div>
</template>
