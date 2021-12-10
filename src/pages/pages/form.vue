<template>
  <div v-for="i in 3" :key="i">
    <Line v-if="i > 1" />

    <FormSection
      title="Section Title"
      desc="Put a description here about this section."
      :line="i !== 1"
      class="p-4"
    >
      <div class="space-y-4">
        <Textfield label="Name" required class="vuwi-shade vuwi-border" />
        <Textfield label="Email" class="vuwi-shade vuwi-border" :loading="true" />
      </div>
    </FormSection>
  </div>
</template>
