<script setup lang="ts">
import { isDark, toggleDark, useSdk } from '~/composables'
const emit = defineEmits(['close'])

// const { t } = useI18n()
const router = useRouter()
const showMenu = ref(false)
const sdk = useSdk()

const navTo = (path: string) => {
  router.push(path)
  showMenu.value = false
  emit('close')
}

const toggleDarkMode = () => {
  toggleDark()
  emit('close')
}

const signout = async () => {
  await sdk.signout()
  router.push('signin')
  emit('close')
}
</script>

<template>
  <Collapse v-for="i in 3" :key="i" group="menu">
    <template #header>
      <div class="flex items-center gap-4">
        <tabler-box />
        <span class="font-bold">Section {{ i }}</span>
      </div>
    </template>
    <div class="overflow-y-auto">
      <div v-for="n in 8" :key="n" class="vuwi-menu-item">
        Menu Item {{ n }}
      </div>
    </div>
  </Collapse>
  <div class="flex-grow" />
  <Line class="lg:hidden" />
  <div class="flex items-center px-3 py-2 lg:hidden">
    <div
      class="flex items-center gap-3 px-4 py-2 text-sm vuwi-hover"
      role="menuitem"
      tabindex="-1"
      @click="navTo('profile')"
    >
      <tabler-user />
    </div>
    <div
      class="flex items-center gap-3 px-4 py-2 text-sm vuwi-hover"
      role="menuitem"
      tabindex="-1"
      @click="toggleDarkMode"
    >
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </div>
    <div
      class="flex items-center gap-3 px-4 py-2 text-sm vuwi-hover"
      role="menuitem"
      tabindex="-1"
      @click="signout"
    >
      <tabler-logout />
    </div>
  </div>
</template>
