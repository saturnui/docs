<script setup lang="ts">
import IconLock from '~icons/tabler/lock'
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
  { title: 'Form', to: '/pages/form' },
  { title: 'Protected', to: '/pages/protected', icon: IconLock },
]

const menus = [
  {
    title: 'Pages',
    links: [{ title: 'Form', to: '/pages/form' }, { title: 'Protected', to: '/pages/protected' }],
  },
  {
    title: 'Components',
    open: true,
    links: [
      { title: 'Alert', to: '/components/alert' },
      { title: 'Avatar', to: '/components/alert' },
      { title: 'Button', to: '/components/alert' },
      { title: 'Card', to: '/components/alert' },
      { title: 'CodeInput', to: '/components/alert' },
      { title: 'Collapse', to: '/components/alert' },
      { title: 'Color', to: '/components/alert' },
      { title: 'DatePicker', to: '/components/alert' },
      { title: 'Decoration', to: '/components/alert' },
      { title: 'Dialog', to: '/components/alert' },
      { title: 'Drawer', to: '/components/alert' },
      { title: 'Dropdown', to: '/components/alert' },
      { title: 'Dropzone', to: '/components/alert' },
      { title: 'FilePreview', to: '/components/alert' },
      { title: 'FileSelector', to: '/components/alert' },
      { title: 'FormSection', to: '/components/alert' },
      { title: 'Header', to: '/components/alert' },
      { title: 'Layout', to: '/components/alert' },
      { title: 'Line', to: '/components/alert' },
      { title: 'Overlay', to: '/components/alert' },
      { title: 'Pagination', to: '/components/alert' },
      { title: 'Select', to: '/components/alert' },
      { title: 'Spinner', to: '/components/alert' },
      { title: 'Switch', to: '/components/alert' },
      { title: 'Textarea', to: '/components/alert' },
      { title: 'Textfield', to: '/components/alert' },
      { title: 'Toast', to: '/components/alert' },
      { title: 'Tooltip', to: '/components/alert' },
      { title: 'Window', to: '/components/alert' },
    ],
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
    <Component :is="link.icon" />
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
