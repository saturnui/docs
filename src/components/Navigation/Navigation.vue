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

const links = [
  { title: 'Form', to: '/examples/form' },
  { title: 'Protected', to: '/examples/protected' },
]

const menus = [
  {
    title: 'First Section',
    open: true,
    links: [{ title: 'Menu #1' }, { title: 'Menu #2' }, { title: 'Menu #3' }],
  },
  {
    title: 'Second Section',
    links: [{ title: 'Menu #1' }, { title: 'Menu #2' }, { title: 'Menu #3' }],
  },
  {
    title: 'Third Section',
    links: [{ title: 'Menu #1' }, { title: 'Menu #2' }, { title: 'Menu #3' }],
  },
]
</script>

<template>
  <router-link
    v-for="(link, n) in links"
    :key="n"
    :to="link.to"
    class="menu-link"
  >
    {{ link.title }}
  </router-link>
  <Collapse
    v-for="(menu, i) in menus"
    :key="i"
    v-model="menu.open"
    group="menu"
  >
    <template #header="{ open }">
      <div class="p-3 flex items-center gap-4">
        <tabler-box />
        <span class="font-bold flex-grow">{{ menu.title }}</span>
        <tabler-chevron-right
          class="transition duration-150 transform"
          :class="{ 'rotate-90': open }"
        />
      </div>
    </template>

    <div class="overflow-y-auto">
      <div v-for="(link, n) in menu.links" :key="n" class="menu-link">
        {{ link.title }}
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
