<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSdk } from '~/composables/sdk'
import { useUserStore } from '~/stores/user'
import { isDark, toggleDark } from '~/composables'

const userStore = useUserStore()
const { t } = useI18n()
const router = useRouter()
const sdk = useSdk()
const showDrawer = ref(false)
const showMenu = ref(false)
const menu = ref()
const { user, displayName, photoUrl } = storeToRefs(userStore)

const handleSwipeEnd = (data: { direction: string }) => {
  if (data.direction === 'LEFT') showDrawer.value = false
}

const close = () => {
  showDrawer.value = false
}

const navTo = (path: string) => {
  router.push(path)
  showMenu.value = false
}

const toggleDarkMode = () => {
  toggleDark()
  close()
}

const openMenu = () => {
  showMenu.value = true
  nextTick(() => {
    onClickOutside(menu.value, () => {
      showMenu.value = false
    })
  })
}

const signout = async () => {
  await sdk.signout()
  router.push('signin')
}

// onBeforeMount(async () => {
// const { data } = await sdk.me()
// userStore.setUser(data)
// if (!data) router.push('signin')
// })
</script>

<template>
  <div class="app-appbar vuwi-light-dark">
    <div class="flex w-full items-center gap-4">
      <button
        class="lg:hidden vuwi-btn vuwi-btn-icon"
        @click="showDrawer = !showDrawer"
      >
        <tabler-menu-2 />
      </button>
      <div class="flex flex-grow lg:pl-5 cursor-pointer">
        <router-link to="/" class="font-bold">Logo here</router-link>
      </div>
      <div class="hidden lg:block relative top-0 cursor-pointer">
        <button
          class="
            vuwi-btn vuwi-btn-icon
            bg-white bg-opacity-10
            hover:bg-white hover:bg-opacity-10
          "
          @click="openMenu"
        >
          <Avatar
            v-if="user"
            :name="displayName"
            :photo="photoUrl"
            class="
              vuwi-avatar-sm
              bg-primary
              text-white
              rounded-full
              overflow-hidden
            "
          />
        </button>
        <transition name="slide-down">
          <div
            v-if="showMenu"
            ref="menu"
            class="
              grid
              origin-top-right
              absolute
              right-0
              mt-2
              rounded-md
              shadow-lg
              py-1
              vuwi-light-dark
              ring-1 ring-black ring-opacity-5
              focus:outline-none
            "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabindex="-1"
          >
            <div
              class="flex items-center gap-3 px-4 py-2 text-sm vuwi-hover"
              role="menuitem"
              tabindex="-1"
              @click="navTo('profile')"
            >
              <tabler-user />
              <span>Your Profile</span>
            </div>
            <div
              class="flex items-center gap-3 px-4 py-2 text-sm vuwi-hover"
              role="menuitem"
              tabindex="-1"
              @click="toggleDarkMode"
            >
              <carbon-moon v-if="isDark" />
              <carbon-sun v-else />
              <span
                v-if="isDark"
                class="whitespace-nowrap pr-2"
              >Appearance: Dark</span>
              <span
                v-else
                class="whitespace-nowrap pr-2"
              >Appearance: Light</span>
            </div>
            <div
              class="flex items-center gap-3 px-4 py-2 text-sm vuwi-hover"
              role="menuitem"
              tabindex="-1"
              @click="signout"
            >
              <tabler-logout />
              <span>Sign out</span>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <Overlay
      v-model="showDrawer"
      class="z-0"
      position="left"
      @swipe:end="handleSwipeEnd"
    >
      <div class="flex flex-col rounded-none h-full w-90 vuwi-light-dark">
        <div class="p-2 flex items-center h-14 gap-4">
          <button
            class="vuwi-btn vuwi-btn-icon"
            @click="showDrawer = !showDrawer"
          >
            <tabler-menu-2 />
          </button>
          <div class="flex">
            <span class="font-bold">Logo here</span>
          </div>
        </div>
        <Navigation @close="showDrawer = false" />
      </div>
    </Overlay>
  </div>
</template>
