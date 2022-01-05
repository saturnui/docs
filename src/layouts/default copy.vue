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
// const showToast = ref(false)

// const { onAddMessage } = useMessenger()
// onAddMessage(() => {
//   showToast.value = true
// })
</script>

<template>
  <AppBar class="fixed top-0 wi-light-dark border-b dark:border-b-dark-900 z-1" />
  <main class="wi-main app-has-appbar">
    <VDrawer class="app-has-appbar wi-drawer-autohide fixed top-0  h-full wi-light-dark border-r dark:border-none">
      <Navigation />
    </VDrawer>
    <div class="wi-drawer-left wi-drawer-right wi-text">
      <router-view />
    </div>
    <VDrawer class="app-has-appbar wi-drawer-autohide fixed top-0 right-0 h-full wi-light-dark border-l dark:border-none">
      <Navigation />
    </VDrawer>
  </main>

  <!-- :: Toast :: -->
  <!-- <VToast
    v-model="showToast"
    class="wi-dark text-gray-200 wi-toast-left wi-toast-navbar"
  >
    <div class="flex items-center justify-between">
      <div class="flex justify-center items-center gap-4">
        <tabler-message class="text-5xl" />
        <div class="flex h-full text-left justify-center border-l border-opacity-20 pl-4">
          This is a toast message example. It supports multiple lines.
        </div>
      </div>
    </div>

    <template #action>
      <div class="pt-4 px-2 flex items-center">
        <span class="text-sm">1 of 3</span>
        <div class="flex-grow"></div>
        <div class="flex gap-4">
          <button
            class="wi-btn rounded uppercase text-xs font-bold text-white"
            @click="showToast = false"
          >
            <span>Dismiss</span>
          </button>
          <button
            class="
              wi-btn
              rounded
              wi-primary
              text-xs
              uppercase
              font-bold
              text-white
            "
            @click="showToast = false"
          >
            <span>Ok</span>
          </button>
        </div>
      </div>
    </template>
  </VToast> -->
</template>
