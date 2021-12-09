<script setup lang="ts">
import IconLock from '~icons/tabler/lock'
import IconFiles from '~icons/tabler/files'
import IconFileText from '~icons/tabler/fileText'
import IconBox from '~icons/tabler/box'
import { isDark, toggleDark, useSdk } from '~/composables'

type MenuLink = {
  title: string
  to?: string
}

type MenuItem = {
  collapsible?: boolean
  icon: any
  links?: MenuLink[]
  open?: boolean
  title: string
  to?: string
}

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

const menuItems: MenuItem[] = [
  { title: 'Form', to: '/pages/form', icon: IconFileText },
  { title: 'Protected', to: '/pages/protected', icon: IconLock },
  {
    title: 'Pages',
    icon: IconFiles,
    links: [{ title: 'Form', to: '/pages/form' }, { title: 'Protected', to: '/pages/protected' }],
  },
  {
    collapsible: true,
    title: 'Components',
    icon: IconBox,
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
    collapsible: true,
    title: 'Third Section',
    icon: IconBox,
    links: [{ title: 'Menu #1' }, { title: 'Menu #2' }, { title: 'Menu #3' }],
  },
]
</script>

<template>
  <div v-for="(item, i) in menuItems" :key="i">
    <Collapse
      v-if="item.collapsible"
      v-model="item.open"
      group="menu"
    >
      <template #header="{ open }">
        <div class="p-3 flex items-center gap-4">
          <Component :is="item.icon" v-if="item.icon" />
          <div v-else class="spacer w-5"></div>
          <span class="font-bold flex-grow">{{ item.title }}</span>
          <tabler-chevron-right
            class="transition duration-150 transform"
            :class="{ 'rotate-90': open }"
          />
        </div>
      </template>

      <div class="overflow-y-auto">
        <div v-for="(link, n) in item.links" :key="n" class="menu-link">
          {{ link.title }}
        </div>
      </div>
    </Collapse>
    <router-link
      v-else-if="item.to"
      :to="item.to"
      :class="item.icon ? 'p-3 flex items-center gap-4' : 'menu-link'"
    >
      <Component :is="item.icon" />
      {{ item.title }}
    </router-link>

    <div v-else>
      <div :class="item.icon ? 'p-3 flex items-center gap-4' : 'menu-link'">
        <Component :is="item.icon" />
        {{ item.title }}
      </div>
      <div class="flex flex-col">
        <div v-for="(link, n) in item.links" :key="n" class="menu-link">
          {{ link.title }}
        </div>
      </div>
    </div>
  </div>

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
