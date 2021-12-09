import { acceptHMRUpdate, defineStore } from 'pinia'

export interface User {
  id: string
  name: string
  enabled: boolean
  firstName: string
  lastName: string
  role: string
  photoUrl?: string
  email?: string
  emailVerified?: boolean
}

export const useUserStore = defineStore('user', {
  state: () => {
    const user = ref<User>(
    //   {
    //   id: '1',
    //   enabled: true,
    //   name: 'Mock User',
    //   firstName: 'Mock',
    //   lastName: 'User',
    //   role: 'USER',
    // }
    )
    const users = ref<User[]>([])
    const totalUsers = 0
    return {
      user,
      users,
      totalUsers,
    }
  },
  getters: {
    displayName(state): string {
      if (state.user) {
        if (state.user.name) return state.user.name
        return `${state.user.email}`.split('@').pop() as string
      }
      return ''
    },
    photoUrl(state): string {
      if (state.user && state.user.photoUrl) return state.user.photoUrl
      return ''
    },
  },
  actions: {
    setUser(user: User) {
      // this.$patch({ user })
      this.user = user
    },
    setUsers(users: User[], total: number) {
      this.users = users
      this.totalUsers = total
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
