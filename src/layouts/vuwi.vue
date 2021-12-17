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
  <AppBar class="fixed top-0 vuwi-card border-b dark:border-b-dark-900 z-1" />
  <main class="vuwi-main app-has-appbar">
    <VuwiDrawer
      class="app-has-appbar text-sm vuwi-drawer-autohide fixed top-0 h-full vuwi-card text-dark-50 border-r dark:border-none"
    >
      <Navigation />
    </VuwiDrawer>
    <div class="vuwi-drawer-left vuwi-drawer-right-xl vuwi-text">
      <router-view />
    </div>
    <VuwiDrawer class="app-has-appbar vuwi-drawer-autohide-xl fixed top-0 right-0 h-full">
      <div id="sidenav"></div>
    </VuwiDrawer>
  </main>
  <div id="sidemenu" class="absolute z-1"></div>
</template>
