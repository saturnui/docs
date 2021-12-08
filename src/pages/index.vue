<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '~/stores/user'
const { displayName, photoUrl } = storeToRefs(useUserStore())
</script>

<template>
  <div class="w-full flex flex-col items-center py-8 sm:py-12">
    <div class="flex flex-col items-center w-full max-w-lg gap-4">
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
          "
        />
      </router-link>
      <div class="text-2xl">
        <span>Welcome, {{ displayName }}</span>
      </div>
      <div class="text-center text-sm vuwi-text px-8 pb-4 md:pb-0">
        Example Dashboard Page
      </div>
      <!-- <button @click="signout" class="btn btn-lg btn-primary font-bold w-56 mt-5">Logout</button> -->
    </div>
    <div class="p-1 md:p-8 w-full max-w-4xl vuwi-col-2">
      <router-link
        v-for="i in 4"
        :key="i"
        to="protected"
      >
        <ActionCard

          title="Put your title here"
          desc="This is a small description about this card. Describe the action here."
          action="Perform an action"
          icon="https://cdn3.iconfinder.com/data/icons/scenarium-vol-10/128/036-1024.png"
        ></ActionCard>
      </router-link>
    </div>
  </div>
</template>
