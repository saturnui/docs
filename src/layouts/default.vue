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
</script>

<template>
  <!-- <Background /> -->
  <main class="vuwi-main1 flex flex-col">
    <div class="fixed left-0 top-0 w-full z-10">
      <AppBar class="vuwi-light-dark border-b dark:border-b-dark-900" />
    </div>
    <div class="vuwi-container vuwi-text navbar pt-12">
      <div class="flex flex-wrap gap-2 p-8">
        <button class="vuwi-btn vuwi-btn-primary" @click="showToast = true">
          <span>Show Toast</span>
        </button>
        <div class="flex flex-wrap gap-2">
          <span v-for="i in 500" :key="i">Item #{{ i }}</span>
        </div>
      </div>
    </div>
  </main>

  <!-- :: Left Drawer :: -->
  <Drawer
    class="
      flex flex-col
      vuwi-light-dark
      border-r
      dark:border-none
      overflow-y-auto overflow-x-hidden
      pt-14
    "
  >
    <Navigation />
  </Drawer>

  <!-- :: Toast :: -->
  <Toast
    v-model="showToast"
    class="vuwi-dark text-gray-200 vuwi-toast-left vuwi-toast-navbar"
  >
    <div class="flex items-center justify-between">
      <div class="flex justify-center items-center gap-4">
        <tabler-message class="text-5xl" />
        <div
          class="
            flex
            h-full
            text-left
            justify-center
            border-l border-opacity-20
            pl-4
          "
        >
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
            class="vuwi-btn rounded uppercase text-xs font-bold text-white"
            @click="showToast = false"
          >
            <span>Dismiss</span>
          </button>
          <button
            class="
              vuwi-btn
              rounded
              vuwi-btn-primary
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
  </Toast>
</template>
