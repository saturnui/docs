<script setup lang="ts">
import { useValidEmail, useValidPassword } from '~/composables'
import { useUserStore } from '~/stores/user'

const { setUser } = useUserStore()
const router = useRouter()

const submit = () => {
  setUser({
    id: '1',
    enabled: true,
    name: 'Mock User',
    firstName: 'Mock',
    lastName: 'User',
    role: 'USER',
  })
  if (router.currentRoute.value.query.redirect)
    router.push(router.currentRoute.value.query.redirect as string)
  else
    router.push('/')
}
const email = ref('user@mail.com')
const password = ref('Password@1')
const showPassword = ref(false)
const busy = ref(false)
// const requireRule = (v: string) => useRequired(v)
const emailRule = (v: string) => useValidEmail(v)
const passwordRule = (v: string) => useValidPassword(v)
const passwordType = computed(() => {
  return showPassword.value ? 'text' : 'password'
})
</script>

<template>
  <div class="vuwi-content vuwi-card p-4 max-w-xl">
    <div class="pl-2 pb-5 text-2xl">
      <span>Create an account</span>
    </div>
    <vuwi-form class="space-y-4" @submit="submit">
      <Textfield
        v-model="email"
        name="email"
        label="Email"
        :rules="emailRule"
        class="vuwi-border vuwi-shade"
      />
      <Textfield
        v-model="password"
        name="password"
        label="Password"
        :type="passwordType"
        placeholder="••••••••"
        :rules="passwordRule"
        class="vuwi-border vuwi-shade"
      >
        <ToggleVisible v-model="showPassword" />
      </Textfield>
      <div class="flex items-center justify-end">
        <button
          v-if="busy"
          type="button"
          disabled
          class="btn bg-gray-300 btn-loading mt-3 py-3 w-full"
        >
          <span class="w-4 h-4 spinner"></span>
        </button>
        <button
          v-else
          type="submit"
          class="vuwi-btn vuwi-btn-xl vuwi-btn-primary w-full mt-3"
        >
          Signup
        </button>
      </div>
    </vuwi-form>
  </div>
</template>

<route lang="yaml">
meta:
  layout: plain
</route>
