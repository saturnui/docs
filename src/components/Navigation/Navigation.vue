<script setup lang="ts">
import IconFiles from '~icons/tabler/files'
import IconNotebook from '~icons/tabler/notebook'
import IconBox from '~icons/tabler/box'
import IconComposable from '~icons/tabler/math-function'
import IconExample from '~icons/tabler/photo'
import IconStyle from '~icons/tabler/palette'
import { isDark, toggleDark, useSdk } from '~/composables'

import { useAppStore } from '~/stores/app'
const appStore = useAppStore()

type MenuLink = {
  title: string
  to?: string
  icon?: string
}

type MenuItem = {
  collapsible?: boolean
  icon: any
  image: any
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
    collapsible: false,
    title: 'Guide',
    icon: IconNotebook,
    image: '',
    links: [
      { title: 'Introduction', to: '/Introduction' },
      { title: 'Getting Started', to: '/getting-started' },
    ],
  },
  // {
  //   collapsible: true,
  //   title: 'Getting Started',
  //   icon: IconFiles,
  //   image: '',
  //   links: [{ title: 'Form', to: '/examples/form' }, { title: 'Protected', to: '/examples/protected' }],
  // },
  {
    collapsible: false,
    title: 'Styling',
    icon: IconStyle,
    image: '',
    // image: '/icons/components.png',
    links: appStore.stylingPages,
  },
  {
    collapsible: false,
    title: 'Components',
    icon: IconBox,
    image: '',
    // image: '/icons/components.png',
    links: appStore.componentPages,
  },
  {
    collapsible: false,
    title: 'Composables',
    icon: IconComposable,
    image: '',
    links: [{ title: 'Dark Mode', to: '/examples/protected' }, { title: 'SDK', to: '/examples/protected' }, { title: 'Validators', to: '/examples/protected' }],
  },
  // {
  //   collapsible: true,
  //   title: 'Examples',
  //   icon: IconExample,
  //   image: '',
  //   links: [{ title: 'Form', to: '/examples/form' }, { title: 'Protected', to: '/examples/protected' }],
  // },
]
</script>

<template>
  <div>
    <div v-for="(item, i) in menuItems" :key="i">
      <VuwiCollapse v-if="item.collapsible" v-model="item.open">
        <template #header="{ open }">
          <div class="px-3 flex items-center gap-3 nav-link">
            <div v-if="item.icon" class="nav-link-icon">
              <Component :is="item.icon" class="w-4 h-4" />
            </div>
            <div v-else-if="item.image" class="nav-link-icon">
              <img :src="item.image" class="w-5 h-5" />
            </div>
            <div v-else class="spacer w-5"></div>
            <span class="font-medium flex-grow">{{ item.title }}</span>
            <tabler-chevron-right
              class="transition duration-150 transform"
              :class="{ 'rotate-90': open }"
            />
          </div>
        </template>

        <div class="overflow-y-auto">
          <router-link
            v-for="(link, n) in item.links"
            :key="n"
            :to="link.to"
            class="nav-sublink vuwi-border"
          >{{ link.title }}</router-link>
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

      <!-- TODO: THIS ONE -->
      <div v-else class="pb-5">
        <div :class="item.icon ? 'p-3 flex items-center gap-3' : 'nav-link'">
          <Component :is="item.icon" />
          <span class="font-bold">{{ item.title }}</span>
        </div>
        <div class="flex flex-col">
          <router-link
            v-for="(link, n) in item.links"
            :key="n"
            :to="link.to"
            class="nav-sublink vuwi-border"
          >
            <span>{{ link.title }}</span>
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
  </div>
</template>
