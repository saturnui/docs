<script setup lang="ts">

type SidenavLink = {
  title: string
  to?: string
  icon?: string
}

type SidenavItem = {
  links?: SidenavLink[]
  open?: boolean
  title: string
  to?: string
}

const props = defineProps({
  data: {
    default: (): SidenavItem[] => [],
  },
})
</script>

<template>
  <div class="mt-8 pl-5 mb-4 text-sm font-bold vuwi-text">
    <span>On this page</span>
  </div>

  <div v-for="(item, i) in props.data" :key="i" class="text-sm">
    <router-link v-if="item.to" :to="item.to" class="sidenav-link">
      <span>{{ item.title }}</span>
    </router-link>

    <div v-else>
      <div class="sidenav-link">
        <span>{{ item.title }}</span>
      </div>
      <div class="flex flex-col">
        <router-link v-for="(link, n) in item.links" :key="n" :to="link.to" class="sidenav-link pl-7">
          <tabler-chevron-right />
          {{ link.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>
