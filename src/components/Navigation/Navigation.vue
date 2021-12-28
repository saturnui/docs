<script setup lang="ts">
import LogoTailwind from '~/assets/logo-tailwind.svg'
import LogoVue from '~/assets/logo-vue.svg'
import IconFiles from '~icons/tabler/files'
import IconNotebook from '~icons/tabler/notebook'
import IconBox from '~icons/tabler/box'
import IconComposable from '~icons/tabler/math-function'
import IconExample from '~icons/tabler/photo'
import { isDark, toggleDark, useSdk } from '~/composables'

type MenuLink = {
  title: string
  to?: string
  icon?: string
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
  // { title: 'Form', to: '/pages/form', icon: IconFileText },
  // { title: 'Protected', to: '/pages/protected', icon: IconLock },
  {
    collapsible: true,
    title: 'Introduction',
    icon: IconNotebook,
    links: [{ title: 'Form', to: '/examples/form' }, { title: 'Protected', to: '/examples/protected' }],
  },
  {
    collapsible: true,
    title: 'Getting Started',
    icon: IconFiles,
    links: [{ title: 'Form', to: '/examples/form' }, { title: 'Protected', to: '/examples/protected' }],
  },
  {
    collapsible: true,
    title: 'UI',
    icon: IconBox,
    links: [
      { title: 'Alert', to: '/ui/alert', icon: LogoTailwind },
      { title: 'Avatar', to: '/ui/avatar', icon: LogoVue },
      { title: 'Button', to: '/ui/button', icon: LogoTailwind },
      { title: 'Card', to: '/ui/card', icon: LogoTailwind },
      { title: 'CodeInput', to: '/ui/codeinput', icon: LogoVue },
      { title: 'Collapse', to: '/ui/collapse', icon: LogoVue },
      { title: 'Color', to: '/ui/color', icon: LogoTailwind },
      { title: 'DatePicker', to: '/ui/datepicker', icon: LogoVue },
      { title: 'Decoration', to: '/ui/decoration', icon: LogoTailwind },
      { title: 'Dialog', to: '/ui/dialog', icon: LogoVue },
      { title: 'Drawer', to: '/ui/drawer', icon: LogoVue },
      { title: 'Dropzone', to: '/ui/dropzone', icon: LogoVue },
      { title: 'FilePreview', to: '/ui/filepreview', icon: LogoVue },
      { title: 'FileSelector', to: '/ui/fileselector', icon: LogoVue },
      { title: 'FormSection', to: '/ui/formsection', icon: LogoVue },
      { title: 'Layout', to: '/ui/layout', icon: LogoTailwind },
      { title: 'Line', to: '/ui/line', icon: LogoVue },
      { title: 'Menu', to: '/ui/menu', icon: LogoVue },
      { title: 'Notification', to: '/ui/notification', icon: LogoVue },
      { title: 'Overlay', to: '/ui/overlay', icon: LogoVue },
      { title: 'Pagination', to: '/ui/pagination', icon: LogoVue },
      { title: 'Progress Bar', to: '/ui/progressbar', icon: LogoVue },
      { title: 'Progress Circle', to: '/ui/progresscircle', icon: LogoVue },
      { title: 'Select', to: '/ui/select', icon: LogoVue },
      { title: 'Spinner', to: '/ui/spinner', icon: LogoTailwind },
      { title: 'Switch', to: '/ui/switch', icon: LogoVue },
      { title: 'Tab', to: '/ui/tab', icon: LogoVue },
      { title: 'TextInput', to: '/ui/textinput', icon: LogoVue },
      { title: 'Tooltip', to: '/ui/tooltip', icon: LogoVue },
      { title: 'Window', to: '/ui/window', icon: LogoTailwind },
    ],
  },
  {
    collapsible: true,
    title: 'Composables',
    icon: IconComposable,
    links: [{ title: 'Dark Mode', to: '/examples/protected' }, { title: 'SDK', to: '/examples/protected' }, { title: 'Validators', to: '/examples/protected' }],
  },
  {
    collapsible: true,
    title: 'Examples',
    icon: IconExample,
    links: [{ title: 'Form', to: '/examples/form' }, { title: 'Protected', to: '/examples/protected' }],
  },
]
</script>

<template>
  <div v-for="(item, i) in menuItems" :key="i">
    <VuwiCollapse v-if="item.collapsible" v-model="item.open">
      <template #header="{ open }">
        <div class="px-3 py-2 flex items-center gap-2 nav-link">
          <Component :is="item.icon" v-if="item.icon" class="w-5 h-5" />
          <div v-else class="spacer w-5"></div>
          <span class="font-bold flex-grow">{{ item.title }}</span>
          <tabler-chevron-right
            class="transition duration-150 transform"
            :class="{ 'rotate-90': open }"
          />
        </div>
      </template>

      <div class="overflow-y-auto">
        <router-link v-for="(link, n) in item.links" :key="n" :to="link.to" class="nav-link">
          <!-- <img :src="link.icon" width="14" /> -->
          <div class="w-3"></div>
          {{ link.title }}
        </router-link>
      </div>
    </VuwiCollapse>
    <router-link
      v-else-if="item.to"
      :to="item.to"
      :class="item.icon ? 'p-3 flex items-center gap-4 nav-link' : 'nav-link'"
    >
      <Component :is="item.icon" />
      {{ item.title }}
    </router-link>

    <div v-else>
      <div :class="item.icon ? 'p-3 flex items-center gap-4' : 'nav-link'">
        <Component :is="item.icon" />
        {{ item.title }}
      </div>
      <div class="flex flex-col">
        <router-link
          v-for="(link, n) in item.links"
          :key="n"
          :to="link.to"
          class="nav-link"
        >
          {{ link.title }}
        </router-link>
      </div>
    </div>
  </div>

  <div class="flex-grow" />
  <VuwiLine class="lg:hidden" />
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
