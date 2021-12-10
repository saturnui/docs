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
      { title: 'Alert', to: '/examples/example-alert' },
      { title: 'Avatar', to: '/examples/example-avatar' },
      { title: 'Button', to: '/examples/example-button' },
      { title: 'Card', to: '/examples/example-card' },
      { title: 'CodeInput', to: '/examples/example-codeinput' },
      { title: 'Collapse', to: '/examples/example-collapse' },
      { title: 'Color', to: '/examples/example-color' },
      { title: 'DatePicker', to: '/examples/example-datepicker' },
      { title: 'Decoration', to: '/examples/example-decoration' },
      { title: 'Dialog', to: '/examples/example-dialog' },
      { title: 'Drawer', to: '/examples/example-drawer' },
      { title: 'Dropdown', to: '/examples/example-dropdown' },
      { title: 'Dropzone', to: '/examples/example-dropzone' },
      { title: 'FilePreview', to: '/examples/example-filepreview' },
      { title: 'FileSelector', to: '/examples/example-fileselector' },
      { title: 'FormSection', to: '/examples/example-formsection' },
      { title: 'Header', to: '/examples/example-header' },
      { title: 'Layout', to: '/examples/example-layout' },
      { title: 'Line', to: '/examples/example-line' },
      { title: 'Overlay', to: '/examples/example-overlay' },
      { title: 'Pagination', to: '/examples/example-pagination' },
      { title: 'Select', to: '/examples/example-select' },
      { title: 'Spinner', to: '/examples/example-spinner' },
      { title: 'Switch', to: '/examples/example-switch' },
      { title: 'Textarea', to: '/examples/example-textarea' },
      { title: 'Textfield', to: '/examples/example-textfield' },
      { title: 'Toast', to: '/examples/example-toast' },
      { title: 'Tooltip', to: '/examples/example-tooltip' },
      { title: 'Window', to: '/examples/example-window' },
    ],
  },
  // {
  //   collapsible: true,
  //   title: 'Third Section',
  //   icon: IconBox,
  //   links: [{ title: 'Menu #1' }, { title: 'Menu #2' }, { title: 'Menu #3' }],
  // },
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
        <div class="p-3 flex items-center gap-4 menu-link">
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
        <router-link v-for="(link, n) in item.links" :key="n" :to="link.to" class="menu-link">
          {{ link.title }}
        </router-link>
      </div>
    </Collapse>
    <router-link
      v-else-if="item.to"
      :to="item.to"
      :class="item.icon ? 'p-3 flex items-center gap-4 menu-link' : 'menu-link'"
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
        <router-link v-for="(link, n) in item.links" :key="n" :to="link.to" class="menu-link">
          {{ link.title }}
        </router-link>
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
