<template>
  <div class="p-4">
    <FormSection
      v-for="i in 3"
      :key="i"
      title="Section Title"
      desc="Put a description here about this section."
      :line="i !== 1">
      <div class="space-y-4">
        <Textfield
          label="Name"
          required
          class="vuwi-shade vuwi-border"></Textfield>
        <Textfield
          label="Email"
          class="vuwi-shade vuwi-border"></Textfield>
      </div>
    </FormSection>
  </div>
</template>
