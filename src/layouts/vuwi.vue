<script lang="ts" setup>
// import { storeToRefs } from 'pinia'
// import { useSdk } from '~/composables/sdk'
// import { useUserStore } from '~/stores/user'
// const userStore = useUserStore()
// const { user } = storeToRefs(userStore)
// const router = useRouter()
// const sdk = useSdk()

// onBeforeMount(async () => {
//   const { data } = await sdk.me()
//   userStore.setUser(data)
//   if (!data)
//     router.push('signin')
// })

// const user = {}
// const showDrawer = ref(false)
const showToast = ref(false)

const { onAddMessage } = useMessenger()
onAddMessage(() => {
  showToast.value = true
})
</script>

<template>
  <img src="/vuwi-background.png" class="fixed top-0 -right-120 filter blur-xl opacity-60 dark:opacity-40 select-none">
  <AppBar
    class="fixed top-0 bg-white/90 dark:bg-dark-900/90 wi-text border-b dark:border-dark-800"
  />
  <div class="pt-13 flex justify-center">
    <div class="flex w-full max-w-8xl wi-text">
      <VDrawer class="app-has-appbar text-sm wi-drawer-autohide fixed top-6 pr-4 h-full">
        <Navigation />
      </VDrawer>
      <div class="wi-drawer-left w-full">
        <router-view />
      </div>
      <div class="w-80 wi-drawer-autohide-xl relative h-full">
        <div id="sidenav" class="fixed"></div>
      </div>
    </div>
    <div id="sidemenu" class="absolute z-10"></div>
    <!-- <main class="wi-main flex max-w-8xl app-has-appbar wi-text">
      <VDrawer class="app-has-appbar text-sm wi-drawer-autohide fixed top-0 h-full">
        <Navigation />
      </VDrawer>
      <div class="wi-drawer-left">
        <router-view />
      </div>
      <VDrawer class="wi-drawer-autohide-xl relative h-full bg-red-500">
        <div id="sidenav" class="fixed"></div>
      </VDrawer>
    </main>
    <div id="sidemenu" class="absolute z-10"></div>-->
  </div>
</template>
