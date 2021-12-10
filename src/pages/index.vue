<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '~/stores/user'

const showDialog = ref(false)
const { user, displayName, photoUrl } = storeToRefs(useUserStore())
const { addMessage } = useMessenger()
const features = [
  {
    title: 'Show a toast',
    desc: 'Send a toast to the default toast defined in layouts/default.vue',
    action: 'Send notification',
    icon: 'https://cdn2.iconfinder.com/data/icons/cute-bread-slice-emoji-in-different-expressions/200/BREAD_14-1024.png',
    handle: () => {
      addMessage({
        text: 'Hello, world!',
      })
    },
  },
  {
    title: 'Show a dialog',
    desc: 'Open a dialog modal window defined in pages/index.vue',
    action: 'Open dialog',
    icon: 'https://cdn2.iconfinder.com/data/icons/computer-displays/512/Computer_Display_iMac_Monitor_Modal-1024.png',
    handle: () => {
      showDialog.value = true
    },
  },
]
</script>

<template>
  <div class="w-full flex flex-col items-center py-8 sm:py-12">
    <div class="flex flex-col items-center w-full max-w-lg gap-4">
      <div v-if="user" class="flex flex-col items-center text-2xl gap-4">
        <router-link to="profile">
          <Avatar
            :name="displayName"
            :photo="photoUrl"
            class="
              vuwi-avatar-xl
              rounded-full
              overflow-hidden
              bg-blue-500
              text-white
            " />
        </router-link>
        <div class="text-2xl">
          <span>Welcome, {{ displayName }}</span>
        </div>
      </div>
      <div v-else class="flex flex-col items-center text-2xl gap-4">
        <Avatar
          name="Stranger"
          photo="https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-02/64/bandit-asian-male-cowboy-1024.png"
          class="vuwi-avatar-xl rounded-full overflow-hidden text-white" />
        <span>Howdy, stranger!</span>
      </div>
      <div class="text-center text-sm vuwi-text px-8 pb-4 md:pb-0">
        Example Dashboard Page
      </div>
      <!-- <button @click="signout" class="btn btn-lg btn-primary font-bold w-56 mt-5">Logout</button> -->
    </div>
    <div class="p-1 md:p-8 w-full max-w-4xl vuwi-col-2">
      <ActionCard
        v-for="(feature, i) in features"
        :key="i"
        :title="feature.title"
        :desc="feature.desc"
        :action="feature.action"
        :icon="feature.icon"
        @click="feature.handle"></ActionCard>
    </div>
  </div>

  <teleport to="body">
    <VuwiOverlay v-model="showDialog" :modal="true" class="relative z-1">
      <!-- Use Dialog Component -->
      <VuwiDialog class="w-full max-w-xl" @close="showDialog = false">
        <template #title>
          <span class="pl-3 font-bold">Dialog example</span>
        </template>
        <div class="py-3 px-5">
          <span>This is an example of a modal dialog.</span>
        </div>
        <template #actions>
          <div class="vuwi-row justify-end p-2">
            <button
              class="vuwi-btn vuwi-btn-primary px-6 py-2 text-lg"
              @click="showDialog = false">
              Submit
            </button>
          </div>
        </template>
      </VuwiDialog>
      <!-- Or create your own -->
      <!-- <div class="vuwi-card vuwi-dialog w-full max-w-xl">
        <div class="flex items-center justify-between p-2 pl-4">
          <span class="font-bold">Dialog example</span>
          <button
            class="vuwi-btn vuwi-btn-icon rounded-full h-8 w-8"
            @click="showDialog = false"
          >
            <tabler-x class="vuwi-dialog-close-icon h-6 w-6" />
          </button>
        </div>
        <VuwiLine />
        <div class="p-4">This is an example of a modal dialog.</div>
        <div class="vuwi-row justify-end p-2">
          <button
            class="vuwi-btn vuwi-btn-primary px-6 py-2 text-lg"
            @click="showDialog = false"
          >
            Submit
          </button>
        </div>
      </div> -->
    </VuwiOverlay>
  </teleport>
</template>
