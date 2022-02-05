<script setup lang="ts">
// import { useValidEmail, useValidPassword } from '~/composables'
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
// const emailRule = (v: string) => useValidEmail(v)
// const passwordRule = (v: string) => useValidPassword(v)
const passwordType = computed(() => {
  return showPassword.value ? 'text' : 'password'
})
</script>

<template>
  <div class="sa-content sa-light-dark hover:sa-hover border sa-border shadow rounded-b-lg -mt-1 p-4 max-w-xl">
    <div class="pl-2 pb-5 text-2xl">
      <span>Create an account</span>
    </div>
    <VuForm class="space-y-4" @submit="submit">
      <VTextfield
        v-model="email"
        name="email"
        label="Email"
        class="border sa-border sa-shade"
      />
      <VTextfield
        v-model="password"
        name="password"
        label="Password"
        :type="passwordType"
        placeholder="••••••••"
        class="border sa-border sa-shade"
      >
        <ToggleVisible v-model="showPassword" />
      </VTextfield>
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
          class="sa-btn sa-btn-xl sa-primary w-full mt-3"
        >Signup</button>
      </div>
    </VuForm>
  </div>
</template>

<route lang="yaml">
meta:
  layout: plain
</route>
