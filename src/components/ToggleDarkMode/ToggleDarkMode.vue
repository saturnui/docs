<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
const { t } = useI18n()
</script>

<template>
  <VButton
    icon
    class="bg-dark-400 bg-opacity-20"
    :title="t('button.toggle_dark')"
    @click="toggleDark()"
  >
    <carbon-moon v-if="isDark" />
    <carbon-sun v-else />
  </VButton>
</template>
